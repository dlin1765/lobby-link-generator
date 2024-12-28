from pynput import keyboard
import requests
from bs4 import BeautifulSoup
import pyperclip
import sys
import os
import re

# url = 'https://steamcommunity.com/id/bongbobg/'
url = sys.argv[1]
class MyException(Exception): pass

# my exe installer needs to store the locations for all .bat files created so that it can edit them
# print(os.getcwd()) to get path to self
# all i need is the file path to the game 
# steam://joinlobby/1217060/109775244563878939/76561198402013855

def on_release(key):
    print(key.char +  ' released\n')
    if key == keyboard.Key.esc:
        return False

def on_activate():
    print('trying to access steam profile')
    joinGameTag = ''
    try:
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            gameStatus = soup.find_all('div', {"class": "profile_in_game"})
            if len(list(gameStatus[0].children)) == 3:
                print('no game open or not online')
            else:
                for child in gameStatus[0].children:
                    if(str(child) != '\n' and child['class'][0] == 'profile_in_game_joingame'):
                        joinGameTag = child
                if len(list(joinGameTag.contents)) == 1:
                    print('no lobby detected')
                else:
                    print('lobby detected')
                    print(joinGameTag.contents[1]['href'])
                    pyperclip.copy(joinGameTag.contents[1]['href'])
                return None
        else:
            print('Error:', response.status_code)
            return None
    except MyException as e:
        print(e.args[0])

def for_canonical(f):
    if f == keyboard.Key.esc:
        return False
    return lambda k: f(l.canonical(k))

hotkey = keyboard.HotKey(
    keyboard.HotKey.parse('<ctrl>+c'),
    on_activate)
with keyboard.Listener(
        on_press=for_canonical(hotkey.press),
        on_release=for_canonical(hotkey.release)) as l:
    l.join()
print('lobby generator running, press ctrl c while in a lobby to get your steam lobby link')

# def on_press(key):
#     try:
#         print(key.char + " key pressed\n")
#     except AttributeError:
#         print("special key {key} pressed\n")

# def on_release(key):
#     print(key.char +  ' released\n')
#     if key == keyboard.Key.esc:
#         return False

# # Collect events until released
# with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
#     listener.join()