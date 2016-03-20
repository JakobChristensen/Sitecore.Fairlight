@echo off
call babel --presets react,es2015 src --out-dir build 

rem call browserify -t [ babelify --presets [ react ] ] build/apps/AllCampaignActivity/index.js -o sitecore/shell/client/apps/AllCampaignActivity/index.js
rem call browserify -t [ babelify --presets [ react ] ] build/apps/LaunchPad/index.js -o sitecore/shell/client/apps/LaunchPad/index.js
call browserify -t [ babelify --presets [ react ] ] build/apps/MediaLibrary/index.js -o sitecore/shell/client/apps/MediaLibrary/index.js

echo Done