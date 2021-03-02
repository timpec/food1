import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';


const CustomOption = ({data}) => {
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
                if (addedSides.length != 0) {
                    return addedSides.length + mainChoice.price - 1;
                }
                else {
                    return addedSides.length + mainChoice.price;
                }
            case 2:
                if (addedSides.length != 0) {
                    return addedSides.length + mainChoice.price - 2;
                }
                else {
                    return addedSides.length + mainChoice.price;
                }
        }
    }

    const cartObj = () => {
        const object = {
            type: 'SIDES',
            name: mainChoice.name,
            dips: addedSides,
            price: priceCount(),
        }
        return object;
    }

  return (
      <View>
        <View style={styles.customizeContainer}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignSelf: "center", alignItems: "center", width:"90%"}}>
                <Text>{mainChoice.name}</Text>
            </View>
            <View style={styles.picker}>
                <Picker prompt="Sides and Dips"
                        selectedValue={mainChoice}
                        onValueChange={(itemValue, itemIndex) => 
                            setMainChoice(itemValue)} >
                            {data.map(item =>
                                <Picker.Item key={item.id} label={item.name} value={item} ></Picker.Item>
                            )}
                </Picker>
            </View>
            <View>
                {addedSides.map(item =>
                <View key={uuidv4()} >
                    <Text>{item}</Text>
                        <TouchableOpacity onPress={()=>removeItem(item)}>
                            <Icon name="close-outline" size={26} color="firebrick" />
                        </TouchableOpacity>
                </View>
                )}
                <View style={styles.picker}>
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
            </View>
            <View style={{alignItems: "center"}}>
                <Text>{priceCount().toFixed(2)} €</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() =>  dispatch({type: 'ADD_TO_CART', payload: cartObj()})}>
                <Text>Ostoskoriin</Text>
            </TouchableOpacity>
        </View>
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


export default CustomOption;