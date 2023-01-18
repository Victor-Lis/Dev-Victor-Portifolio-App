import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Modal, TouchableOpacity } from 'react-native';

import Navbar from './src/components/Navbar';
import Home from './src/components/Home';

export default function App() {

  const [actualPage, setActualPage] = useState("Home")
  const [actualPageVisible, setActualPageVisible] = useState(true)

  function tradePage(){

    if(actualPage == "Home"){

        setActualPage("Meus  Projetos")
        setActualPageVisible(!actualPageVisible)

    }else{

        setActualPage("Home")
        setActualPageVisible(!actualPageVisible)

    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden = {true}/>
      <Modal visible={actualPageVisible}>

        <Navbar style={{zIndex: 1}} actualPage={actualPage} tradePage={tradePage} />

        <Home style={{zIndex: -1}}/>

      </Modal>
      <Modal visible={!actualPageVisible}>
        
        <Navbar style={{zIndex: 1}} actualPage={actualPage} tradePage={tradePage} />

        <View>

          <Text style={{color: "#fff"}}> Meus Projetos </Text>

        </View>

      </Modal>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
