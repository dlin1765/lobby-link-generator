import { Link } from 'react-router-dom';
import '../styles/Header.css'
import svgLogo from '../assets/twitter-logo.svg'

function Footer(){
    return(
        <>
            <div className="footerFlex">
                <div className="footerParent">
                    <Link className="footerTitle" to='/'>developed by Daniel Lin / CatPie</Link>
                    <div className="contactContainer">
                
                        <a className ='logoContainer'
                            href='https://twitter.com/WeenDaniel'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <a href="https://github.com/dlin1765/tekken-lobby-link-generator" className='contact' target="_blank" rel="noopener noreferrer">
                                GITHUB
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer
