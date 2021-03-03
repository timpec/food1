import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const Cart = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(state => state.productsInCart)
  let price = 0;

  const priceAddition = (item) => {
      price = price + item.price;
  }

  // Check item types and return view fitting to it
  const checkType = (item) => {
    priceAddition(item);
    switch (item.type) {
      case 'PIZZA':
        return (
          <View style={styles.card}>
            <View style={styles.titleText}>
              <Text>{item.id}. {item.name}</Text>
              <Text style={styles.pohjaText}>{item.pohja}</Text>
              <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
            </View>
            <View style={styles.editsContainer}>
              {item.removed.map(item =>
              <Text key={item} style={styles.editsText}>{item}</Text>
              )}
              {item.added.map(item =>
              <Text key={uuidv4()} style={styles.editsText}>{item}</Text>
              )}
            </View>
            <View style={styles.priceContainer}>
              <TouchableOpacity onPress={()=> dispatch({type: 'REMOVE_FROM_CART', payload: item})}>
                <Icon name="close-outline" size={26} color="firebrick" />
              </TouchableOpacity>
            </View>
          </View>
        )

      case 'SERVING':
        return (
          <View style={styles.card}>
            <View style={styles.titleText}>
              <Text>{item.id}. {item.name}</Text>
              <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
            </View>
            <View style={styles.priceContainer}>
              <TouchableOpacity onPress={()=> dispatch({type: 'REMOVE_FROM_CART', payload: item})}>
                <Icon name="close-outline" size={26} color="firebrick" />
              </TouchableOpacity>
            </View>
          </View>
        )

      case 'SALAD':
        return (
          <View style={styles.card}>
            <View style={styles.titleText}>
              <Text>{item.id}. {item.name}</Text>
              <Text>{item.sauce} kastike</Text>
              <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
            </View>
            <View style={styles.priceContainer}>
              <TouchableOpacity onPress={()=> dispatch({type: 'REMOVE_FROM_CART', payload: item})}>
                <Icon name="close-outline" size={26} color="firebrick" />
              </TouchableOpacity>
            </View>
          </View>
          )

      case 'SIDES':
        return (
          <View style={styles.card}>
            <View style={styles.titleText}>
              <Text>{item.name}</Text>
              <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
            </View>
            <View style={styles.editsContainer}>
              {item.dips.map(item =>
              <Text key={uuidv4()} style={styles.editsText}>{item}</Text>
              )}
            </View>
            <View style={styles.priceContainer}>
              <TouchableOpacity onPress={()=> dispatch({type: 'REMOVE_FROM_CART', payload: item})}>
                <Icon name="close-outline" size={26} color="firebrick" />
              </TouchableOpacity>
            </View>
          </View>
        )

      case 'DRINK':
        return (
          <View style={styles.card}>
            <View style={styles.titleText}>
              <Text>{item.name}</Text>
              <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
            </View>
            <View style={styles.priceContainer}>
              <TouchableOpacity onPress={()=> dispatch({type: 'REMOVE_FROM_CART', payload: item})}>
                <Icon name="close-outline" size={26} color="firebrick" />
              </TouchableOpacity>
            </View>
          </View>
        )
    }
  }

  return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
      <ScrollView style={{borderWidth: 1, borderColor: "red", flex:1,}}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Ostoskorissa {productsInCart.length} tuote(tta).</Text>
        </View>
        {productsInCart.map(item => 
        <View style={{flex:6}} key={uuidv4()}>
          {checkType(item)}
        </View>
        )}
        <View style={styles.finalPriceContainer}>
          <Text style={styles.finalPrice}>{price.toFixed(2)} €</Text>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
}

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
    borderColor: "blue",
    borderWidth: 2,
    height: 50,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
  finalPrice: {
    fontFamily: "Verdana",
    fontSize: 24
  }
})

export default Cart;