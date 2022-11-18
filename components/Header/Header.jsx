import {Text} from 'react-native';
import React from "react";
import profilePic from '../../assets/profilePicTest.png';

const Header = (props) => {
    const pseudo = props.headerProps.pseudo;
    const r = props.headerProps.r;
    //const profilePic = props.headerProps.profilePic; quand l'image de profil sera dans la response de l'api
    
    return (
        <div class="headerPost">
            <img id="profilePic" src={profilePic} alt="ProfilePic" />
            <Text style={{float: "left"}}> {pseudo} </Text>
            <Text style={{float: "right"}}>{r} </Text>
        </div>
        
    );
}

export default Header;