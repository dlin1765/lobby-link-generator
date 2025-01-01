import requests
import keyboard
from bs4 import BeautifulSoup
import pyperclip
import sys
import psutil
from tkinter import *
import tkinter as tk

class MyException(Exception): pass

def on_activate_link():
    statusLabel.configure(text='Trying to access Steam profile')
    joinGameTag = ''
    try:
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            gameStatus = soup.find_all('div', {"class": "profile_in_game"})
            if len(list(gameStatus[0].children)) == 3:
                statusLabel.configure(text='No game open or not online')
            else:
                for child in gameStatus[0].children:
                    if(str(child) != '\n' and child['class'][0] == 'profile_in_game_joingame'):
                        joinGameTag = child
                if len(list(joinGameTag.contents)) == 1:
                    statusLabel.configure(text='No lobby detected for ' + gameName)
                else:
                    link = joinGameTag.contents[1]['href']
                    pyperclip.copy('https://lobbylinkable.com/to/'+link)
                    statusLabel.configure(text='Lobby link copied\n'+'https://lobbylinkable.com/to/'+link)
                return None
        else:
            print('Error:', response.status_code)
            return None
    except MyException as e:
        print(e.args[0])

def on_activate_quit():
    statusLabel.configure(text='Quitting...')
    root.destroy()
    sys.exit()

def find_game():
    processes = psutil.process_iter()
    for process in processes:
        try:
            if(process.exe() == exePath):
                global gameProcess 
                gameProcess = process
                return True
        except psutil.AccessDenied:
            statusLabel.configure(text='Access denied')
    return False

def checkForGameRunning():
    global hasGameOpened
    if not hasGameOpened:
        if(find_game()):
            hasGameOpened = True
            keyboard.add_hotkey('ctrl+c', on_activate_link)
            statusLabel.configure(text= 'Lobby Generator ready')
            status2Label.configure(text = gameName + ' found and is running')
            checkGameStillRunning()
        else:
            root.after(1000, checkForGameRunning)

def checkGameStillRunning():
    if(gameProcess.is_running()):
        root.after(10000, checkGameStillRunning)
    else:
        on_activate_quit()

# url = 'https://steamcommunity.com/id/bongbobg/'
hasGameOpened = False
gameProcess = None
paramErrorTxt = 'Not Provided: '
try:
    url = sys.argv[1]
except: 
    url = None
    paramErrorTxt = paramErrorTxt + 'URL '
try:
    gameName = sys.argv[2]
except: 
    gameName = None
    paramErrorTxt = paramErrorTxt + 'Game Name '
try:
    gamePath = sys.argv[3]
except: 
    gamePath = None        
    paramErrorTxt = paramErrorTxt + 'Game Path '
try:
    exePath = gamePath + '\\' + gameName + '.exe'
except: 
    exePath = None


keyboard.add_hotkey('ctrl+alt+q', on_activate_quit)
root = tk.Tk()
root.title('Lobby Generator')
root.geometry('500x300')
root.minsize(500, 300)
root.maxsize(500, 300)
root.configure(background='#1b2838')
statusFrame = Frame(root, background='#2a475e')
aboutFrame = Frame(root, background='#1b2838')
label1 = tk.Label(root, text='Lobby Generator', fg='white', background='#1b2838', font=16)
hotkeyLabel = tk.Label(aboutFrame, text = 'Controls ', fg = 'white', background = '#1b2838')
copyLabel = tk.Label(aboutFrame, text = 'ctrl + c (copy lobby link)', fg = 'white', background='#1b2838')
quitLabel = tk.Label(aboutFrame, text = 'ctrl + alt + q (quit program)', fg = 'white', background='#1b2838')
infoLabel = tk.Label(aboutFrame, text= 'Thanks for using lobbylinkable! For troubleshooting visit https://lobbylinkable.com/troubleshooting', fg='white', background='#1b2838', wraplength=250)
label2 = tk.Label(root, text='Status', fg='white', background='#2a475e', font = 16)

initStatus = ''
if(paramErrorTxt != 'Not Provided: '):
    initStatus = paramErrorTxt
    hasGameOpened = True
    status2Label = tk.Label(statusFrame, text = 'Set up lobby-gen.bat again', fg='white', background='red', font = 12)
    status2Label.grid(row=2, column=0, sticky='nsew')
else:
    initStatus = 'Scanning for ' + gameName
    status2Label = tk.Label(statusFrame, text = gameName + ' not detected', fg='white', background='#2a475e', font = 9, wraplength= 250)
    status2Label.grid(row=2, column=0, sticky='nsew')
    
statusLabel = tk.Label(statusFrame, text = initStatus, fg='white', background='#2a475e', font = 9, wraplength= 250)
    
root.columnconfigure(0, weight = 1)
root.columnconfigure(1, weight = 3)
root.rowconfigure(0, weight = 1)
root.rowconfigure(1, weight = 8)
root.rowconfigure(2, weight = 1)

aboutFrame.rowconfigure(0, weight=1)
aboutFrame.rowconfigure(1, weight=1)
aboutFrame.rowconfigure(2, weight=1)
aboutFrame.rowconfigure(2, weight=5)
aboutFrame.rowconfigure(3, weight=2)
aboutFrame.columnconfigure(0, weight=1)

statusFrame.rowconfigure(0, weight=1)
statusFrame.rowconfigure(1, weight=1)
statusFrame.rowconfigure(2, weight=1)
statusFrame.columnconfigure(0, weight=1)

label1.grid(row = 0, column=0, stick = 'nsew')
statusFrame.grid(row= 1, column = 1, sticky='nsew')
aboutFrame.grid(row= 1, column = 0, sticky='nsew')
label2.grid(row = 0, column=1, stick = 'nsew')

infoLabel.grid(row = 3, column = 0, sticky='nsew')
hotkeyLabel.grid(row = 0, column = 0, sticky='nsw')
copyLabel.grid(row = 1, column= 0, sticky='nsw')
quitLabel.grid(row = 2, column= 0, sticky='nsw')

statusLabel.grid(row = 1, column= 0, sticky= 'nsew')

if(not hasGameOpened):
   checkForGameRunning()

root.mainloop(
 

)
