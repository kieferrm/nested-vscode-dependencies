#!/bin/bash

npm install typescript
cd node_modules 
ln -s ../library-source library
cd ../library-source
npm install vscode
npm run postinstall
npm run compile
cd ../program
npm install vscode
npm run postinstall
npm run compile