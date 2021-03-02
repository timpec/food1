import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity  } from 'react-native';


const Register = () => {

  return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
        <ScrollView contentContainerStyle={{flexGrow:1}} >
          <View style={styles.upperContainer} >
            <Image style={styles.topImage} source={require('../../assets/pizzataximlogo1.png')}/>
          </View>
          <View style={styles.midContainer} >
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Etunimi" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Sukunimi" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Osoite" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Kaupunki" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Postinumero" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Puhelinnumero" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Sähköposti" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Salasana" />
            </View>
          </View>
          <TouchableOpacity style={styles.signinButton} >
              <Text style={{color: "black", fontFamily: "Verdana", fontSize: 16}} >Rekisteröidy</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    justifyContent: "center",
    alignContent: 'center',
    margin: "10%",
  },
  topImage: {
    height: 70,
    width: undefined,
    resizeMode: 'contain',
  },
  midContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "space-around"
  },
  signinButton: {
    width: "50%",
    height: 50,
    marginTop: "5%",
    marginBottom: "10%",
    marginHorizontal: "25%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cdcdcd",
    borderWidth: 2,
    borderColor: "#f4e609",
  },
  innerContainer: {
      height: 60,
      width: "90%",
      margin: "5%",
      backgroundColor: "#cdcdcd",
      borderTopLeftRadius: 25,
      borderBottomRightRadius: 25,
  },
  inputField: {
      color: "black",
      fontSize: 18,
      height: "100%",
      width: "100%",
      fontFamily: "Verdana",
  }
});


export default Register;