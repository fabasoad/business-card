#!/usr/bin/env bash
app_name='business-card'
rm -f ${app_name}-payload.zip

echo '[1/4] Installing latest server dependencies'
npm install
cd ..

echo '[2/4] Building latest website bundle'
yarn run build:prod

echo '[3/4] Zipping bundle'
zip -r ${app_name}-payload.zip public
mv ${app_name}-payload.zip server/${app_name}-payload.zip
cd server || exit

echo '[4/4] Zipping server'
zip -r ${app_name}-payload.zip node_modules package.json package-lock.json web.js

echo 'Done!'
