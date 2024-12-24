import { useState } from 'react';
import Header from './Header';
import '../styles/LandingPage.css'
// import batchFile from '../assets/lobby-gen-test.bat'

function LandingPage(){
    const [fieldText, setFieldText] = useState('');
    const [fieldText2, setFieldText2] = useState('');
    const [steamURL, setSteamURL] = useState('');
    const [gamePath, setGamePath] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [bashContent, setBashContent] = useState('');

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

    return(
        <>
            <Header/>
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