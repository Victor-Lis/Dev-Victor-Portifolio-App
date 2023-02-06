import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Footer() {
 return (
   <View style={styles.body}>

        <Text style={{color: "#8A45DE", fontSize: 19.5}}> Obrigado por baixar! </Text>

   </View>
  );
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      width: "102%",
      marginLeft: "-1%",
      backgroundColor: "#1A1A1A",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: "center",
      justifyContent: 'center',
      marginTop: "-1.5%",
    },
});
  