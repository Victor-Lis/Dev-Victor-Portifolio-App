import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Home() {
 return (
   <View style={styles.main}>

        <View>

            <Image source={require("../Images/Internet Picture.jpg")} />
            <Image />

        </View>

   </View>
  );
}

const styles = StyleSheet.create({

    
    main: {

        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"

    },
    
})