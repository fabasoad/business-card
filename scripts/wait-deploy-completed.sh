#!/usr/bin/env sh

created_after=""
deploy_id=""

get_current_status() {
  if [ -z "${deploy_id}" ]; then
    url="https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys"
    if [ -n "${created_after}" ]; then
      url="${url}?createdAfter=${created_after}"
    fi
    response=$(curl --silent --request GET \
      --url "${url}" \
      --header "accept: application/json" \
      --header "authorization: Bearer ${RENDER_API_KEY}")
    if echo "${response}" | grep -qE '^\[{.*}\]$'; then
      deploy_id=$(echo "${response}" | jq -r '.[0].deploy.id')
      echo "${response}" | jq -r '.[0].deploy.status'
    elif [ "${response}" = '[]' ]; then
      echo "null"
    else
      echo "[error] Unexpected response: ${response}" >&2
      echo "null"
    fi
  else
    curl --request GET \
      --url "https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys/${deploy_id}" \
      --header "accept: application/json" \
      --header "authorization: Bearer ${RENDER_API_KEY}" | jq -r '.deploy.status'
  fi
}

main() {
  created_after="$1"

  max_attempts_timeout=10
  attempt_timeout=1
  sleep_timeout=5

  while [ $attempt_timeout -le $max_attempts_timeout ]; do
    status=$(get_current_status)

    if [ "$status" = "null" ]; then
      if [ $attempt_timeout -eq $max_attempts_timeout ]; then
        echo "::error title=Timeout::Even after $((max_attempts_timeout * sleep_timeout)) seconds new deployment was not found."
        exit 1
      fi
      echo "[info] Attempt $attempt_timeout/$max_attempts_timeout: Empty array received. Retrying in $sleep_timeout seconds..."
      sleep $sleep_timeout
      attempt_timeout=$((attempt_timeout + 1))
    else
      attempt_status=1
      max_attempts_status=10
      sleep_status=20
      while [ "$status" = "created" ] \
        || [ "$status" = "pre_deploy_in_progress" ] \
        || [ "$status" = "build_in_progress" ] \
        || [ "$status" = "update_in_progress" ]; do
        if [ $attempt_status -eq $max_attempts_status ]; then
          echo "::error title=Timeout::Even after $((max_attempts_status * sleep_status)) seconds deployment status left in \"$status\" state."
          exit 1
        fi
        echo "[info] Attempt $attempt_status/$max_attempts_status: Deployment is not ready yet. Current deployment status: $status. Retrying in $sleep_status seconds..."
        sleep $sleep_status
        attempt_status=$((attempt_status + 1))
        status=$(get_current_status)
      done
      if [ "$status" = "live" ]; then
        echo "[info] Website is live now."
        exit 0
      else
        echo "::error title=Deployment failed::Current deployment status: $status"
        exit 1
      fi
    fi
  done
}

main $@
