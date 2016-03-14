@echo off
call babel --presets react,es2015 src --out-dir build 
call browserify -t [ babelify --presets [ react ] ] build/apps/AllCampaignActivity/AllCampaignActivity.js -o sitecore/shell/client/apps/AllCampaignActivity/AllCampaignActivity.js
echo Done