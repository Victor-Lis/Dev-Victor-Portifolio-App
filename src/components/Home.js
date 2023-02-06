import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Home() {
 return (
   <View style={styles.main}>
        <View style={styles.mainPart1}>

            <Text style={styles.textBackground}> Hello World </Text>
            
            <Image style={styles.backgroundImage} source={require("../Images/Background.jpg")} /> 
            
        </View>

        <View style={styles.mainPart2}>

            <Text style={{color: "#8A45DE", fontSize: 14, marginTop: "2.5%"}}> Meu nome é Victor Lis </Text>
            <Text style={{color: "#7123CF", fontSize: 11.5, textAlign: "center", marginTop: "5%"}}> Tenho 15 anos e estou estudando programação, e este app é apenas um de meus projetos, dentro desse mundo tão amplo que é a programação pretendo trabalhar na área Front-End, mas também gostaria de ter um mínimo entendimento Back-End. </Text> 

            <Text style={{color: "#8A45DE", fontSize: 14, marginTop: "06.5%", width: "100%", textAlign: "center"}}> Minhas linguagens / frameworks favoritos </Text>

            <View style={styles.imgsArea}>

                <View style={styles.imgArea}>

                    <Image style={styles.imgs} source={require("../Images/javascript.jpg")}/>
                    <Text style={{color: "#8A45DE", fontSize: 12.5, marginTop: "05%"}}> Javascript </Text>

                </View>

                <View style={styles.imgArea}>

                    <Image style={styles.imgs} source={require("../Images/React.jpg")}/>
                    <Text style={{color: "#8A45DE", fontSize: 12.5, marginTop: "05%"}}> React </Text>

                </View>

            </View>

        </View>
   </View>
  );
}

const styles = StyleSheet.create({

    main: {

        zIndex: -1,
        backgroundColor: "#000",
        height: '80%',
        marginTop: 0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    mainPart1: {

        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "50%",
        width: "100%",

    },
    backgroundImage: {

        height: "100%",
        width:  "100%",
        zIndex: -1, 
        position: "absolute",

    },
    textBackground: { 

        color: "#50D85B",
        zIndex: 1,
        fontSize: 40,
        position: "absolute",
        marginBottom: "40%",

    },
    mainPart2: {

        width: "100%",
        height: "60%",
        padding: "5%",
        marginTop: "-10%",
        backgroundColor: "#000",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center"

    },
    imgsArea: {

        height: "40%",
        width: "90%",
        paddingHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "5%"

    },
    imgArea: {

        width: "65%",
        height: "55%",
        alignItems: "center",
        justifyContent: "space-around",

    },
    imgs: {

        height: "70%",
        width: "30%",
        borderRadius: 10,

    }
    
})