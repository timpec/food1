import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import servingStyles from '../Servings/Styles/ServingStyles'


const MultiMainOption = ({navigation, data}) => {
    const dispatch = useDispatch();
    const [mainChoice, setMainChoice] = useState(data[0])

    useEffect(() => {
    }, []);

    const cartObj = () => {
        const object = {
            key: uuidv4(),
            type: 'SERVING',
            id: mainChoice.id,
            name: mainChoice.name,
            price: mainChoice.price
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
                <Text style={styles.title} >{mainChoice.id}. {mainChoice.name}</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: mainChoice.img}} />
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
        </View>
        <View style={styles.priceContainer}>
                <Text style={styles.price} >{mainChoice.price.toFixed(2)} €</Text>
            </View>
        <TouchableOpacity style={styles.button} onPress={() => finishAction()}>
            <Text>Lisää Ostoskoriin</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create(servingStyles);


export default MultiMainOption;