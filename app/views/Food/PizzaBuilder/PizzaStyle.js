import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TouchableOpacity  } from 'react-native';


const PizzaStyle = ({navigation}) => {

  return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
        <TouchableOpacity style={styles.topContainer} onPress={() => navigation.push('PizzaPohja', {style: 'Normal'})}>
            <Image style={styles.topImage} source={require('../../../assets/4-png.png')}/>
            <Text style={styles.title} >Normaali</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.push('PizzaPohja', {style: 'Vegan'})}>
            <Image style={styles.topImage} source={require('../../../assets/vp2.png')}/>
            <Text style={styles.title} >Vegaaninen</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        marginBottom: "5%",
        marginTop: "10%",
        marginHorizontal: "10%",
        backgroundColor: "#cfac89",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    bottomContainer: {
        flex: 1,
        marginTop: "5%",
        marginBottom: "10%",
        marginHorizontal: "10%",
        backgroundColor: "#8ec298",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    topImage: {
        height: "80%",
        width: undefined,
        resizeMode: 'contain',
        marginTop: 10
    },
    title: {
        color: "black",
        alignSelf: "center",
        fontSize: 24,
        fontFamily: "Verdana"
    }
});


export default PizzaStyle;