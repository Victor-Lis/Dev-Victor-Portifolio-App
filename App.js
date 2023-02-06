import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Modal, TouchableOpacity } from 'react-native';

import Navbar from './src/components/Navbar';
import Home from './src/components/Home';
import Footer from './src/components/Footer';
import MyProjects from './src/components/MyProjects';

export default function App() {

  const [actualPage, setActualPage] = useState("Meus Projetos")
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

        <Navbar actualPage={actualPage} tradePage={tradePage} />

        <Home/>

        <Footer />

      </Modal>
      <Modal visible={!actualPageVisible}>
        
        <Navbar actualPage={actualPage} tradePage={tradePage} />

        <MyProjects/>

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
