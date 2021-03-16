import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { kebabAnnokset, kanaAnnokset, vonerAnnokset, falafelAnnokset, rullaAnnokset, zoneAnnokset, salaattiAnnokset, juomat, sides } from '../../../data/data';
import Kebab from '../../../components/Servings/Kebab';
import MultiMainOption from '../../../components/Servings/MultiMainOption';
import MultiMainMultiSide from '../../../components/Servings/MultiMainMultiSide';
import Drinks from '../../../components/Servings/Drinks';
import MultiSideOption from '../../../components/Servings/MultiSideOption';
import CustomOption from '../../../components/Servings/CustomOption';


const Serving = ({navigation, route}) => {
    useEffect(() => {
    }, []);

    const checkType = (navigation) => {
        const type = route.params.type
        switch (type) {
            case ('Kebab'):
                return <Kebab navigation={navigation} data={kebabAnnokset} />
            case ('Salaatti'):
                return <MultiMainMultiSide navigation={navigation} data={salaattiAnnokset} />
            case ('Rulla'):
                return <Kebab navigation={navigation} data={rullaAnnokset} checkbox={false}/>
            case ('Vöner'):
                return <MultiSideOption navigation={navigation} data={vonerAnnokset} />
            case ('Zone'):
                return <MultiMainOption navigation={navigation} data={zoneAnnokset} />
            case ('Falafel'):
                return <MultiSideOption navigation={navigation} data={falafelAnnokset} />
            case ('Kana'):
                return <Kebab navigation={navigation} data={kanaAnnokset} />
            case ('Sides'):
                return <CustomOption navigation={navigation} data={sides} />
            case ('Juoma'):
                return <Drinks navigation={navigation} data={juomat} />
        }
    }


  return (
        <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
            {checkType(navigation)}
        </SafeAreaView>
  );
}

export default Serving;