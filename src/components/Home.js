import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Home() {
 return (
   <View style={styles.main}>

        <View style={styles.mainPart1}>

            <Image source={require("../Images/Internet Picture.jpg")} />
            <Image />

        </View>

   </View>
  );
}

const styles = StyleSheet.create({

    
    main: {

        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"

    },
    mainPart1: {

        overflow: "hidden",
    
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    
    },
    mainImg: {

        width: "100%"
    
    }
    

})