import { useState } from 'react';
import Header from './Header';
import '../styles/LandingPage.css'
// import batchFile from '../assets/lobby-gen-test.bat'

const stepText = [
    'Step 1: Ensure steam profile is public',
    'Step 2: Copy and paste your steam profile url',
    'Step 3: Copy and paste this command into your Steam Launch options',
    'Step 4: Find and enter the path to the folder the game is in, and the name of the executable file (the game file itself)',
    'Step 5: Download these two files and put them in the file location you specified in the previous step',
    'All done!'
]
// const stepDivs = stepText.map(steps => <div className='stepText'>{steps}</div>)
const steps = [
    <div>1</div>,
    <div>2</div>,
]


function LandingPage(){
    const [fieldText, setFieldText] = useState('');
    const [fieldText2, setFieldText2] = useState('');
    const [steamURL, setSteamURL] = useState('');
    const [gamePath, setGamePath] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [bashContent, setBashContent] = useState('');
    const [stepNum, setStepNum] = useState(0);

    function handleText(){
        if(fieldText != '' && fieldText2 != ''){
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
            console.log(pathConvert);
            const text = `@ECHO OFF\nsetlocal\ncd \"${pathConvert}\"\nstart \"TEKKEN 8.exe\" \"${pathConvert}\\TEKKEN 8.exe\"\ntest-script.exe ${fieldText}`;
            const blob = new Blob([text], { type: 'text/plain' });
            setBashContent(URL.createObjectURL(blob));
        }
    }

    function getFormChange(e){
        setFieldText(e.target.value);
    }
    function getFormChange2(e){
        setFieldText2(e.target.value);
    }

    function renderStepState(){
        switch(stepNum){
            case 0:
                return steps[0];
            case 1: 
                return steps[1];
        }
    }

    function moveForwards(){
        setStepNum(stepNum + 1);
    }

    function moveBackwards(){
        setStepNum(stepNum - 1);
    }


    return(
        <>
            <Header/>
            {
                renderStepState()
            }
            {stepNum >= steps.length - 1? <></> : <button className="submitButton" onClick={moveForwards}>forwards</button>}
            {stepNum != 0 ? <button className="submitButton" onClick={moveBackwards}>back</button> : <></>}
            
            
            <div className="landingPage">
                <div className="fields">
                    <form>
                        <input type="text" className="steamURL" onChange={getFormChange}/>
                        <input type="text" className="gamePath" onChange={getFormChange2}/>
                        
                    </form>
                    <button className="submitButton" onClick={handleText}>submit</button>
                    {submitted ? <a href={bashContent} download={'lobby-gen-test.bat'}>link to download</a> : <></>}
                </div>
            </div>
        </>
    );
}

export default LandingPage