import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const cartPrice = (items) => {
    let price = 0;
    for(let i in items) {
        price = price + items[i].price;
    }    
    return price;
}

export const checkType = (item) => {
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