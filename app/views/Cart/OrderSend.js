import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import fetchPost from '../../modules/mailer';
import { cartPrice, checkTypeSimple } from '../../components/Cart/CartBuilder';


const OrderSend = ({navigation, route}) => {
    const [info, setInfo] = useState("")
    const routeDetails = route.params.details
    const productsInCart = useSelector(state => state.cart.productsInCart)
    const userStore = useSelector(state => state.user.user)
    const dispatch = useDispatch();

    const deliveryType = () => {
      if (routeDetails.toimitustapa == "Nouto") {
        return routeDetails.nouto+" min kuluessa";
      } else {
        return routeDetails.osoite;
      }
    }

    const deliveryCost = () => {
      if (routeDetails.toimitustapa == "Kuljetus" && cartPrice(productsInCart) < 17) {
        return <Text>Kuljetusmaksu: 3.00 €</Text>
      } else if (routeDetails.toimitustapa == "Kuljetus") {
        return <Text>Kuljetusmaksu: 0 €</Text>
      }
    }

    const totalCost = () => {
      if (routeDetails.toimitustapa == "Kuljetus" && cartPrice(productsInCart) < 17) {
        return cartPrice(productsInCart) + 3;
      } else {
        return cartPrice(productsInCart);
      }
    }

    const wait4Response = async () => {
      const order = {
        token: 'pizzataxim',
        orderUser: userStore.fname+" "+userStore.lname,
        orderEmail: userStore.email,
        orderType: routeDetails.toimitustapa,
        orderDetail: deliveryType(),
        orderPhone: routeDetails.puhelin,
        orderPayment: routeDetails.maksutapa,
        orderPrice: totalCost(),
        orderAlv: totalCost()*0.14,
        orderProducts: productsInCart,
        orderComment: info
      }
      try {
        let result = await fetchPost(order);
        console.log(result)
        if (result.message == "Success") {
          console.log("order Success")
          navigation.push('OrderConfirmed', {order})
          dispatch({type: 'CLEAR_CART'})
        } else {
          //error
        }
      } catch (err) {
        // Add toast or something telling the problem to customer
        console.log("Error sending order: " +err)
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
                    <Text>{userStore.fname} {userStore.lname}</Text>
                    <Text>{routeDetails.toimitustapa}</Text>
                    <Text>{deliveryType()}</Text>
                    <Text>{routeDetails.puhelin}</Text>
                </View>
                <View style={styles.h2ContainerLeft}>
                    <Text style={styles.h2}>Maksu</Text>
                    <Text>{routeDetails.maksutapa}</Text>
                    {deliveryCost()}
                    <Text>Loppusumma: {totalCost().toFixed(2)} €</Text>
                    <Text>ALV 14%: {(totalCost()*0.14).toFixed(2)} €</Text>
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
                <View style={styles.h2Container}>
                  <Text style={styles.h3}>Lisätiedot</Text>
                  <TextInput placeholder="Ovikoodi, allergiat, muuta huomioitavaa?" multiline numberOfLines={4} value={info} onChangeText={text => setInfo(text)} style={{borderWidth: 1, borderColor: "#cdcdcd"}}/>
                </View>
        </ScrollView>
        <TouchableOpacity style={styles.nextButton} onPress={() => wait4Response()} >
                  <Text>Lähetä tilaus</Text>
        </TouchableOpacity>
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
  h2Container: {
    alignSelf: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: "8%"
  },
  h2ContainerRight: {
    alignSelf: "flex-start",
    justifyContent: "center",
    width: "45%",
    marginTop: "8%",
    alignItems: "flex-start"
  },
  h2ContainerLeft: {
    alignSelf: "flex-start",
    justifyContent: "center",
    width: "45%",
    marginTop: "8%",
    alignItems: "flex-end",
  },
  h2: {
    fontSize: 18,
    fontFamily: "Verdana",
  },
  h3: {
    fontSize: 15,
    fontFamily: "Verdana",
  },
  productContainer: {
    flex: 1,
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

export default OrderSend;