import './app.css'
import { useState } from 'react';

import Menu from './component/Menu/index.js';
import Creation from './component/Creation';

//images
import Logo from './images/logo.svg'
import Hamburger from './images/icon-hamburger.svg'
import ImageInteractive from './images/mobile/image-interactive.jpg'

import DeepEart from './images/mobile/image-deep-earth.jpg'
import NightArcade from './images/mobile/image-night-arcade.jpg'
import SoccerTeam from './images/mobile/image-soccer-team.jpg'
import TheGrid from './images/mobile/image-grid.jpg'
import FromAbove from './images/mobile/image-from-above.jpg'
import PocketBorealis from './images/mobile/image-pocket-borealis.jpg'
import Curiosity from './images/mobile/image-curiosity.jpg'
import Fisheye from './images/mobile/image-fisheye.jpg'

import Facebook from './images/icon-facebook.svg'
import Twitter from './images/icon-twitter.svg'
import Pinterest from './images/icon-pinterest.svg'
import Instagram from './images/icon-instagram.svg'
//images desktop

import DeepEartDesktop from './images/desktop/image-deep-earth.jpg'
import NightArcadeDesktop from './images/desktop/image-night-arcade.jpg'
import SoccerTeamDesktop from './images/desktop/image-soccer-team.jpg'
import TheGridDesktop from './images/desktop/image-grid.jpg'
import FromAboveDesktop from './images/desktop/image-from-above.jpg'
import PocketBorealisDesktop from './images/desktop/image-pocket-borealis.jpg'
import CuriosityDesktop from './images/desktop/image-curiosity.jpg'
import FisheyeDesktop from './images/desktop/image-fisheye.jpg'

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

                            <div className="header_menu">
                                <a href="#">About</a>
                                <a href="#">Carrers</a>
                                <a href="#">Events</a>
                                <a href="#">Products</a>
                                <a href="#">Support</a>
                            </div>

                            <img className="hamburger" src={Hamburger} onClick={openCloseMenu} alt="open menu"/>
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
                       
                        <div className='mobile'>

                            <Creation text={{
                                    first: 'DEEP',
                                    second:'EART'
                                    }}  
                                background={DeepEart}
                            />
                            <Creation text={{
                                    first: 'NIGTH',
                                    second:'ARCADE'
                                    }}  
                                background={NightArcade}
                            />
                            <Creation text={{
                                    first: 'SOCCER',
                                    second:'TEAM VR'
                                    }}  
                                background={SoccerTeam}
                            />
                            <Creation text={{
                                    first: 'THE',
                                    second:'GRID'
                                    }}  
                                background={TheGrid}
                            />
                            <Creation text={{
                                    first: 'FROM UP ',
                                    second:'ABOVE VR'
                                    }}  
                                background={FromAbove}
                            />
                            <Creation text={{
                                    first: 'POCKET',
                                    second:'BOREALIS'
                                    }}  
                                background={PocketBorealis}
                            />
                            <Creation text={{
                                    first: 'THE',
                                    second:'CURIOSITY'
                                    }}  
                                background={Curiosity}
                            />
                            <Creation text={{
                                    first: 'MAKE IT',
                                    second:'FISHEYER'
                                    }}  
                                background={Fisheye}
                            />
                        </div>

                        <div className='desktop'>
                            <div className="desktop_content">
                                <Creation type="desktop" text={{
                                        first: 'DEEP',
                                        second:'EART'
                                        }}  
                                    background={DeepEartDesktop}

                                />
                                <Creation type="desktop" text={{
                                        first: 'NIGTH',
                                        second:'ARCADE'
                                        }}  
                                    background={NightArcadeDesktop}
                                />
                                <Creation type="desktop" text={{
                                        first: 'SOCCER',
                                        second:'TEAM VR'
                                        }}  
                                    background={SoccerTeamDesktop}
                                />
                                <Creation type="desktop" text={{
                                        first: 'THE',
                                        second:'GRID'
                                        }}  
                                    background={TheGridDesktop}
                                />
                            
                            </div>
                            <div className='desktop_content'>
                                <Creation type="desktop" text={{
                                        first: 'FROM UP ',
                                        second:'ABOVE VR'
                                        }}  
                                    background={FromAboveDesktop}
                                />
                                <Creation type="desktop" text={{
                                        first: 'POCKET',
                                        second:'BOREALIS'
                                        }}  
                                    background={PocketBorealisDesktop}
                                />
                                <Creation type="desktop" text={{
                                        first: 'THE',
                                        second:'CURIOSITY'
                                        }}  
                                    background={CuriosityDesktop}
                                />
                                <Creation type="desktop" text={{
                                        first: 'MAKE IT',
                                        second:'FISHEYER'
                                        }}  
                                    background={FisheyeDesktop}
                                />
                            </div>
                        </div>
                        
                        <button className="see_all ">SEE ALL</button>

                    </div>
                </main>

                <footer>
                    <img src={Logo} alt="logo footer"/>

                    <a href="#">About</a>
                    <a href="#">Carrers</a>
                    <a href="#">Events</a>
                    <a href="#">Products</a>
                    <a href="#">Support</a>

                    <div className="social_midia">
                        <img src={Facebook} />
                        <img src={Twitter} />
                        <img src={Pinterest} />
                        <img src={Instagram} />
                    </div>
                    <strong>© 2021 Loopstudios. All rights reserved.</strong>
                </footer>
            </div>
        );
    }
}

export default App;
