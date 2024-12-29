import Header from "./Header";
import Footer from './Footer';
import demoVid from '../assets/steamdemo.mp4';
import { Link } from "react-router-dom";
import '../styles/HeroPage.css';

function HeroPage(){
    return(
        <>
            <Header/>
            <div className="mainBodyWrapper">
                <div className="mainBody">
                    <div className="heroSectionContainer">
                        <div className="heroTextContainer">
                            <div className="heroTag">Quick easy lobbies.</div>
                            <div className="heroDescription">Create steam lobby links with just a few key strokes</div>
                            <Link to ='/setup' className="heroLink">
                                GET STARTED
                            </Link>
                        </div>
                        <div className="heroDemo">
                            <video className= 'heroVid' src={demoVid}
                                autoPlay
                                muted
                                loop
                            >
                            </video>
                        </div>
                    </div>
                </div>
                <div className="infoSectionParent">
                    <div className="infoTitle">
                        Find it annoying needing to Alt Tab out of your game to get your lobby link?
                    </div>
                    <div className="infoExplanation">
                        Press ctrl C while in game and Lobby Linker copies a <strong style={{letterSpacing: '0.5px', color:'white'}}>clickable</strong> Steam lobby link to your clipboard!
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default HeroPage