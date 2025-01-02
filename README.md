# <p align = 'center'> Lobby Linkable </p>

<p align = 'center'>
   A site to help users setup Lobby Generator, a program that fetches and copies your Steam lobby link while you're still in game to your clipboard and makes it clickable 
</p>
<p align = 'center'>
   Built in React and hosted with AWS
</p>
<p align = 'center'>
  <a href = 'https://lobbylinkable.com' target = "_blank" rel='noopener' align = 'center'>
     Link to website
  </a>
</p>
<div align = 'center'>
  <img src = 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt = 'React'/>
  <img src = 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt = 'Node.js'/>
  <img src = 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt = 'HTML5'/>
  <img src = 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt = 'CSS'/>
  <img src = 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt = 'Javascript'/>
  <img src = 'https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white' alt = 'Nginx'/>
  <img src = 'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white' alt = 'Vite'/>
  <img src = 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white' alt = 'AWS'/>
  <img src = 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' alt = 'Python'/>
</div>

# Video Demo
https://github.com/user-attachments/assets/d04a9db2-0b12-432b-a1a0-23f9582eb255

# Notices

Your computer or antivirus may flag both lobby-gen.bat and lobby-generator.exe as potential malware, you can view the source code for the exe and the batch file before running them.

The lobby-generator program will not work on Linux without extra setup.

# Use cases

If you play fighting games online chances are you've had to get or use someone's Steam lobby link. The process for getting your own link takes at least 10-20 seconds, you have to Alt-Tab out of your game, go to your profile, right click the join game button and click copy link address.

Then the person trying to join has to copy it manually from Discord or wherever and paste it into their browser.

Lobby Linkable streamlines this process by directly copying your Steam link to your clipboard when you press  ctrl c in game. 

It also makes joining other people's lobbies faster since the links are clickable in Discord.

![image](https://github.com/user-attachments/assets/19687969-43f3-4dc2-8087-714c8d085bfe)


# How it works

LobbyLinkable works based on four different parts. The first being the lobby-generator.exe which is the actual program that fetches and copies your Steam lobby link to your clipboard. Lobby-generator is coded in Python and uses Tkinter for the GUI. I chose Python for it's extensive list of libraries that would help me prototype my code quickly. 

When you press ctrl + c while you're in game, Lobby-generator queries your Steam profile and parses the HTML to find the button that contains the link to your Steam lobby. It also finds the game process and checks every 10 seconds to see if it's still running, and if it isn't then it automatically closes itself.


![image](https://github.com/user-attachments/assets/6d929f5e-d84d-42e4-b0d3-3bc5b437c973)

You can make any Steam lobby link clickable by putting it at the end of https://lobbylinkable.com/to/ (lobby link here)

In order for the program to launch automatically when you click play on your game on Steam, the Steam launch option %COMMAND% needs to be configured to run lobby-gen.bat, a batch file that opens both programs.

To make the Steam lobby link clickable, I used React Router and URL parameters to keep the original form of the Steam lobby link intact. Even though the link is a bit long, I did this because it would allow people to manually make their Steam lobby links clickable without much effort. 
```ruby
let {"*":token} = useParams();
if(token != null && token.length != 0){
    const steamPos = token.search('steam');
    if(steamPos != -1){
        console.log(token);
        window.location.replace(token);
    }
    else{
        console.log('not a lobby link');
    }
}
```

# Setup

For detailed instructions on how to use Lobby Linkable, visit https://lobbylinkable.com/setup

### Troubleshooting
If something isn't working, the most likely scenario is a problem with lobby-gen.bat
### It needs
- A link to your Steam profile
- The path to the folder with the game executable
- The name of the game executable (NO .EXE AT THE END)

### The file should look something like this 
![image](https://github.com/user-attachments/assets/78839373-c495-4158-ad05-ee442933e1e9)

Make sure your Steam profile is public, the path is correct, the name of the game is correct, and make sure the last line has all three arguments in quotation marks

# Challenges in developing this project

Since Steam lobby links use the Steam protocol and are not supported in Discord, it was kind of a challenge to figure out how I could make them clickable. 

I knew I needed to route a HTTPS link to the Steam link but I didn't know how to do that off the top of my head.

After some research online, I found that someone had used TinyURL's api to shorten the links and make them clickable. Unfortunately I also learned that you have to pay a yearly amount to keep using the API and I wasn't sure I wanted to do that.

When I was looking into how URLs and links work on the web, I came across Query and URL parameters and they fit my use case really well!

# What I learned

This project taught me a lot about managing my projects directory, controlling state in React, and building layouts in HTML and CSS. I dipped my toes into making GUI applications using Python, and I hosted my own web server for the site for the first time. I can't wait to dive into more complicated projects where I get to hone my skills even more!

# Future goals

I plan on expanding on the project a bit in the future 
- Make lobby-generator.exe work as a standalone program, shifting some of the setup into the application itself
- Allow lobby-generator to switch games and game paths during runtime so if you don't have to have copies of the same program in multiple game folders
