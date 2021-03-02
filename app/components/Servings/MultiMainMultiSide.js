import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';


const MultiMainMultiSide = ({data}) => {
    const dispatch = useDispatch();
    const [mainChoice, setMainChoice] = useState(data[0])
    const [sideChoice, setSideChoice] = useState(mainChoice.options[0])
    const sideOptions = mainChoice.options;

    useEffect(() => {
    }, []);

    const cartObj = () => {
        const object = {
            type: 'SALAD',
            id: mainChoice.id,
            name: mainChoice.name,
            sauce: sideChoice.name,
            price: mainChoice.price,
        }
        return object;
    }

  return (
      <View>
          <Text style={styles.title} >{mainChoice.id}. {mainChoice.name}</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignSelf: "center", alignItems: "center", width:"90%"}}>
                    <Text>{mainChoice.name}</Text>
                </View>
                <View style={styles.customizeContainer}>
                    <Text>Salaatin Valinta</Text>
                    <View style={styles.picker}>
                        <Picker prompt="Valitse salaattisi"
                                selectedValue={mainChoice}
                                onValueChange={(itemValue, itemIndex) => 
                                    setMainChoice(itemValue)} >
                            {data.map(item =>
                                <Picker.Item key={item.id} label={item.id+". "+item.name} value={item} ></Picker.Item>
                            )}
                        </Picker>
                    </View>
                </View>
                <View style={styles.customizeContainer}>
                    <Text>Kastikkeen Valinta</Text>
                    <View style={styles.picker}>
                        <Picker prompt="Valitse salaatinkastike"
                                selectedValue={sideChoice}
                                onValueChange={(itemValue, itemIndex) => 
                                    setSideChoice(itemValue)} >
                            {mainChoice.options.map(item =>
                                <Picker.Item key={item.id} label={item.name} value={item} ></Picker.Item>
                            )}
                        </Picker>
                    </View>
                </View>
                <View style={{alignItems: "center"}}>
                    <Text>{mainChoice.price.toFixed(2)} €</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() =>  dispatch({type: 'ADD_TO_CART', payload: cartObj()})}>
                <Text>Ostoskoriin</Text>
            </TouchableOpacity>
            </View>
  );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#f4e609",
        height: "8%",
        width: "100%",
        justifyContent: "center",
    },
    title: {
        padding: 5,
        color: "black",
        alignSelf: "center",
        fontSize: 26,
        fontFamily: "Verdana"
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
        borderColor: "#2ed165",
        borderWidth: 1,
        marginTop: 10
    },
});


export default MultiMainMultiSide;