import Header from "./Header";
import demoVid from '../assets/steamdemo.mp4';
import { Link } from "react-router-dom";
import '../styles/HeroPage.css';

function HeroPage(){
    return(
        <>
            <Header/>
            <div className="mainBody">
                <div className="heroSectionContainer">
                    <div className="heroTextContainer">
                        <div className="heroTag">Quick easy lobbies.</div>
                        <div className="heroDescription">Create steam lobby links with just a few key strokes</div>
                        <Link to ='/setup'>
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
        </>
    );
}

export default HeroPage