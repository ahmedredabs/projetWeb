import {Text} from 'react-native';
import React from "react";
import upvoteSign from '../../assets/upvoteSign.png';

const Upvote = (props) => {
    return (
        <div class = "upVotePost">
            <img id="upvoteSign" src={upvoteSign} alt="upvoteSign" />
            <Text> {props.upvote}</Text>
        </div>   
    )
}

export default Upvote;