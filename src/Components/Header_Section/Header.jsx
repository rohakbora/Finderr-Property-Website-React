//import React from 'react'
import {useState} from "react";
import './Header.css'   
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
    const[menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) =>{
        if(document.documentElement.clientWidth <=800)
            {
            return{right: !menuOpened && "-30%"}
            }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img alt="an image appears here" src="./Finderr Logo Black.png" width={100}></img>
                <OutsideClickHandler onOutsideClick={()=> setMenuOpened(false)}>
                <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                    <a href="#Residencies">Residencies</a>
                    <a href="#Contact">Contact Us</a>
                    <a href="#getstarted">Get Started</a>
                    {/* <button className="button" onclick={"/pricing"}>Pricing</button> */}
                    <a href="#pricing">Pricing</a>
                </div>
                </OutsideClickHandler>  
                <div className="menu-icon" 
                onclick = {()=> setMenuOpened((prev)=>!prev)}
                >
                <BiMenuAltRight size={30}/>
                </div>
            </div>
        </section>
    )   
}
export default Header