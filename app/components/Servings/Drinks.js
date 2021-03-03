import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import servingStyles from '../Servings/Styles/ServingStyles'


const Drinks = ({navigation, data}) => {
    const dispatch = useDispatch();
    const [mainChoice, setMainChoice] = useState(data[0])
    const sideOptions = mainChoice.options;
    const [sideChoice, setSideChoice] = useState(sideOptions[0])

    useEffect(() => {
        setSideChoice(sideOptions[0])
    }, [mainChoice.key == 5]);

    const cartObj = () => {
        const object = {
            key: uuidv4(),
            type: 'DRINK',
            name: mainChoice.name+' '+sideChoice.name,
            price: sideChoice.price
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
                <Text style={styles.title}>{mainChoice.name} {sideChoice.name}l</Text>
              </View>
                <View style={styles.itemsContainer}>
                    {data.map(item =>
                    <TouchableOpacity key={item.key} onPress={() => setMainChoice(item)} style={styles.drinkItem}>
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
        <TouchableOpacity style={styles.button} onPress={() =>  finishAction()}>
            <Text>Lisää Ostoskoriin</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create(servingStyles);


export default Drinks;