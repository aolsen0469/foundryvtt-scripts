#!/bin/bash
#APP='/home/netisopl516/resources/app'
APP_PATH='/foundry-app'
DATA_PATH='/foundry-data'
mkdir -p $DATA_PATH
mkdir -p $APP_PATH
sudo apt install -y libssl-dev zip
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt install -y nodejs
wget https://foundryvtt.s3-us-west-2.amazonaws.com/releases/043-8vcvlk129cs7/foundryvtt-0.4.3.zip -O foundryvtt.zip
sudo unzip foundryvtt.zip -d $APP_PATH
sudo node $APP/resources/app/main.js --port=80 --dataPath=$DATA_PATH
cd $DATA_PATH/Data/systems  ; git clone https://gitlab.com/foundrynet/dnd5e
