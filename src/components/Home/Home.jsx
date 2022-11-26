import React from "react";
import { View, Button, Text } from 'react-native';

const Home = ({navigation}) => {

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('Subreddits', { name: 'Jane' })} title="Subreddits" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );

};

export default Home;
