import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import servingStyles from '../Servings/Styles/ServingStyles'
import { priceCounter, setNumberLower, setNumberHigher } from './SharedFunctions';


const Kebab = ({navigation, data, checkbox}) => {
    const dispatch = useDispatch();
    const [mainChoice, setMainChoice] = useState(data[0])
    const [sideChoice, setSideChoice] = useState(mainChoice.options[0])
    const [leftOption, setLeftOption] = useState('#f4e609')
    const [rightOption, setRightOption] = useState('#f5f5f5')
    const [numberOf, setNumberOf] = useState(1);
    const [nosalad, setNosalad] = useState(false);
    const sideOptions = mainChoice.options;

    const mainPress = (button) => {
        if (button == data[0]) {
            setMainChoice(data[0]);
            setLeftOption('#f4e609');
            setRightOption('#f5f5f5');
        } else if (button == data[1]) {
            setMainChoice(data[1]);
            setRightOption('#f4e609');
            setLeftOption('#f5f5f5');
        }
    }

    const renderCheckbox = () => {
        if (checkbox != false) {
            return (
                <View style={styles.extraItem}>
                    <CheckBox style={styles.checkBox} value={nosalad} onValueChange={(newValue)=>setNosalad(newValue)} />
                    <Text>Ei salaattia</Text>
                </View>
            )
        }
    }

    const cartObj = () => {
        const object = {
            key: uuidv4(),
            type: 'SERVING',
            id: mainChoice.id+sideChoice.id,
            name: mainChoice.name+' '+sideChoice.name,
            price: sideChoice.price,
            noSalad: nosalad
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
                <Text style={styles.title}>{mainChoice.id}{sideChoice.id}. {mainChoice.name} {sideChoice.name}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Tuotteen kuvaus</Text>
                <Text style={styles.description}>{mainChoice.description}</Text>
            </View>
            <View style={styles.mainOptionsContainer}>
                <TouchableOpacity onPress={() => mainPress(data[0])} style={{backgroundColor: leftOption, width: "45%", height: 60, borderColor: "#cdcdcdc", borderWidth: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{padding: 5}}>{data[0].name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => mainPress(data[1])} style={{backgroundColor: rightOption, width: "45%", height: 60, borderColor: "#cdcdcdc", borderWidth: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{padding: 5}}>{data[1].name}</Text>
                </TouchableOpacity>
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
            {renderCheckbox()}
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
        <TouchableOpacity style={styles.button} onPress={() =>  finishAction()}>
            <Text>Ostoskoriin</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create(servingStyles);


export default Kebab;