import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function downloadCV() {
    console.log('downloadCV');
    window.open('./ResumeDorMalka.pdf'); 
}



function Header(props) {
    const isMobile = window.innerWidth < 440;
    const [headerClass, setHeaderClass] = useState(!isMobile? 'header open': 'header close');

    function openNavBar(){
        isMobile && headerClass == 'header open'? setHeaderClass('header close') : setHeaderClass('header open');
    }

    return (
        <div>
            <div className="hamburger" onClick={() => openNavBar()}>
                <img src="images/menu.svg" alt="menu" width="30" height="30"/>
                <div className="downloadCv" onClick={()=> {downloadCV()}}>Download CV</div>
            </div>
            <div className={headerClass}>
                <nav>
                    <ul>
                        <li><NavLink exact to={'/'}  activeClassName="active" onClick={() => openNavBar()}>About Me</NavLink></li>
                        <li><NavLink to={'/js'} activeClassName="active" onClick={() => openNavBar()}>Js/Ts ({props.tsjsCount})</NavLink></li>
                        <li><NavLink to={'/python'} activeClassName="active" onClick={() => openNavBar()}>Python/C++ ({props.pythonCount})</NavLink></li>
                        <li><NavLink to={'/csjav'} activeClassName="active" onClick={() => openNavBar()}>Java/C# ({props.csjavCount})</NavLink></li>
                        <li><NavLink to={'/php'} activeClassName="active" onClick={() => openNavBar()}>PHP/Ruby ({props.phpCount})</NavLink></li>
                        <li><NavLink to={'/otrs'} activeClassName="active" onClick={() => openNavBar()}>Others ({props.otrsCount})</NavLink></li>
                        <button onClick={() => {downloadCV()}}>Download CV</button>
                    </ul>
                </nav>
            </div>
        </div>
    )
}



export default Header;