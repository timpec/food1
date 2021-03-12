import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


const OrderDetails = ({navigation, route}) => {
  const toimitus = ["Kuljetus", "Nouto"];
  const noutoajat = ["15", "30", "45", "60"];
  const maksu = ["Käteinen", "Maksukortti", "Lounasseteli", "ePassi"];
  const [toimitustapa, setToimitustapa] = useState(toimitus[0])
  const [maksutapa, setMaksutapa] = useState(maksu[0])
  const [osoite, setOsoite] = useState("")
  const [nouto, setNouto] = useState(noutoajat[0])
  const [puhelin, setPuhelin] = useState("")

  // 
  const deliveryType = () => {
    if(toimitustapa == toimitus[0]) {
      return (
        <View style={styles.h2Container}>
            <Text style={styles.h2}>Kuljetusosoite *</Text>
            <TextInput value={osoite} onChangeText={text => setOsoite(text)} style={{borderWidth: 1, borderColor: "#cdcdcd"}}/>
        </View>
      )
    } else {
      return (
        <View style={styles.h2Container}>
            <Text style={styles.h2}>Valitse noutoaika</Text>
            <Picker prompt="Noutoaika"
                    selectedValue={nouto}
                    onValueChange={(itemValue, itemIndex) => 
                        setNouto(itemValue)} >
                        {noutoajat.map(item =>
                            <Picker.Item key={item} label={item+" min kuluttua"} value={item} ></Picker.Item>
                        )}
                </Picker>
        </View>
      )
    }
  }

  const continueButton = () => {
      const details = {
        toimitustapa: toimitustapa,
        maksutapa: maksutapa,
        osoite: osoite,
        nouto: nouto,
        puhelin: puhelin
    }
    if(toimitustapa == toimitus[0]) {
      if(osoite != "" && puhelin.length > 6) {
        return (
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.push('OrderSend', {details})} >
                <Text>Jatka</Text>
            </TouchableOpacity>
        )
      } 
    } else if(toimitustapa == toimitus[1]) {
      if(puhelin.length > 6) {
        return (
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.push('OrderSend', {details})} >
                <Text>Jatka</Text>
            </TouchableOpacity>
        )
      }
    }
  }
  // Toimitusosoite ?? default from user (postinumero, kaupunginosa, nimi)
  // Puhelinnumero ?? default from user
  // Toimitustapa
  // Maksutapa
  // Tuotteet
  // Hinta

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
        <ScrollView>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Toimitustiedot</Text>
            </View>
            <View style={styles.h2Container}>
                <Text style={styles.h2}>Valitse toimitustapa</Text>
                <Picker prompt="Toimitustapa"
                        selectedValue={toimitustapa}
                        onValueChange={(itemValue, itemIndex) => 
                            setToimitustapa(itemValue)} >
                            {toimitus.map(item =>
                                <Picker.Item key={item} label={item} value={item} ></Picker.Item>
                            )}
                </Picker>
            </View>
            <View style={styles.h2Container}>
                <Text style={styles.h2}>Valitse maksutapa</Text>
                <Picker prompt="Maksutapa"
                        selectedValue={maksutapa}
                        onValueChange={(itemValue, itemIndex) => 
                            setMaksutapa(itemValue)} >
                            {maksu.map(item =>
                                <Picker.Item key={item} label={item} value={item} ></Picker.Item>
                            )}
                </Picker>
            </View>
            {deliveryType()}
            <View style={styles.h2Container}>
                <Text style={styles.h2}>Puhelinnumero *</Text>
                <TextInput keyboardType='phone-pad' value={puhelin} onChangeText={text => setPuhelin(text)} style={{borderWidth: 1, borderColor: "#cdcdcd"}}/>
            </View>
        </ScrollView>
        {continueButton()}
    </SafeAreaView>
  );
}
// textinput onendediting
// onPress={()=> fetchPost(productsInCart)}
//{item.toppings.map(topping => <Text key={item.key+topping} style={styles.toppingsText}>{topping}</Text>)}

const styles = StyleSheet.create ({
  headerContainer: {
    alignSelf: "center",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    borderColor: "#cdcdcd",
    borderBottomWidth: 2
  },
  header: {
    fontSize: 24,
    fontFamily: "Verdana"
  },
  h2Container: {
    alignSelf: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: "8%"
  },
  h2: {
    fontSize: 20,
    fontFamily: "Verdana"
  },
  nextButton: {
    width: "100%",
    height: "8%",
    marginTop: "5%",
    backgroundColor: "#f4e609",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default OrderDetails;