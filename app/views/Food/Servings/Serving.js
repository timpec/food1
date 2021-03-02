import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image  } from 'react-native';

import { kebabAnnokset, kanaAnnokset, vonerAnnokset, falafelAnnokset, rullaAnnokset, zoneAnnokset, salaattiAnnokset, juomat, sides } from '../../../data/data';
import Kebab from '../../../components/Servings/Kebab';
import MultiMainOption from '../../../components/Servings/MultiMainOption';
import MultiMainMultiSide from '../../../components/Servings/MultiMainMultiSide';
import Drinks from '../../../components/Servings/Drinks';
import MultiSideOption from '../../../components/Servings/MultiSideOption';
import CustomOption from '../../../components/Servings/CustomOption';


const Serving = ({navigation, route}) => {
    useEffect(() => {
        //setSideChoice()
    }, []);

    const checkType = () => {
        const type = route.params.type
        console.log(type)
        switch (type) {
            case ('Kebab'):
                return <Kebab data={kebabAnnokset} />
            case ('Salaatti'):
                return <MultiMainMultiSide data={salaattiAnnokset} />
            case ('Rulla'):
                return <Kebab data={rullaAnnokset} />
            case ('Vöner'):
                return <MultiSideOption data={vonerAnnokset} />
            case ('Zone'):
                return <MultiMainOption data={zoneAnnokset} />
            case ('Falafel'):
                return <MultiSideOption data={falafelAnnokset} />
            case ('Kana'):
                return <Kebab data={kanaAnnokset} />
            case ('Sides'):
                return <CustomOption data={sides} />
            case ('Juoma'):
                return <Drinks data={juomat} />
        }
    }


  return (
        <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
            {checkType()}
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});


export default Serving;