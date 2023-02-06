import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MyProjects() {
 return (
   <View style={{height: "100%", backgroundColor: "#000"}}>

      <WebView
        source={{ uri: "https://github.com/Victor-Lis" }}
        style={{ marginTop: 0, backgroundColor: "#000" }}
      />

   </View>
  );
}