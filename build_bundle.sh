#!/usr/bin/env bash
app_name='business-card'

echo -ne '[1/4] Cleaning... '
rm -f terraform/${app_name}-payload.zip
echo 'Done.'

echo '[2/4] Building latest website bundle'
yarn run build:prod

echo '[3/4] Zipping bundle'
zip -r ${app_name}-payload.zip public

echo '[4/4] Zipping server'
zip -j ${app_name}-payload.zip server/{package.json,app.js}
mv ${app_name}-payload.zip terraform/${app_name}-payload.zip

echo 'Done!'
