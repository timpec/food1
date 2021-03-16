import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity  } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const Register = () => {
  const dispatch = useDispatch();
  const userStore = useSelector(state => state.user.user)

  const [etunimi, setEtunimi] = useState(userStore.fname)
  const [sukunimi, setSukunimi] = useState(userStore.lname)
  const [katuosoite, setKatuosoite] = useState(userStore.address)
  const [rappuOvi, setRappuOvi] = useState(userStore.door)
  const [puhelin, setPuhelin] = useState(userStore.phone)
  const [sposti, setSposti] = useState(userStore.email)

  const test = () => {
    const user = {
      fname: etunimi,
      lname: sukunimi,
      address: katuosoite,
      door: rappuOvi,
      phone: puhelin,
      email: sposti
    }
    dispatch({type: 'SET_VALUE_USER', payload: user})
  }
  
  return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
        <ScrollView contentContainerStyle={{flexGrow:1}} >
          <View style={styles.upperContainer} >
            <Image style={styles.topImage} source={require('../../assets/pizzataximlogo1.png')}/>
          </View>
          <View style={styles.midContainer} >
            <View style={styles.innerContainer} >
              <TextInput value={etunimi} onChangeText={text => setEtunimi(text)} style={styles.inputField} placeholder="Etunimi"/>
            </View>
            <View style={styles.innerContainer} >
              <TextInput value={sukunimi} onChangeText={text => setSukunimi(text)} style={styles.inputField} placeholder="Sukunimi" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput value={katuosoite} onChangeText={text => setKatuosoite(text)} style={styles.inputField} placeholder="Katuosoite" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput value={rappuOvi} onChangeText={text => setRappuOvi(text)} style={styles.inputField} placeholder="Rappu ja ovinumero" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput value={puhelin} onChangeText={text => setPuhelin(text)} style={styles.inputField} placeholder="Puhelinnumero" />
            </View>
            <View style={styles.innerContainer} >
              <TextInput value={sposti} onChangeText={text => setSposti(text)} style={styles.inputField} placeholder="Sähköposti" />
            </View>
          </View>
          <TouchableOpacity style={styles.signinButton} onPress={() => test()} >
              <Text style={{color: "black", fontFamily: "Verdana", fontSize: 16}} >Tallenna tiedot</Text>
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
    marginVertical: "10%",
    marginHorizontal: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#f4e609",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
  },
  innerContainer: {
    height: 60,
    width: "90%",
    marginTop: "2.5%",
    backgroundColor: "#cdcdcd",
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#cdcdcd",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
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