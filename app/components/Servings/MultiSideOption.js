import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import servingStyles from '../Servings/Styles/ServingStyles'


const MultiSideOption = ({navigation, data}) => {
    const dispatch = useDispatch();
    const [mainChoice, setMainChoice] = useState(data[0])
    const [sideChoice, setSideChoice] = useState(mainChoice.options[0])
    const sideOptions = mainChoice.options;

    useEffect(() => {
    }, []);

    const cartObj = () => {
        const object = {
            key: uuidv4(),
            type: 'SERVING',
            id: mainChoice.id+sideChoice.id,
            name: mainChoice.name+' '+sideChoice.name,
            price: sideChoice.price
            //Salaatti checkbox?
        }
        return object;
    }

    const finishAction = () => {
        dispatch({type: 'ADD_TO_CART', payload: cartObj()})
        navigation.popToTop()
    }

  return (
    <View style={styles.customizeContainer}>
        <View style={{flex:9}}>
            <View style={styles.titleContainer}>
                <Text style={styles.title} >{mainChoice.id}{sideChoice.id}. {mainChoice.name} {sideChoice.name}</Text>
            </View>
            <View style={styles.picker}>
                <Picker prompt="Valitse Lisuke"
                        selectedValue={sideChoice}
                        onValueChange={(itemValue, itemIndex) => 
                            setSideChoice(itemValue)} >
                            {sideOptions.map(item =>
                                <Picker.Item key={item.id} label={item.name} value={item} ></Picker.Item>
                            )}
                </Picker>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{sideChoice.price.toFixed(2)} €</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => finishAction()}>
            <Text>Ostoskoriin</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create(servingStyles);


export default MultiSideOption;