import {Image, Linking, ScrollView, Text} from "react-native";
import {Icon, Button, ListItem, Card} from '@rneui/themed';


const Post = ({post}) => {
    const id = post.id;

    return (
        post.isVideo ?
            <ScrollView>
                <Text>
                    Subreddit isVideo: {post.subreddit_name_prefixed}
                </Text>
                <Text>Title : {post.title}</Text>
                <Text>Author : {post.author}</Text>
                <Text
                    style={{color: 'blue'}}
                    onPress={() => Linking.openURL(post.url)}>URL</Text>
                <Text>url_overridden_by_dest : {post.url_overridden_by_dest}</Text>
            </ScrollView>
            :
            <ScrollView>
                    <Text>
                        Author : {post.author}
                    </Text>
                    <Text>
                        Subreddit : {post.subreddit_name_prefixed}
                    </Text>
                    <Image style={{
                        width: post.thumbnail * 2, 
                        height : post.thumbnail *2, 
                        marginVertical: 10,
                    }}
                    resizeMode="cover"
                    source={{uri:post.thumbnail}}/>
                    <Text>{post.title}</Text>
            </ScrollView>
    );
};


export default Post