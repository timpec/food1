import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity  } from 'react-native';


const SignIn = ({navigation}) => {

  return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
          <View style={styles.upperContainer} >
            <Image style={styles.topImage} source={require('../../assets/pizzataximlogo1.png')}/>
          </View>
          <View style={styles.midContainer} >
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Sähköposti" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput style={styles.inputField} placeholder="Salasana" />
            </View>
          </View>
          <View style={styles.lowerContainer} >
            <TouchableOpacity style={{ width: "90%", alignItems: "center"}} >
              <Text style={{color: "black", fontFamily: "Verdana", fontSize: 16}} >Unohditko salasanasi?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signinButton} >
              <Text style={{color: "black", fontFamily: "Verdana", fontSize: 16}} >Kirjaudu sisään</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: "5%", width: "90%",  alignItems: "center"}} >
              <Text onPress={() => navigation.push('Register')} style={{color: "black", fontFamily: "Verdana", fontSize: 16}} >Luo tili</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 3,
    justifyContent: "center",
    alignContent: 'center',
  },
  topImage: {
    height: 70,
    width: undefined,
    resizeMode: 'contain',
  },
  midContainer: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "space-around",
    marginVertical: "5%"
  },
  lowerContainer: {
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: 'flex-start',
    marginVertical: "5%"
  },
  signinButton: {
    width: "50%",
    height: 50,
    marginTop: "5%",
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
      marginTop: "2.5%",
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


export default SignIn;