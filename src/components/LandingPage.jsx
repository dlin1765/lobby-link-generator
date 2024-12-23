import { useState } from 'react';
import '../styles/LandingPage.css'

function LandingPage(){
    const [fieldText, setFieldText] = useState('');
    const [fieldText2, setFieldText2] = useState('');
    const [steamURL, setSteamURL] = useState('');
    const [gamePath, setGamePath] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleText(){
        if(fieldText != '' && fieldText2 != ''){
            setSteamURL(fieldText);
            setGamePath(fieldText2);
            setSubmitted(true);
            console.log(steamURL);
            console.log(gamePath);
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
            <div className="landingPage">
                <div className="fields">
                    <form>
                        <input type="text" className="steamURL" onChange={getFormChange}/>
                        <input type="text" className="gamePath" onChange={getFormChange2}/>
                        
                    </form>
                    <button className="submitButton" onClick={handleText}>submit</button>
                    {submitted ? <button>link to download</button> : <></>}
                </div>
            </div>
        </>
    );
}

export default LandingPage