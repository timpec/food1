import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView  } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';

import AllToppings from '../../../data/toppings';
import { pizzat, vegaanipizzat } from '../../../data/data';


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

    useEffect(() => {
        //setToppings(editableToppings)
    }, []);

    const addItem = (item) => {
        toppings.push(item)
        setToppings([...toppings])
        added.push(item)
        for (i in removed) {
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
        for (i in added) {
            if(item == added[i]) {
                added.splice(i, 1)
            }
        }
    }

    const checkRemoves = () => {
        const result = [];
        // Only need data of pizzas original toppings removed
        for (i in pizza.toppings) {
            for (x in removed) {
                if (pizza.toppings[i] == removed[x]) {
                    result.unshift("- "+removed[x])
                }
            }
        }
        return result;
    }

    const checkAdds = () => {
        const result = [];
        // Only need data of pizzas original toppings removed
        for (i in pizza.toppings) {
            for (x in added) {
                if (pizza.toppings[i] == added[x]) {
                    added.splice(x , 1)
                }
            }
        }
        for (i in added) {
            result.push("+ "+added[i])
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
            <ScrollView style={styles.container}>
                    <Text style={styles.title} >{pizza.id}. {pizza.name}</Text>
                    <View style={styles.customizeContainer}>
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
    container: {
    },
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
        marginHorizontal: "5%",
        marginVertical: "5%",
        justifyContent: "space-evenly",
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
    extraItem: {
        flexDirection: "row",
        alignItems: "center"
    },
    picker: {
        borderColor: "#2ed165",
        borderBottomWidth: 0,
        borderWidth: 1,
        marginTop: 10
    },
    checkBox: {
        transform: [
            {scaleX: 1.3},
            {scaleY: 1.3}
        ]
    },
});


export default PizzaDetails;