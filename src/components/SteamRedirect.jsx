import { Navigate, useLocation, useParams } from "react-router-dom";

function SteamRedirect(){
    let {link} = useParams();

    let formattedLink = link.replaceAll('\\', '/');
    formattedLink = formattedLink.replaceAll('|', ':');
    console.log(formattedLink);
    window.location.replace(formattedLink);
    return null;
}

export default SteamRedirect