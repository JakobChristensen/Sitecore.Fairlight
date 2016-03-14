@echo off
call babel --presets react,es2015 src --out-dir build 
call browserify -t [ babelify --presets [ react ] ] build/apps/AllCampaignActivity/index.js -o sitecore/shell/client/apps/AllCampaignActivity/index.js
echo Done