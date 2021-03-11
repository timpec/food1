import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartPrice, checkType } from '../../components/Cart/CartBuilder';


const Cart = ({navigation}) => {
  const productsInCart = useSelector(state => state.productsInCart)
  const dispatch = useDispatch();

  const continueButton = () => {
    if (productsInCart.length > 0) {
      return (
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.push('OrderDetails')} >
          <Text>Jatka</Text>
        </TouchableOpacity>
      )
    }
  }

  return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Ostoskorissa {productsInCart.length} tuote(tta).</Text>
          <TouchableOpacity onPress={() => dispatch({type: 'CLEAR_CART'})}>
            <Text style={{fontFamily:"Verdana", fontSize:16, color:"red"}}>Tyhjennä</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productContainer}>
          {productsInCart.map(item => 
          <View key={uuidv4()}>
            {checkType(item)}
          </View>
          )}
        </View>
        <View style={styles.finalPriceContainer}>
          <Text style={styles.finalPrice}>Välisumma: {cartPrice(productsInCart).toFixed(2)} €</Text>
        </View>
        {continueButton()}
        </ScrollView>
      </SafeAreaView>
  );
}

// onPress={()=> fetchPost(productsInCart)}
//{item.toppings.map(topping => <Text key={item.key+topping} style={styles.toppingsText}>{topping}</Text>)}

const styles = StyleSheet.create ({
  headerContainer: {
    height: 50,
    flexDirection: "row",
    marginHorizontal: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3%",
    borderBottomWidth: 2,
    borderBottomColor: "#cdcdcd"
  },
  header: {
    fontSize: 20,
    fontFamily: "Verdana"
  },
  productContainer: {
    flex: 1,
  },
  finalPriceContainer: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  finalPrice: {
    fontFamily: "Verdana",
    fontSize: 18
  },
  nextButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#f4e609",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Cart;