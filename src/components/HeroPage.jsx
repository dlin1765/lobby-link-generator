import Header from "./Header";
import Footer from './Footer';
import demoVid from '../assets/lobbylinkabledemo.mp4';
import { Link, useParams} from "react-router-dom";
import '../styles/HeroPage.css';
const numRegex = '\d';
let isValid = false;

function isOnlyNums(value) {
    return /^\d+$/.test(value);
}

function HeroPage(){
    let {"*":token} = useParams();
    if(token != null && token.length != 0){
        isValid = true;
        let params = token.split('/');
        params.forEach(nums =>{
            if(!isOnlyNums(nums)){
                isValid= false;
            }
        })
    }
    if(isValid){
        window.location.replace('steam://joinlobby/' + token);
    }
        
    
    return(
        <>
            <Header/>
            <div className="mainBodyWrapper">
                <div className="mainBody">
                    <div className="heroSectionContainer">
                        <div className="heroTextContainer">
                            <div className="heroTag L">Quick easy lobbies.</div>
                            <div className="heroDescription M">Create Steam lobby links with just a few key strokes</div>
                            <Link to ='/setup' className="heroLink M">
                                GET STARTED
                            </Link>
                        </div>
                        <div className="heroDemo">
                            <video className= 'heroVid' src={demoVid}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source
                                    src={demoVid}
                                    type="video/mp4"
                                >
                                </source>
                            </video>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="infoSectionParent">
                    <div className="infoTitle M">
                        Find it annoying needing to Alt Tab out of your game to get your lobby link?
                    </div>
                    <div className="infoExplanation S">
                        Press ctrl C while in any game and Lobby Linkable copies a <strong style={{letterSpacing: '0.5px', color:'white'}}>clickable</strong> Steam lobby link to your clipboard!
                    </div>
                    <div className="infoExplanation S">
                        
                    </div>

            </div>
            <div className="infoSectionParent2">
                    <div className="infoTitle M">
                        How does Lobby Linkable work?
                    </div>
                    <div className="cards">
                        <div className="infoCard">
                            <div className="infoImg"></div>
                            <div className="infoTitle">lobby-gen.bat</div>
                            <div className="infoTxt">
                                It starts with a batch file that tells your computer to open
                                your game of choice and lobby-generator.exe when you hit play on Steam.
                            </div>
                        </div>
                        <div className="infoCard">
                            <div className="infoImg"></div>
                            <div className="infoTitle">lobby-generator.exe</div>
                            <div className="infoTxt">This program is responsible for the actual
                                fetching and copying of your Steam lobby link. It does this by
                                By querying your Steam profile and parsing the HTML to find the 
                                button that contains the link.
                            </div>
                        </div>
                        <div className="infoCard">
                            <div className="infoImg"></div>
                            <div className="infoTitle">lobbylinkable.com</div>
                            <div className="infoTxt">The site not only serves as 
                                an accessible way to set up the programs, it also 
                                makes the link generated by lobby-generator clickable
                                in programs like Discord. 
                            </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </>
    );
}

export default HeroPage