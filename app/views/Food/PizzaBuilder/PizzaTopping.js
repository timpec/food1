import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, View, FlatList,Button  } from 'react-native';
import { pizzat, vegaanipizzat } from '../../../data/data';


const PizzaTopping = ({navigation, route}) => {
  const backgroundColor = route.params.backgroundColor
  const pizzaStyle = route.params.pizzaStyle

  const checkStyle = () => {
    if (pizzaStyle == "Vegan") {
        return pizzat.filter((item) => item.type == 'vegan')
    } else {
        return pizzat.filter((item) => item.type == 'normal');
    }
}

  return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: backgroundColor}}>
        <FlatList
          data={checkStyle()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.pizzaCard} onPress={() => navigation.push('PizzaDetails', {
              key: item.key,
              toppings: item.toppings,
              pohja: route.params.pohja
              })} >
              <Image style={styles.image} source={{uri: item.img}} />
              <View style={styles.textContainer} >
                <View style={{borderBottomColor: "#cdcdcd", borderBottomWidth:2}}>
                  <Text style={styles.title} >{item.id}. {item.name}</Text>
                </View>
                {item.toppings.map(topping => <Text key={item.key+topping} style={styles.toppingsText}>{topping}</Text>)}
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    pizzaCard: {
      flexDirection: "row",
      width: "90%",
      height: undefined,
      alignSelf: "center",
      justifyContent: "space-between",
      marginVertical: "5%",
      padding: 5,
      backgroundColor:"#f5f5f5",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    image: {
      width: 170,
      height: 170,
      resizeMode: "contain"
    },
    textContainer: {
      width: "50%",
      paddingHorizontal: 5,
    },
    title: {
      fontSize: 20,
      paddingBottom: 5,
      fontFamily: "Verdana",
      fontWeight: "bold",
    },
    toppingsText: {
      fontSize: 16,
      fontFamily: "Verdana"
    }
});


export default PizzaTopping;