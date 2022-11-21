import {Image, Linking, ScrollView, Text} from "react-native";


const Post = ({post}) => {
    const id = post.id;

    return (
        post.isVideo ?
            <>
                <Text>
                    Subreddit : {post.subreddit_name_prefixed}
                </Text>
                <Text>Title : {post.title}</Text>
                <Text>Author : {post.author}</Text>
                <Text
                    style={{color: 'blue'}}
                    onPress={() => Linking.openURL(post.url)}>URL</Text>
                <Text>+ {post.pwls} - {post.downs}</Text>
                <Text>url_overridden_by_dest : {post.url_overridden_by_dest}</Text>
            </>
            :
            <ScrollView>
                <Text>
                    Subreddit : {post.subreddit_name_prefixed}
                </Text>
                <Text>Title : {post.title}</Text>
                <Text>Author : {post.author}</Text>
                <Text
                    style={{color: 'blue'}}
                    onPress={() => Linking.openURL(post.url)}>URL</Text>
                <Text>+ {post.pwls} - {post.downs}</Text>
                <Text>Text : {post.selftext}</Text>
                <Text>thumbnail : </Text><Image source={post.thumbnail} />
            </ScrollView>
    );
};

export {Post};