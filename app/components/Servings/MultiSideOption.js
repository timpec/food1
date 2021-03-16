import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import servingStyles from '../Servings/Styles/ServingStyles'
import { priceCounter, setNumberHigher, setNumberLower } from './SharedFunctions';


const MultiSideOption = ({navigation, data}) => {
    const dispatch = useDispatch();
    const [mainChoice, setMainChoice] = useState(data[0])
    const [sideChoice, setSideChoice] = useState(mainChoice.options[0])
    const [numberOf, setNumberOf] = useState(1);
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
        let i = 0
        while (i < numberOf) {
            dispatch({type: 'ADD_TO_CART', payload: cartObj()})
            i++;
        }
        navigation.popToTop()
    }

  return (
    <View style={styles.customizeContainer}>
        <View style={{flex:9}}>
            <View style={styles.titleContainer}>
                <Text style={styles.title} >{mainChoice.id}{sideChoice.id}. {mainChoice.name} {sideChoice.name}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Tuotteen kuvaus</Text>
                <Text style={styles.description}>{mainChoice.description}</Text>
            </View>
            <View style={styles.picker}>
                <Text style={styles.pickerText}>Lisukevaihtoehto</Text>
                <Picker prompt="Valitse Lisuke"
                        selectedValue={sideChoice}
                        onValueChange={(itemValue, itemIndex) => 
                            setSideChoice(itemValue)} >
                            {sideOptions.map(item =>
                                <Picker.Item key={item.id} label={item.name} value={item} ></Picker.Item>
                            )}
                </Picker>
            </View>
        </View>
        <View style={styles.bottomComponents}>
            <View style={styles.promptContainer}>
                <Text style={styles.prompt}>Valitse kappalemäärä</Text>
            </View>
            <View style={styles.ammountContainer}>
                <TouchableOpacity style={styles.ammountChangeButton} onPress={() => setNumberOf(setNumberLower(numberOf))}>
                    <Icon name="remove-outline" size={26} color="firebrick" />
                </TouchableOpacity>
                <Text style={styles.ammountText}>{numberOf}</Text>
                <TouchableOpacity style={styles.ammountChangeButton} onPress={() => setNumberOf(setNumberHigher(numberOf))}>
                    <Icon name="add-outline" size={26} color="green" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.priceArea}>
            <View style={styles.promptContainer}>
                <Text style={styles.prompt}>Loppusumma:</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{priceCounter(sideChoice.price, numberOf).toFixed(2)} €</Text>
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