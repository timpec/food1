import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cartPrice, checkType } from '../../components/Cart/CartBuilder';


const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(state => state.productsInCart)

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
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Ostoskorissa {productsInCart.length} tuote(tta).</Text>
        </View>
        {productsInCart.map(item => 
        <View style={{flex:6}} key={uuidv4()}>
          {checkType(item)}
        </View>
        )}
        </ScrollView>
        <View style={styles.finalPriceContainer}>
          <Text style={styles.finalPrice}>{cartPrice(productsInCart).toFixed(2)} €</Text>
        </View>
        {continueButton()}
      </SafeAreaView>
  );
}

// onPress={()=> fetchPost(productsInCart)}
//{item.toppings.map(topping => <Text key={item.key+topping} style={styles.toppingsText}>{topping}</Text>)}

const styles = StyleSheet.create ({
  headerContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 15
  },
  header: {
    fontSize: 20,
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

export default Cart;