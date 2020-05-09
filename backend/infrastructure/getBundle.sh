wget -O ./backendProductionBundle.js https://storage.yandexcloud.net/text.selectapp.net/production/backendProductionBundle.js
pkill node
node ./backendProductionBundle.js &