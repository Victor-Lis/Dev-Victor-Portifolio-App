import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Navbar({actualPage, tradePage}) {
 return (
   <View style={styles.body}> 

        <View style={styles.devVictorArea}>

            <Image style={styles.image} source={require("../Images/my-photo.jpg")}/>
        
            <Text style={styles.text}> Dev Victor </Text> 

        </View>

        <TouchableOpacity activeOpacity={0.50} onPress={tradePage}> 
        
            <Text style={styles.textPage}> {actualPage} </Text> 
    
        </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({

    body: {

        zIndex: 1,
        flexWrap: "nowrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "10%",
        backgroundColor: "#1A1A1A",
        padding: 15,

    },
    image: {

        marginTop: 0,
        width: 50, 
        height: 50,
        borderRadius: 100,
        marginRight: 10,
      // Pode se usar o "Contain"
      // Ou também o stretch
    
      },

    text: {

        color: "#8A45DE"

    },

    textPage: {

        color: "#8A45DE",
        marginRight: "1%"

    },

    devVictorArea:{

        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"

    }

});