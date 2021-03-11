import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchPost from '../../modules/mailer';
import { alvAmmount, cartPrice, checkTypeSimple } from '../../components/Cart/CartBuilder';


const OrderSend = ({navigation, route}) => {
    const routeDetails = route.params.details
    const productsInCart = useSelector(state => state.productsInCart)
    const dispatch = useDispatch();

    const deliveryType = () => {
      if (routeDetails.toimitustapa == "Nouto") {
        return routeDetails.nouto+" min kuluessa";
      } else {
        return routeDetails.osoite;
      }
    }

    const wait4Response = async () => {
      const order = {
        token: 'pizzataxim',
        orderType: routeDetails.toimitustapa,
        orderDetail: deliveryType(),
        orderPhone: routeDetails.puhelin,
        orderPayment: routeDetails.maksutapa,
        orderPrice: cartPrice(productsInCart),
        orderAlv: alvAmmount(productsInCart),
        orderProducts: productsInCart
      }
      let result = await fetchPost(order);
      console.log(result)
      if (result.message == 200) {
        console.log("check")
        navigation.push('OrderConfirmed', {order})
        dispatch({type: 'CLEAR_CART'})
      }
    }

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Tilauksen tiedot</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center"}}>
                <View style={styles.h2ContainerRight}>
                    <Text style={styles.h2}>Toimitus</Text>
                    <Text>{routeDetails.toimitustapa}</Text>
                    <Text>{deliveryType()}</Text>
                    <Text>{routeDetails.puhelin}</Text>
                </View>
                <View style={styles.h2ContainerLeft}>
                    <Text style={styles.h2}>Maksu</Text>
                    <Text>{routeDetails.maksutapa}</Text>
                    <Text>ALV 14%: {alvAmmount(productsInCart).toFixed(2)} €</Text>
                    <Text>Loppusumma: {cartPrice(productsInCart).toFixed(2)} €</Text>
                </View>
            </View>
                <View style={{width: "90%", alignSelf: "center", marginTop: "8%"}}>
                    <Text style={styles.h2}>Tuotteet</Text>
                </View>
                <View style={styles.productContainer}>
                  {productsInCart.map(item => 
                  <View key={uuidv4()}>
                    {checkTypeSimple(item)}
                  </View>
                  )}
                </View>
                <TouchableOpacity style={styles.nextButton} onPress={() => wait4Response()} >
                  <Text>Lähetä tilaus</Text>
                </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
}

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
    alignItems: "flex-end",
  },
  h2: {
    fontSize: 18,
    fontFamily: "Verdana",
  },
  productContainer: {
    flex: 1,
  },
  nextButton: {
    width: "100%",
    height: 50,
    marginTop: "5%",
    backgroundColor: "#f4e609",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default OrderSend;