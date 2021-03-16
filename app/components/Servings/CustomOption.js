import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import servingStyles from '../Servings/Styles/ServingStyles'


const CustomOption = ({navigation, data}) => {
    const dispatch = useDispatch();
    const [mainChoice, setMainChoice] = useState(data[0])
    const [sideChoice, setSideChoice] = useState(mainChoice.dip[0])
    const [addedSides, setAddedSides] = useState([])
    const sideOptions = mainChoice.dip;

    useEffect(() => {
    }, []);

    const addItem = (item) => {
        addedSides.push(item)
        setAddedSides([...addedSides])
    }

    const removeItem = (item) => {
        const index = addedSides.indexOf(item)
        if (index > -1) {
            addedSides.splice(index, 1)
        }
        setAddedSides([...addedSides])
    }

    const priceCount = () => {
        switch (mainChoice.free) {
            case 0:
                return addedSides.length + mainChoice.price;
            case 1:
                if (addedSides.length <= 1) {
                    return mainChoice.price;
                }
                else {
                    return addedSides.length + mainChoice.price - 1;
                }
            case 2:
                if (addedSides.length <= 2) {
                    return mainChoice.price;
                }
                else {
                    return addedSides.length + mainChoice.price - 2;
                }
        }
    }

    const cartObj = () => {
        const object = {
            key: uuidv4(),
            type: 'SIDES',
            name: mainChoice.name,
            dips: addedSides,
            price: priceCount(),
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
                <Text style={styles.title}>{mainChoice.name}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Tuotteen kuvaus</Text>
                <Text style={styles.description}>Naposteltavaa pikkunälkään tai annoksen kylkeen.</Text>
            </View>
            <View style={styles.picker}>
                <Text style={styles.pickerText}>Naposteltavan tuotteen valinta</Text>
                <Picker prompt="Sides and Dips"
                        selectedValue={mainChoice}
                        onValueChange={(itemValue, itemIndex) => 
                            setMainChoice(itemValue)} >
                            {data.map(item =>
                                <Picker.Item key={item.key} label={item.name} value={item} ></Picker.Item>
                            )}
                </Picker>
            </View>
            <View>
                <View style={styles.picker}>
                    <Text style={styles.pickerText}>Valitse dippisi</Text>
                    <Picker prompt="Valitse dippi"
                            selectedValue={sideChoice}
                            onValueChange={(itemValue, itemIndex) => 
                                setSideChoice(itemValue)} >
                                {sideOptions.map(item =>
                                    <Picker.Item key={item} label={item} value={item} ></Picker.Item>
                                )}
                    </Picker>
                </View>
                <TouchableOpacity style={styles.addContainer} onPress={()=>addItem(sideChoice)}>
                    <Text style={styles.addButton} >Lisää dippi tilaukseen</Text>
                    <Icon name="add-outline" size={20} color="green" />
                </TouchableOpacity>
                {addedSides.map(item =>
                <View style={styles.dipContainer} key={uuidv4()} >
                    <Text>{item}</Text>
                        <TouchableOpacity onPress={()=>removeItem(item)}>
                            <Icon name="close-outline" size={26} color="firebrick" />
                        </TouchableOpacity>
                </View>
                )}
            </View>

        </View>
        <View style={styles.priceContainer}>
                <Text style={styles.price}>{priceCount().toFixed(2)} €</Text>
            </View>
        <TouchableOpacity style={styles.button} onPress={() => finishAction()}>
            <Text>Ostoskoriin</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create(servingStyles);


export default CustomOption;