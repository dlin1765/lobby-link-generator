import Header from "./Header";
import Footer from "./Footer";
import '../styles/Troubleshooting.css';

function Troubleshooting(){
    return(
        <>
            <Header/>
            <div className="faqWrapper">
                <div className="faqParent">
                    <div className="faqTitle">Something not working? Here are some potential problems</div>
                    <div className="questionList">
                        <div className="qa">
                            <div className="q">Lobby link isn't being copied to clipboard</div>
                            <div className="a">Check to see if you entered your Steam profile link correctly and double check to see if your profile and game details are public.</div>
                        </div>
                        <div className="qa">
                            <div className="q">Pressing play in Steam doesn't launch the game</div>
                            <div className="a">If your game isn't launching, make sure you typed the correct name for the game Exe file and make sure you gave the right path to the Exe, start from step 3 again.</div>
                        </div>
                        <div className="qa">
                            <div className="q">Pressing play in Steam doesn't launch lobby-generator.exe</div>
                            <div className="a">Make sure that the exe is in the same directory as the game exe, and make sure that you have lobby-gen.bat %COMMAND% in your launch options.</div>
                        </div>
                        <div className="qa">
                            <div className="q">I have some other issue not listed here</div>
                            <div className="a">Feel free to contact me on Twitter about it! Link to my Twitter is on the bottom left.</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Troubleshooting