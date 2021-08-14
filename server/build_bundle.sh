#!/usr/bin/env bash
app_name='business-card'

cd ..
rm -f ${app_name}-payload.zip

echo '[1/4] Building latest website bundle'
yarn run build:prod

echo '[2/4] Zipping bundle'
zip -r ${app_name}-payload.zip public
mv ${app_name}-payload.zip server/${app_name}-payload.zip
cd server || exit

echo '[3/4] Installing latest server dependencies'
npm install

echo '[4/4] Zipping server'
zip -r ${app_name}-payload.zip node_modules package.json package-lock.json web.js
mv ${app_name}-payload.zip ../${app_name}-payload.zip

echo 'Done!'
