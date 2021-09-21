import './index.css'
import Logo from '../../images/logo.svg'
import Close from '../../images/icon-close.svg'
export default function Menu({openCloseMenu}){
    return (
        <div className="menu">
            <div className="header">
                <img src={Logo} alt="logo"/>
                <img src={Close} onClick={openCloseMenu} alt="close menu"/>
            </div>
           <div className="menu_main">
               <a href="#">ABOUT</a>
               <a href="#">CARRERS</a>
               <a href="#">EVENTS</a>
               <a href="#">PRODUCTS</a>
               <a href="#">SUPPORT</a>
           </div>
        </div>
    )
}