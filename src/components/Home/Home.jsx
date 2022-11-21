import React from "react";
import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Home = () => {
    const {navigate} = useNavigation();

    return (
        <>
            <Text>Test</Text>
            <View>
                <View>
                    <Text>Test</Text>
                </View>
            </View>
        </>
    );

};

export default Home;
