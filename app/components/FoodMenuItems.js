import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FoodMenuItems = ({navigation}) => {
    

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('PizzaStyle')} >
            <Image style={styles.image} source={require('../assets/category/pizza.png')} />
            <Text style={styles.title} >Pizzat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('Serving', {type: "Kebab"})} >
            <Image style={styles.image} source={require('../assets/category/kebab.png')} />
            <Text style={styles.title} >Kebab ja kanakebab</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('Serving', {type: "Salaatti"})} >
            <Image style={styles.image} source={require('../assets/category/salad.png')} />
            <Text style={styles.title} >Salaatit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('Serving', {type: "Rulla"})} >
            <Image style={styles.image} source={require('../assets/category/rulla.png')} />
            <Text style={styles.title} >Rullat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('Serving', {type: "Vöner"})} >
            <Image style={styles.image} source={require('../assets/category/voner.png')} />
            <Text style={styles.title} >Vöner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('Serving', {type: "Zone"})} >
            <Image style={styles.image} source={require('../assets/category/kebab.png')} />
            <Text style={styles.title} >Zonet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('Serving', {type: "Falafel"})} >
            <Image style={styles.image} source={require('../assets/category/falafel.png')} />
            <Text style={styles.title} >Falafelit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('Serving', {type: "Kana"})} >
            <Image style={styles.image} source={require('../assets/category/protein.png')} />
            <Text style={styles.title} >Kana ja Kala</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('Serving', {type: "Sides"})} >
            <Image style={styles.image} source={require('../assets/category/sides.png')} />
            <Text style={styles.title} >Sides and Dips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.push('Serving', {type: "Juoma"})} >
            <Image style={styles.image} source={require('../assets/category/drinks.png')} />
            <Text style={styles.title} >Juomat</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    innerContainer: {
        width: "50%",
        paddingTop: 30,
        alignItems: "center"
    },
    image: {
        height: 120,
        width: 120,
    },
    title: {
        fontSize: 20,
        color: "black",
        fontFamily: "Verdana",
        paddingTop: 10
    }
});

export default FoodMenuItems;