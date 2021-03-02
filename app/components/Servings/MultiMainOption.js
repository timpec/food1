import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';


const MultiMainOption = ({data}) => {
    const dispatch = useDispatch();
    const [mainChoice, setMainChoice] = useState(data[0])

    useEffect(() => {
    }, []);

    const cartObj = () => {
        const object = {
            type: 'SERVING',
            id: mainChoice.id,
            name: mainChoice.name,
            price: mainChoice.price
        }
        return object;
    }

  return (
    <View style={{flex:1}}>
        <View style={{flex:11}}>
        <View style={styles.customizeContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title} >{mainChoice.id}. {mainChoice.name}</Text>
            </View>
            <View style={styles.picker}>
                <Text style={styles.pickerTitle}>Zonen Valinta</Text>
                <Picker prompt="Valitse Zone-annos"
                        selectedValue={mainChoice}
                        onValueChange={(itemValue, itemIndex) => 
                        setMainChoice(itemValue)} >
                            {data.map(item =>
                                <Picker.Item key={item.id} label={item.id+". "+item.name} value={item} ></Picker.Item>
                            )}
                </Picker>
            </View>
            <View>
                {mainChoice.toppings.map(item =>
                <Text key={item}>{item}</Text>
                )}
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price} >{mainChoice.price.toFixed(2)} €</Text>
            </View>
        </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() =>  dispatch({type: 'ADD_TO_CART', payload: cartObj()})}>
            <Text>Lisää Ostoskoriin</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f4e609",
        width: "100%",
        justifyContent: "center",
    },
    titleContainer: {
        borderBottomColor: "#cdcdcd",
        borderBottomWidth: 2
    },
    title: {
        padding: 5,
        marginVertical: 5,
        color: "black",
        alignSelf: "center",
        fontSize: 26,
        fontFamily: "Verdana",
    },
    customizeContainer: {
        width: "90%",
        height: "85%",
        marginHorizontal: "5%",
        marginVertical: "10%",
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
    picker: {
        borderColor: "#2ed165",
        borderWidth: 1,
        marginTop: 10
    },
    pickerTitle: {
        padding: 5,
        fontSize: 16,
        fontFamily: "Verdana"
    },
    priceContainer: {
        alignItems: "center",
        padding: 10,
    },
    price: {
        fontSize: 20,
        fontFamily: "Verdana"
    }
});


export default MultiMainOption;