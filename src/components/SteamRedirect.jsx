import { Navigate, useLocation, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function SteamRedirect(){
    let {link} = useParams();

    let formattedLink = link.replaceAll('-', '/');
    formattedLink = formattedLink.replaceAll('_', ':');
    console.log(formattedLink);
    window.location.replace(formattedLink);
    return(
        <>
            <Header/>
            <div className="steamWrapper"></div>
            <Footer/>
        </>
    );
}

export default SteamRedirect