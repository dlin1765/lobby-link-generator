import { Link } from 'react-router-dom';
import '../styles/Header.css'
import svgLogo from '../assets/twitter-logo.svg'

function Header(){
    return(
        <>
            <div className="headerFlex">
                <div className="headerParent">
                    <Link className="headerTitle" to='/'>LOBBY LINKER</Link>
                    <div className="contactContainer">
                
                        <Link className ='logoContainer'
                            to='/troubleshooting'
                        >
                            <div className='contact'>
                                TROUBLESHOOTING
                            </div>
                            
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header
