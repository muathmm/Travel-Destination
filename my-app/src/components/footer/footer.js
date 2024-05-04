
import faceicon from './photo/face icon.png'; 
import twiter from './photo/twitter.png'; 
import linkedin from './photo/linked.png';
import  './footer.css'
function Footer (){
    return (
        <>
            <footer>
                
                <a href="https://facebook.com" target="_blank"> <img src={faceicon} alt="face book icon" className="f-icon" /></a>
                <a href="https://twitter.com" target="_blank"><img src={twiter} alt="twetter icon" className="f-icon" /></a>
                <a href="https://linkedin.com" target="_blank"><img src={linkedin} alt="linkedin icon" className="f-icon" /></a>
                <p>&copy; 2024  HR-System </p> 
                
            </footer>
        </>
    );
}

export default Footer;