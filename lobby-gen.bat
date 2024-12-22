@ECHO OFF
setlocal
cd "E:\SteamLibrary\steamapps\common\Gunfire Reborn"
start "Gunfire Reborn.exe" "E:\SteamLibrary\steamapps\common\Gunfire Reborn\Gunfire Reborn.exe"
python E:\UnityStuff\tekken-lobby-link-generator\test-script.py https://steamcommunity.com/id/bongbobg/ %*
