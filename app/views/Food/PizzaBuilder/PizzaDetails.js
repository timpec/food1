import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView  } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';

import AllToppings from '../../../data/toppings';
import { pizzat } from '../../../data/data';


const PizzaDetails = ({navigation, route}) => {
    const pizza = pizzat[parseInt(route.params.key)];
    const editableToppings = [...pizza.toppings];
    const [newTopping, setNewTopping] = useState(AllToppings[0])
    const [toppings, setToppings] = useState(editableToppings)
    const [added] = useState([])
    const [removed] = useState([])
    const [oreganoCheck, setOreganoCheck] = useState(false);
    const [vsCheck, setVSCheck] = useState(false);
    const [viipaleCheck, setViipaleCheck] = useState(false);


    const addItem = (item) => {
        toppings.push(item)
        setToppings([...toppings])
        added.push(item)
        for (let i in removed) {
            if(item == removed[i]) {
                removed.splice(i, 1)
            }
        }
    }
    const removeItem = (item) => {
        const index = toppings.indexOf(item)
        if (index > -1) {
            toppings.splice(index, 1)
        }
        setToppings([...toppings])
        removed.push(item);
        for (let i in added) {
            if(item == added[i]) {
                added.splice(i, 1)
                break;
            }
        }
    }

    const checkRemoves = () => {
        const result = [];
        // Only need data of pizzas original toppings removed
        for (let i in pizza.toppings) {
            for (let x in removed) {
                if (pizza.toppings[i] == removed[x]) {
                    result.unshift("- "+removed[x])
                }
            }
        }
        return result;
    }

    const checkAdds = () => {
        const result = [];
        let tempAdded = [...added]
        let uniq = new Set();
        for (let i in pizza.toppings) {
            for (let x in added) {
                if (pizza.toppings[i] == added[x]) {
                    uniq.add(added[x])
                    tempAdded.splice(x , 1)
                }
            }
        }
        console.log(uniq)
        for (let i in tempAdded) {
            result.push("+ "+tempAdded[i])
        }
        for (let i in uniq) {
            result.push("+ "+uniq[i])
        }
        return result;
    }

    const pizzaObj = () => {
        const pizzaItem = {
            type: 'PIZZA',
            id: pizza.id,
            key: pizza.key,
            name: pizza.name,
            pohja: route.params.pohja,
            removed: checkRemoves(),
            added: checkAdds(),
            oregano: oreganoCheck,
            vs: vsCheck,
            viipale: viipaleCheck
        }
        return pizzaItem;
    }


  return (
        <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={styles.customizeContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} >{pizza.id}. {pizza.name}</Text>
                    </View>
                    <View style={styles.editorContainer}>
                        {toppings.map(item =>
                        <View key={uuidv4()} style={styles.itemContainer}>
                            <Text style={styles.itemText}>{item}</Text>
                            <TouchableOpacity onPress={()=>removeItem(item)}>
                                <Icon name="close-outline" size={26} color="firebrick" />
                            </TouchableOpacity>
                        </View>
                        )}
                        <View style={styles.picker}>
                            <Picker prompt="Valitse täyte"
                                    selectedValue={newTopping}
                                    onValueChange={(itemValue, itemIndex) => 
                                        setNewTopping(itemValue)} >
                                        {AllToppings.map(item =>
                                            <Picker.Item key={item} label={item} value={item} ></Picker.Item>
                                        )}
                            </Picker>
                        </View>
                        <TouchableOpacity style={styles.addContainer} onPress={()=>addItem(newTopping)}>
                            <Text style={styles.addButton} >Lisää täyte</Text>
                            <Icon name="add-outline" size={20} color="green" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.extraContainer}>
                        <View style={styles.extraItem}>
                            <CheckBox style={styles.checkBox} value={oreganoCheck} onValueChange={(newValue)=>setOreganoCheck(newValue)} />
                            <Text>Oregano</Text>
                        </View>
                        <View style={styles.extraItem}>
                            <CheckBox style={styles.checkBox} value={vsCheck} onValueChange={(newValue)=>setVSCheck(newValue)} />
                            <Text>Valkosipuli</Text>
                        </View>
                        <View style={styles.extraItem}>
                            <CheckBox style={styles.checkBox} value={viipaleCheck} onValueChange={(newValue)=>setViipaleCheck(newValue)} />
                            <Text>Viipalointi</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('PizzaCheck', {
                        data: pizzaObj()
                        })}>
                        <Text>Yhteenvetoon</Text>
            </TouchableOpacity>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    button: {
        height: "8%",
        alignItems: "center",
        backgroundColor: "#f4e609",
        width: "100%",
        justifyContent: "center",
        alignSelf: "flex-end"
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
    itemContainer: {
        paddingTop: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    addContainer: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "#2ed165"
    },
    addButton: {
        fontFamily: "Verdana",
        fontSize: 16
    },
    itemText: {
        fontSize: 20
    },
    extraContainer: {
        width: "90%",
        marginVertical: "3%",
        marginTop: "3%",
        justifyContent: "space-evenly",
    },
    extraItem: {
        flexDirection: "row",
        alignItems: "center"
    },
    editorContainer: {
        marginTop: "3%"
    },
    picker: {
        borderColor: "#2ed165",
        borderBottomWidth: 0,
        borderWidth: 1,
        marginTop: "3%",
    },
    checkBox: {
        transform: [
            {scaleX: 1.3},
            {scaleY: 1.3}
        ]
    },
});


export default PizzaDetails;