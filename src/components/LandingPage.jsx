import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import InstructionsSection from './InstructionsSection';
import InputComponent from './InputComponent';

import steamURLVid from '../assets/steamprofliedemo.mp4';
import steamProfileVid from '../assets/steamdetailsdemo.mp4';
import steamLaunchOptionsVid from '../assets/steamlaunchoption.mp4';
import steamGameNameVid from '../assets/steamgamenamedemo.mp4';
import steamGamePathVid from '../assets/steamgamepathdemo.mp4';
import moveFilesVid from '../assets/movingfilesdemo.mp4';

import profileImg from '../assets/profiledemo.png';
import profileDetailsImg from '../assets/profiledetailsdemo.png';
import launchOptionImg from '../assets/launchoptiondemo.png';
import gameNameImg from '../assets/gamepathdemo.png';
import gamePathImg from '../assets/steamgamepathdemo.png';
import moveImg from '../assets/moveImg.png';
//import executable from '../assets/lobby-generator.exe';
// import fileContent from '../assets/lobby-generator.py';
import '../styles/LandingPage.css';

// import batchFile from '../assets/lobby-gen-test.bat'

// const step2Input = <input type="text" className="steamURL" onChange={getFormChange}/>

// const stepDivs = stepText.map(steps => <div className='stepText'>{steps}</div>)
const srcURL = 'https://github.com/dlin1765/lobby-link-generator/blob/main/src/assets/lobby-generator.py';

const stepText = [
    'Step 1: Ensure steam profile is public',
    'Step 2: Copy and paste your Steam profile url',
    'Step 3: Pick a game and paste this command into the Steam launch options',
    'Step 4: Find and enter the name of the executable file (the game file itself)',
    'Step 5: Copy the path to the folder the game is in',
    'Step 6: Download these two files and put them in the file location you specified in the previous step',
    'All done!'
]

const step1Instructions = ['For the application to work, your Steam profile needs to be public', 'Navigate to your Steam profile and go to: Edit Profile > Privacy Settings. Set both "My Profile" and "Game Details" to public.']
const step2Instructions = ['This is so the application can view your profile and obtain the lobby link', 'Navigate to your Steam profile and click on the URL on the top to copy it to your clipboard']
const step3Instructions = ['lobby-gen.bat %COMMAND%','This is so the program automatically launches when you open your game', 'Go to Steam and find the little settings cog icon for the game you want to set it up for, then click Properties > General > Launch Options ']
const step4Instructions = ['To start the game with the program we need the name of the game executable file (include spaces or symbols)', 'In the same Steam properties window, click Properties > Installed Files','Click the Browse button on where it says the size of the installation, this will open your file explorer.', 'Usually the application is in the first folder, but you might have to dig around in the rest of the folders if you don\'t a .exe file right away. Once you\'ve found it, type or copy the name of the file EXACTLY. Do NOT add ".exe" after.', 'Keep this window open.'];
const step5Instructions = ['We will also need the path to the folder the game exe is in','In the same file explorer window, click to the right of the last folder in the top middle bar to highlight the location. Lastly, Control + C to copy the address, and Control + V here.', 'It might look something like this: C:\\Program Files (x86)\\Steam\\steamapps\\common\\TEKKEN 8']
const step6Instructions = ['lobby-gen.bat', ]

const step1Divs = step1Instructions.map((items, i) => <div className='txt' key={i}>{items}</div>);
const step2Divs = step2Instructions.map((items, i) => <div className='txt' key={i}>{items}</div>);
const step3Divs = step3Instructions.map((items, i) => <div className='txt' key={i}>{items}</div>);
const step4Divs = step4Instructions.map((items, i) => <div className='txt' key={i}>{items}</div>);
const step5Divs = step5Instructions.map((items, i) => 
    <div className='txt' key={i}>{items}</div>)
;

const step1VidFiles = <video autoPlay muted loop playsInline className = 'stepVid' src={steamProfileVid} poster = {profileDetailsImg}></video>;
const step2VidFiles = <video autoPlay muted loop playsInline className = 'stepVid' src={steamURLVid} poster={profileImg}></video>;
const step3VidFiles = <video autoPlay muted loop playsInline className = 'stepVid' src={steamLaunchOptionsVid} poster ={launchOptionImg}></video>;
const step4VidFiles = <video autoPlay muted loop playsInline className = 'stepVid' src={steamGameNameVid} poster = {gameNameImg}></video>;
const step5VidFiles = <video autoPlay muted loop playsInline className = 'stepVid' src={steamGamePathVid} poster = {gamePathImg}></video>;
const step6VidFiles = <video autoPlay muted loop playsInline className = 'stepVid' src={moveFilesVid} poster = {moveImg}></video>;

function LandingPage(){
    const [fieldText, setFieldText] = useState('');
    const [fieldText2, setFieldText2] = useState('');
    const [gameName, setGameName] = useState('');
    const [steamURL, setSteamURL] = useState('');
    const [gamePath, setGamePath] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [bashContent, setBashContent] = useState('');
    const [bashText, setBashText] = useState('');
    const [stepNum, setStepNum] = useState(0);

    function moveForwards(){
        setStepNum(stepNum + 1);
        handleText();
    }
    
    function moveBackwards(){
        setStepNum(stepNum - 1);
    }

    function moveToNewSetup(){
        setStepNum(2);
    }
    
    function getFormChange(e){
        setFieldText(e.target.value);
    
    }
    function getFormChange2(e){
        setFieldText2(e.target.value);
    }
    function getFormChange3(e){
        setGameName(e.target.value);
    }
    


    const steps = [
        <InstructionsSection 
            stepText={stepText[0]}
            instructions={step1Divs}
            inputFields={[]}
            stepVids={step1VidFiles}
            inputFunctions={[moveForwards, ()=>{}]}
            stepNum={0}
        />,
        <InstructionsSection
            stepText={stepText[1]}
            instructions={step2Divs}
            inputFields={
                <div className="inputParent">
                    <div className="input">
                        <div className="inputTxt">{'Steam URL:'}</div>
                        <div className="inputField">
                            <input type="text" className="steamURL txtInput" onChange={getFormChange} value={fieldText}></input>
                        </div>
                    </div>
                </div>
            }
            stepVids={step2VidFiles}
            inputFunctions={[moveForwards, moveBackwards]}
            stepNum ={1}
        />,
        <InstructionsSection 
            stepText={stepText[2]}
            instructions={step3Divs}
            inputFields={[]}
            inputFunctions={[moveForwards, moveBackwards]}
            stepNum ={2}
            stepVids={step3VidFiles}
        />,
        <InstructionsSection
            stepText={stepText[3]}
            instructions={step4Divs}
            inputFields={
                <div className="inputParent">
                    <div className="input">
                        <div className="inputTxt">{'Game name:'}</div>
                        <div className="inputField">
                            <input type="text" className="gameName txtInput" onChange={getFormChange3} value ={gameName}/>
                        </div>
                    </div>
                </div>
            }
            inputFunctions={[moveForwards, moveBackwards]}
            stepNum ={3}
            stepVids={step4VidFiles}
        >
            <div className="lastStepTxt">
                <strong>Example: TEKKEN 8</strong>
            </div>
        </InstructionsSection>,
        <InstructionsSection 
            stepText={stepText[4]}
            instructions={step5Divs}
            inputFields={
                <div className="input">
                    <div className="inputTxt">{'Path to game:'}</div>
                    <div className="inputField">
                        <input type="text" className="gamePath txtInput" onChange={getFormChange2} value ={fieldText2}/>
                    </div>
                </div>
            }
            inputFunctions={[moveForwards, moveBackwards]}
            stepNum={4}
            stepVids={step5VidFiles}
        />,
        <InstructionsSection 
            stepText={stepText[5]}
            instructions={[]}
            inputFields={[]}
            inputFunctions={[moveForwards, moveBackwards]}
            stepNum={5}
            stepVids={step6VidFiles}
        >
            <div className="lastStepTxt">
                Make sure the file names stay like described below (no numbers)
            </div>
            <div className="lastStepTxt">
                lobby-gen.bat tells your computer to open the game and the lobby generator application to open
            </div>
            {fieldText != '' && fieldText2 != '' && gameName != '' ? 
                <div className = 'download'>
                    <a href={bashContent} download={'lobby-gen.bat'} className='downloadLink btn'>Download lobby-gen.bat</a>
                    
                </div>
            : 
                <div className='incompleteTxt'>
                    <div className="incompleteTxt">You missed a step! We didn't get either your Steam URL, game path, or game name</div>
                    <div className="incompleteTxt">Go back to previous steps!</div>
                </div>

            }
            <div className="lastStepTx">
                <div>
                    lobby-generator.exe is the program that grabs your Steam lobby link when you press Control + C
                </div>
                <a className='srcCodeLink' href={srcURL} target='_blank' rel="noopener noreferrer"> (source code)</a>
            </div>
           
            {fieldText != '' && fieldText2 != '' && gameName != '' ? 
                <div className = 'download'>
                    {/*<a href={bashContent} download={'lobby-gen.bat'} className='downloadLink btn'>Download lobby-generator.exe</a>*/}
                    <Link to='/src/assets/lobby-generator.exe' className ='downloadLink btn' download={'lobby-generator.exe'} target='_blank'>Download lobby-generator.exe</Link>
                </div>
            : 
                <div className='incompleteTxt'>
                    <div className="incompleteTxt">You missed a step! We didn't get either your Steam URL, game path, or game name</div>
                    <div className="incompleteTxt">Go back to previous steps!</div>
                </div>

            }
            {/*{fieldText != '' && fieldText2 != '' && gameName != '' ? 
                <div>
                    <a href={'../assets/lobby-generator.exe'} download={'lobby-generator.exe'}>lobby-generator.exe</a>
                    <div className="lastStepTxt">Preview: </div>
                    <div className = 'preview'>
                        <pre>{fileContent}</pre>
                    </div>
                </div>
            : 
                <div>Missing either Steam URL, game path, or game name</div>

            }*/}
            

        </InstructionsSection>,
        <div className="doneParent">
            <div className="doneTitle">
                You're done!
            </div>
            <div className="doneTxt">
                You can close this tab now or set it up for a different game
            </div>
            <button className='setUpNew btn' onClick={moveToNewSetup}>
                Set up for another game
            </button>
            <button 
                    className='backbtn'
                    onClick={moveBackwards}
                >
                    Previous
            </button>
        </div>,
        

    ]

    function handleText(){
        if(fieldText != '' && fieldText2 != '' && gameName != ''){
            setSubmitted(true);
            console.log(fieldText);
            console.log(fieldText2);
            let pathConvert = '';
            for(let i = 0; i < fieldText2.length; i++){
                console.log("i fire")
                if(fieldText2[i] == "/"){
                    pathConvert = pathConvert + '\\';
                }
                else{
                    pathConvert = pathConvert + fieldText2[i];
                }
            }
            const text = `@ECHO OFF\ncd \"${pathConvert}\"\nstart \"${gameName}.exe\" \"${pathConvert}\\${gameName}.exe\"\nstart lobby-generator.exe \"${fieldText}\" \"${gameName}\" \"${fieldText2}\"`;
            const blob = new Blob([text], { type: 'text/plain' });
            setBashText(text);
            setBashContent(URL.createObjectURL(blob));
            // const text2 = 'steam://joinlobby/1217060/109775244563878939/76561198402013855'
            // const blob2 = new Blob([text2], { type: 'text/plain' });
            // setBashContent(URL.createObjectURL(blob2));
        }
    }

    

    function renderStepState(){
        switch(stepNum){
            case 0:
                return steps[0];
            case 1: 
                return steps[1];
            case 2: 
                return steps[2];
            case 3: 
                return steps[3];
            case 4:
                return steps[4];
            case 5:
                return steps[5];
            case 6:
                return steps[6];
        }
    }

    return(
        <>
            <Header/>
            {
                
                    renderStepState()
                
            }
            <Footer/>
        </>
    );
}

export default LandingPage