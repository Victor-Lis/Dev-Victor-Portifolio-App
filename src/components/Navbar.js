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

        flexWrap: "nowrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "10%",
        backgroundColor: "#000",
        padding: 15,

    },
    image: {

        marginTop: 0,
        width: 50, 
        height: 45,
        borderRadius: 50,
        marginRight: 10,
      // Pode se usar o "Contain"
      // Ou também o stretch
    
      },

    text: {

        color: "#fff"

    },

    textPage: {

        color: "#fff",
        marginRight: "1%"

    },

    devVictorArea:{

        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"

    }

});