import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';


const Drinks = ({data}) => {
    const dispatch = useDispatch();
    const [mainChoice, setMainChoice] = useState(data[0])
    const sideOptions = mainChoice.options;
    const [sideChoice, setSideChoice] = useState(sideOptions[0])

    useEffect(() => {
        setSideChoice(sideOptions[0])
    }, [mainChoice.key == 5]);

    const cartObj = () => {
        const object = {
            type: 'DRINK',
            name: mainChoice.name+' '+sideChoice.name,
            price: sideChoice.price
        }
        return object;
    }
    console.log(cartObj())

  return (
      <View> 
        <ScrollView>
          <View style={styles.customizeContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{mainChoice.name} {sideChoice.name}l</Text>
              </View>
                <View style={styles.itemsContainer}>
                    {data.map(item =>
                    <TouchableOpacity key={item.key} onPress={() => setMainChoice(item)} style={{width: "50%", height: 90, borderColorBottom: "#cdcdcdc", borderWidthBottom: 1, alignItems: "center", justifyContent: "center"}}>
                        <Image style={styles.image} source={{uri: item.img}}/>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                    )}
                </View>
                <View style={styles.picker}>
                    <Text style={styles.pickerTitle}>Valitse koko</Text>
                    <Picker prompt="Valitse Koko"
                            selectedValue={sideChoice}
                            onValueChange={(itemValue, itemIndex) => 
                                setSideChoice(itemValue)} >
                        {sideOptions.map(item =>
                        <Picker.Item key={item.id} label={item.name} value={item} ></Picker.Item>
                        )}
                    </Picker>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price} >{sideChoice.price.toFixed(2)} €</Text>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() =>  dispatch({type: 'ADD_TO_CART', payload: cartObj()})}>
            <Text>Lisää Ostoskoriin</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        resizeMode: "contain"
      },
    itemsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
        alignItems: "center",
        width:"100%"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#f4e609",
        height: "8%",
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
        marginTop: 10
    },
    pickerTitle: {
        padding: 5,
        fontSize: 16,
        fontFamily: "Verdana"
    },
    priceContainer: {
        alignItems: "center",
        padding: 10
    },
    price: {
        fontSize: 20,
        fontFamily: "Verdana"
    }
});


export default Drinks;