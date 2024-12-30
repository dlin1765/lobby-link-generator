import { Link } from 'react-router-dom';
import '../styles/Header.css'
import svgLogo from '../assets/twitter-logo.svg'

function Footer(){
    return(
        <>
            <div className="footerFlex">
                <div className="footerParent">
                    <a className ='logoContainer'
                        href='https://twitter.com/WeenDaniel'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className='contact'>
                            CONTACT
                        </div>
                        <object data= {svgLogo} type="image/svg+xml" className='logo'>
            
                        </object>
                    </a>
                    <div className="contactContainer">
                
                        <a className ='logoContainer'
                            href='https://github.com/dlin1765/lobby-link-generator'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className='contact'>
                                GITHUB
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Footer
