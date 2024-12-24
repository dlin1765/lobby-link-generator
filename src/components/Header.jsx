import { Link } from 'react-router-dom';
import '../styles/Header.css'
import svgLogo from '../assets/twitter-logo.svg'

function Header(){
    return(
        <>
            <div className="headerFlex">
                <div className="headerParent">
                    <Link className="headerTitle" to='/'>AUTO STEAM LINK</Link>
                    <div className="contactContainer">
                
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header
