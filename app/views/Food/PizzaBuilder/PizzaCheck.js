import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput  } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import counter from './PriceBuilder';
import { useDispatch } from 'react-redux';


const PizzaCheck = ({navigation, route}) => {
    const data = route.params.data;
    const price = counter(data.key, data.pohja, data.added, data.removed, data.viipale);
    data.price = price;
    console.log(data)
    const dispatch = useDispatch();

    const pohjaprizeText = (pohja) => {
        switch(pohja) {
            case "Gluteeniton":
                return "+ 3,00€";
            case "Ruis":
                return "+ 2,50€";
        }
    }

    const toppingText = (item) => {
        if(item == data.added[0]) {
            if(data.removed.length > 0) {
                return "+ 0€"
            }
        } else if (data.pohja == "Perhe" || data.pohja == "Pannu") {
            return "+ 2,00€"
        } else {
            return "+ 1.50€"
        }
    }

    const oregano = () => {
        if (data.oregano == true) {
            return (
                <View style={{flexDirection: "row", alignItems: "center"}}>
                <Icon name="checkmark" size={20} color="#2ed165" />
                <Text style={styles.extrasText}>Oregano</Text>
            </View>)
        }               
    }
    const vs = () => {
        if (data.vs == true) {
            return (
                <View style={{flexDirection: "row", alignItems: "center"}}>
                <Icon name="checkmark" size={20} color="#2ed165" />
                <Text style={styles.extrasText}>Valkosipuli</Text>
            </View>)
        }               
    }
    const slice = () => {
        if (data.viipale == true) {
            return (
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Icon name="checkmark" size={20} color="#2ed165" />
                        <Text style={styles.extrasText}>Viipaloitu</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{color: "green"}} >+ 0.50€</Text>
                    </View>
                </View>
            )
        }               
    }

    const finishAction = () => {
        const toCart = {
            type: data.type,
            id: data.id,
            key: uuidv4(),
            name: data.name,
            pohja: data.pohja,
            price: data.price,
            added: data.added,
            removed: data.removed,
            oregano: data.oregano,
            vs: data.vs,
            viipale: data.viipale,
        }
        dispatch({type: 'ADD_TO_CART', payload: toCart})
        navigation.popToTop()
    }

  return (
        <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
            <View style={styles.container}>
                    <View style={styles.cardContainer}>
                        <View style={styles.priceContainer}>
                            <Text style={styles.headerText}>{data.id}. {data.name}</Text>
                        </View>
                        <View style={styles.pohjaContainer}>
                            <Text style={styles.pohjaText}>{data.pohja}</Text>
                            <Text style={{color: "green"}}>{pohjaprizeText(data.pohja)}</Text>
                        </View>
                        <View style={styles.editsContainer}>
                            {data.removed.map(item =>
                            <Text key={item} style={styles.editsText}>{item}</Text>
                            )}
                            {data.added.map(item =>
                            <View key={uuidv4()} style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                <Text style={styles.editsText}>{item}</Text>
                                <Text style={{color: "green"}} >{toppingText(item)}</Text>
                            </View>
                            )}
                        </View>
                        <View style={styles.extrasContainer}>
                            {slice()}
                            {oregano()}
                            {vs()}
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceText} >{price.toFixed(2)} €</Text>
                        </View>
                    </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => finishAction()}>
                <Text>Lisää ostoskoriin</Text>
            </TouchableOpacity>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 11
    },
    button: {
        alignItems: "center",
        backgroundColor: "#f4e609",
        flex: 1,
        width: "100%",
        justifyContent: "center",
    },
    cardContainer: {
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: "10%",
        height: "80%",
        flex: 1,
        padding: 5,
        backgroundColor: "#f5f5f5",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    headerText: {
        fontSize: 28
    },
    titleText: {
        fontSize: 24
    },
    pohjaContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#cdcdcd",
        borderBottomWidth: 1,
        flex: 1,

    },
    pohjaText: {
        fontSize: 20
    },
    editsContainer: {
        borderBottomColor: "#cdcdcd",
        borderBottomWidth: 1,
        flex: 5
    },
    editsText: {
        fontSize: 20
    },
    extrasContainer: {
        borderBottomColor: "#cdcdcd",
        borderBottomWidth: 1,
        flex: 2.5
    },
    extrasText: {
        fontSize: 20
    },
    textinputContainer: {
        backgroundColor: "#edeeef"
    },
    priceContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 2
    },
    priceText: {
        fontSize: 24
    },
});


export default PizzaCheck;