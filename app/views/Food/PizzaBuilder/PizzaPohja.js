import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TouchableOpacity  } from 'react-native';


const PizzaPohja = ({navigation, route}) => {
    const pizzaStyle = route.params.style
    
    const checkStyle = () => {
        if (pizzaStyle == "Vegan") {

        } else {
            return (
                <TouchableOpacity style={styles.paContainer} onPress={() => navigation.push('PizzaTopping', {pohja: "Pannu", backgroundColor: styles.paContainer.backgroundColor, pizzaStyle})}>
                    <Text style={styles.title} >Pannu</Text>
                </TouchableOpacity>
            )
        }
    }

  return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
        <TouchableOpacity style={styles.nContainer} onPress={() => navigation.push('PizzaTopping', {pohja: "Normaali", backgroundColor: styles.nContainer.backgroundColor, pizzaStyle})}>
            <Text style={styles.title} >Normaali</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gContainer} onPress={() => navigation.push('PizzaTopping', {pohja: "Gluteeniton", backgroundColor: styles.gContainer.backgroundColor, pizzaStyle})}>
            <Text style={styles.title} >Gluteeniton</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rContainer} onPress={() => navigation.push('PizzaTopping', {pohja: "Ruis", backgroundColor: styles.rContainer.backgroundColor, pizzaStyle})}>
            <Text style={styles.title} >Ruis</Text>
        </TouchableOpacity>
        {checkStyle()}
        <TouchableOpacity style={styles.peContainer} onPress={() => navigation.push('PizzaTopping', {pohja: "Perhe", backgroundColor: styles.peContainer.backgroundColor, pizzaStyle})}>
            <Text style={styles.title} >Perhe</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    nContainer: {
        flex: 1,
        marginBottom: "5%",
        marginTop: "10%",
        marginHorizontal: "5%",
        justifyContent: "center",
        backgroundColor: "#cfac89",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    gContainer: {
        flex: 1,
        marginVertical: "5%",
        marginHorizontal: "5%",
        justifyContent: "center",
        backgroundColor: "#f7e4c4",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    rContainer: {
        flex: 1,
        marginVertical: "5%",
        marginHorizontal: "5%",
        justifyContent: "center",
        backgroundColor: "#98644f",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    paContainer: {
        flex: 1,
        marginVertical: "5%",
        marginHorizontal: "5%",
        justifyContent: "center",
        backgroundColor: "#c68c5f",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    peContainer: {
        flex: 1,
        marginTop: "5%",
        marginBottom: "10%",
        marginHorizontal: "5%",
        justifyContent: "center",
        backgroundColor: "#cfac89",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    title: {
        color: "black",
        alignSelf: "center",
        fontSize: 24,
        fontFamily: "Verdana"
    }
});


export default PizzaPohja;