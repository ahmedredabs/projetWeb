import {StyleSheet} from 'react-native';
import React from "react";
import Header from "../Header/Header";
import TextPost from "../TextPost/TextPost";
import Upvote from "../Upvote/Upvote";

const RedditPost = (props) => {
    const headerProps = {
        "pseudo" : props.dataPost.pseudo, 
        "profilePic" : props.dataPost.profilePic, 
        "r" : props.dataPost.r
    };
    const textPost = props.dataPost.text;
    const upvote = props.dataPost.upvote;
    return (
        <div class="redditPost">
            <Header headerProps={headerProps}/>
            <TextPost textPost={textPost}/>
            <Upvote upvote={upvote}/>
        </div>
    )
}



export default RedditPost;