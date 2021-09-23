import './app.css'
import { useState } from 'react';

import Menu from './component/Menu/index.js';
import Creation from './component/Creation';

//images
import Logo from './images/logo.svg'
import Hamburger from './images/icon-hamburger.svg'
import Facebook from './images/icon-facebook.svg'
import Twitter from './images/icon-twitter.svg'
import Pinterest from './images/icon-pinterest.svg'
import Instagram from './images/icon-instagram.svg'

function App() {
    
    const [activeMenu, setActiveMenu] = useState(false)

    const openCloseMenu = () =>{
        setActiveMenu(!activeMenu)
    }
    if (activeMenu){
        return(
            <Menu openCloseMenu={openCloseMenu}/> 
        )
    }else{
        return (
            <div className="app">
                
                <header>
                
                        <div className="header_conteiner">
                        <div className="first_header">
                            <img src={Logo} alt="logo"/>

                            <div  className="header_menu desktop">
                                <a href="#">About</a>
                                <a href="#">Carrers</a>
                                <a href="#">Events</a>
                                <a href="#">Products</a>
                                <a href="#">Support</a>
                            </div>

                            <img className="mobile" src={Hamburger} onClick={openCloseMenu} alt="open menu"/>
                        </div>

                        <div className="header_main">
                            <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                            

                        </div>
                    </div>
                    
                
                </header>

                <main>
                    <div className="first_main">

                        <div className="interactve_image"></div>

                        <div className='content'>
                            <h1>THE LEADER IN INTERACTIVE VR</h1>
                            <p>
                                Founded in 2011, Loopstudios has been 
                                producing world-class virtual reality 
                                projects for some of the beast companies
                                around the globe. Our award-winning 
                                creations have transformed businesses
                                through digital experiences that bind to 
                                their brand
                            </p>
                        </div>
                    </div>

                    <div className="our_creations ">
                        <h1> OUR CREATIONS</h1>
                       
                        <div className="creatiosn_conteiner">

                            <div className="creations_content">
                                <Creation text={{
                                        first: 'DEEP',
                                        second:'EART'
                                        }}  
                                    id="deep_eart"
                                />
                                <Creation text={{
                                        first: 'NIGTH',
                                        second:'ARCADE'
                                        }}  
                                    id="nigth_arcade"
                                />
                                <Creation text={{
                                        first: 'SOCCER',
                                        second:'TEAM VR'
                                        }}  
                                    id="soccer_team"
                                />
                                <Creation text={{
                                        first: 'THE',
                                        second:'GRID'
                                        }}  
                                    id="the_grid"
                                />
                            </div>
                            <div className="creations_content">
                                <Creation text={{
                                        first: 'FROM UP ',
                                        second:'ABOVE VR'
                                        }}  
                                    id="from_up"
                                />
                                <Creation text={{
                                        first: 'POCKET',
                                        second:'BOREALIS'
                                        }}  
                                    id="pocket_borealis"
                                />
                                <Creation text={{
                                        first: 'THE',
                                        second:'CURIOSITY'
                                        }}  
                                    id="curiosity"
                                />
                                <Creation text={{
                                        first: 'MAKE IT',
                                        second:'FISHEYER'
                                        }}  
                                    id="make_it"
                                /> 
                            </div>
                            
                           
                        </div>

                    
                        <button className="see_all ">SEE ALL</button>

                    </div>
                </main>

                <footer>
                    <div className="footer_content">
                        <img src={Logo} alt="logo footer"/>
                        <div className="footer_links">
                            <a href="#">About</a>
                            <a href="#">Carrers</a>
                            <a href="#">Events</a>
                            <a href="#">Products</a>
                            <a href="#">Support</a>
                        </div>
                       
                    </div>
                   <div  className="footer_content">
                        <div className="social_midia">
                            <a href="#"><img  src={Facebook} alt="facebook"/></a>
                            <a href="#"> <img  src={Twitter} alt="twitter" /></a>
                            <a href="#"><img  src={Pinterest} alt="pinterest" /></a>
                            <a href="#"><img  src={Instagram} alt="instagram"/></a>
                        </div>
                        <strong>© 2021 Loopstudios. All rights reserved.</strong>
                   </div>
                    
                </footer>
            </div>
        );
    }
}

export default App;
