import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import fetchPost from '../../modules/mailer';
import { cartPrice, checkType } from '../../components/Cart/CartBuilder';


const OrderSend = ({navigation, route}) => {
    const routeDetails = route.params.details
    const productsInCart = useSelector(state => state.productsInCart)

    const continueButton = () => {
        return (
            <TouchableOpacity style={styles.nextButton} >
                <Text>Lähetä tilaus</Text>
            </TouchableOpacity>
        )
    }

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
        <ScrollView>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Tilauksen tiedot</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center"}}>
                <View style={styles.h2ContainerRight}>
                    <Text style={styles.h2}>Toimitus</Text>
                    <Text>{routeDetails.osoite}</Text>
                    <Text>{routeDetails.puhelin}</Text>
                    <Text>{routeDetails.toimitustapa}</Text>
                </View>
                <View style={styles.h2ContainerLeft}>
                    <Text style={styles.h2}>Maksu</Text>
                    <Text>{routeDetails.maksutapa}</Text>
                    <Text>{cartPrice(productsInCart).toFixed(2)} €</Text>
                </View>
            </View>
                <View style={{width: "90%", alignSelf: "center", marginTop: "8%"}}>
                    <Text style={styles.h2}>Tuotteet</Text>
                </View>
                {productsInCart.map(item => 
                <View key={uuidv4()}>
                    {checkType(item)}
                </View>
                )}
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
  h2ContainerRight: {
    alignSelf: "flex-start",
    justifyContent: "center",
    width: "40%",
    marginTop: "8%",
    alignItems: "flex-start"
  },
  h2ContainerLeft: {
    alignSelf: "flex-start",
    justifyContent: "center",
    width: "40%",
    marginTop: "8%",
    alignItems: "flex-end"
  },
  h2: {
    fontSize: 18,
    fontFamily: "Verdana"
  },
  card: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    height: undefined,
    marginBottom: "5%",
    alignSelf: "center",
    justifyContent: "space-between",
    borderBottomColor: "#cdcdcd",
    paddingVertical: 5,
    borderBottomWidth: 2,
  },
  titleText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  editsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  priceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  finalPriceContainer: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  finalPrice: {
    fontFamily: "Verdana",
    fontSize: 24
  },
  nextButton: {
    width: "100%",
    height: 50,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default OrderSend;