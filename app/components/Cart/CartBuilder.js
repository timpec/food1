import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

export const cartPrice = (items) => {
    let price = 0;
    for(let i in items) {
        price = price + items[i].price;
    }    
    return price;
}

export const alvAmmount = (items) => {
  let alv = cartPrice(items);
  alv = alv * 0.14;
  return alv;
}

// Editing view for first cart view
export const checkType = (item) => {
  const dispatch = useDispatch();
    switch (item.type) {
      case 'PIZZA':
        return (
          <View style={styles.card}>
            <View style={styles.titleText}>
              <Text style={styles.title}>{item.id}. {item.name} {item.pohja}</Text>
              {item.removed.map(item =>
              <Text key={item} style={styles.editsText}>{item}</Text>
              )}
              {item.added.map(item =>
              <Text key={uuidv4()} style={styles.editsText}>{item}</Text>
              )}
              <Text style={styles.priceText}>{item.price.toFixed(2)} €</Text>
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
              <Text style={styles.title}>{item.id}. {item.name}</Text>
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
              <Text style={styles.title}>{item.id}. {item.name} (SALAATTI)</Text>
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
              <Text style={styles.title}>{item.name}</Text>
              {item.dips.map(item =>
              <Text key={uuidv4()} style={styles.editsText}>- {item}</Text>
              )}
              <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
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
              <Text style={styles.title}>{item.name}</Text>
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

  // For final view of cart (simple)
  export const checkTypeSimple = (item) => {
    const dispatch = useDispatch();
      switch (item.type) {
        case 'PIZZA':
          return (
            <View style={styles.card}>
              <View style={styles.titleText}>
                <Text style={styles.title}>{item.id}. {item.name}</Text>
                <Text style={styles.pohjaText}>{item.pohja}</Text>
                {item.removed.map(item =>
                <Text key={item} style={styles.editsText}>{item}</Text>
                )}
                {item.added.map(item =>
                <Text key={uuidv4()} style={styles.editsText}>{item}</Text>
                )}
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
              </View>
            </View>
          )
  
        case 'SERVING':
          return (
            <View style={styles.card}>
              <View style={styles.titleText}>
                <Text style={styles.title}>{item.id}. {item.name}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
              </View>
            </View>
          )
  
        case 'SALAD':
          return (
            <View style={styles.card}>
              <View style={styles.titleText}>
                <Text style={styles.title}>{item.id}. {item.name} (SALAATTI)</Text>
                <Text>{item.sauce} kastike</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
              </View>
            </View>
            )
  
        case 'SIDES':
          return (
            <View style={styles.card}>
              <View style={styles.titleText}>
                <Text style={styles.title}>{item.name}</Text>
                {item.dips.map(item =>
                <Text key={uuidv4()} style={styles.editsText}>{item}</Text>
                )}
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
              </View>
            </View>
          )
  
        case 'DRINK':
          return (
            <View style={styles.card}>
              <View style={styles.titleText}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText} >{item.price.toFixed(2)} €</Text>
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
      marginTop: "3%",
      alignSelf: "center",
      justifyContent: "space-between",
      borderBottomColor: "#cdcdcd",
      paddingVertical: 5,
      borderBottomWidth: 1,
    },
    titleText: {
      justifyContent: "center",
      alignItems: "flex-start",
      width: "80%",
    },
    title: {
      fontSize: 15
    },
    priceText: {
      fontSize: 15
    },
    priceContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-end",
      width: "20%"
    },
    nextButton: {
      width: "100%",
      height: 50,
      backgroundColor: "lightgreen",
      alignItems: "center",
      justifyContent: "center"
    }
  })