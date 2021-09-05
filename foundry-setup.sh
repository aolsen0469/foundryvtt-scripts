#!/bin/bash
URL_PATH='https://foundryvtt.s3.amazonaws.com/releases/0.8.9/foundryvtt-0.8.9.zip?AWSAccessKeyId=AKIA2KJE5YZ3EFLQJT6N&Signature=eqOD5zm%2FdtMYbiOUc2P0BVAPUCg%3D&Expires=1630862840'
APP_PATH='/foundry-app'
DATA_PATH='/foundry-data'
mkdir -p ${DATA_PATH}
mkdir -p ${APP_PATH}
sudo apt install -y libssl-dev zip curl wget unzip
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt install -y nodejs
wget $URL_PATH -O foundryvtt.zip
sudo unzip foundryvtt.zip -d ${APP_PATH}
sudo node ${APP_PATH}/resources/app/main.js --port=80 --dataPath=${DATA_PATH}
cd ${DATA_PATH}/Data/systems  ; git clone https://gitlab.com/foundrynet/dnd5e
