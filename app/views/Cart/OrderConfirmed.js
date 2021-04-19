import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { checkTypeSimple } from '../../components/Cart/CartBuilder';


const OrderConfirmed = ({navigation, route}) => {
    const routeDetails = route.params.order
    const productsInCart = useSelector(state => state.cart.productsInCart)

    const deliveryCost = () => {
      if (routeDetails.toimitustapa == "Kuljetus" && cartPrice(productsInCart) < 17) {
        return <Text>Kuljetusmaksu: 3.00 €</Text>
      } else if (routeDetails.toimitustapa == "Kuljetus") {
        return <Text>Kuljetusmaksu: 0 €</Text>
      }
    }

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.card}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Tilauksesi on lähetetty</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "90%", alignSelf: "center"}}>
                <View style={styles.h2ContainerRight}>
                    <Text style={styles.h2}>Toimitus</Text>
                    <Text>{routeDetails.orderUser}</Text>
                    <Text>{routeDetails.orderType}</Text>
                    <Text>{routeDetails.orderDetail}</Text>
                    <Text>{routeDetails.orderPhone}</Text>
                </View>
                <View style={styles.h2ContainerLeft}>
                    <Text style={styles.h2}>Maksu</Text>
                    <Text>{routeDetails.orderPayment}</Text>
                    {deliveryCost()}
                    <Text>ALV 14%: {routeDetails.orderAlv.toFixed(2)} €</Text>
                    <Text>Summa: {routeDetails.orderPrice.toFixed(2)} €</Text>
                </View>
            </View>
                <View style={{width: "90%", alignSelf: "center", marginTop: "8%"}}>
                    <Text style={styles.h2}>Tilatut tuotteet</Text>
                </View>
                <View style={styles.productContainer}>
                  {routeDetails.orderProducts.map(item => 
                  <View key={uuidv4()}>
                    {checkTypeSimple(item)}
                  </View>
                  )}
                </View>
                <View style={{marginVertical:"3%"}}>
                  <Text style={{alignSelf:'center'}}>Tarkista tilausvarmistus sähköpostistasi</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.popToTop()} >
                <Text>Palaa ostoskoriin</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
}
// textinput onendediting
// onPress={()=> fetchPost(productsInCart)}
//{item.toppings.map(topping => <Text key={item.key+topping} style={styles.toppingsText}>{topping}</Text>)}

const styles = StyleSheet.create ({
    card: {
        flex: 1,
        marginBottom: "5%",
        marginTop: "10%",
        marginHorizontal: "5%",
        backgroundColor: "beige",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
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

export default OrderConfirmed;