import React, { useState, useEffect } from 'react';
import { Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import getInfo from '../../utils/info/getInfo';


const Info = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const get = async () => {
      try {
        const temp = await getInfo()
        setData(temp)
      } catch (err) {
        console.log(err)
      }
    }
    //get()
  }, []);
  /*
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  const latLng = `${'60.19469188138729'},${'24.767440180777797'}`;
  //60.19479720430569, 24.767441521882276
  const label = 'Pizzataxim';
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`
  });
  */
 const maps = Platform.select({
    ios: `maps:0,0?q=${'Pizzataxim'}`,
    android: `geo:0,0?q=${'Pizzataxim'}`,
  })

  return (
      <SafeAreaView  style={{ flex: 1, backgroundColor: "#fefefe"}}>
        <ScrollView contentContainerStyle={{flexGrow:1}} >
            <View style={styles.container}>
              <View style={styles.topicContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Yhteystiedot</Text>
                </View>
                <View style={styles.imgContainer}>
                  <Image source={require('../../assets/bg_shop2.jpeg')} style={styles.img}/>
                </View>
                <View style={styles.callContainer}>
                  <TouchableOpacity style={styles.callItem} onPress={() => Linking.openURL(maps)}>
                    <Icon name="location-outline" size={22} color="lightcoral" />
                    <Text selectable={true} style={styles.callText}>Mankkaantie 2-4, 02180 Espoo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.callItem} onPress={() => Linking.openURL(`tel:${"09 455 4099"}`)}>
                    <Icon name="call-outline" size={22} color="black"/>
                    <Text style={styles.callText}>09 455 4099</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.callItem} onPress={() => Linking.openURL(`tel:${"050 455 4099"}`)}>
                    <Icon name="logo-whatsapp" size={22} color="limegreen" />
                    <Text style={styles.callText}>050 455 4099</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.callItem} onPress={() => Linking.openURL('https://pizzataxim.fi')}>
                    <Icon name="globe-outline" size={22} color="skyblue" />
                    <Text style={styles.callText}>www.pizzataxim.fi</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.topicContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Toimitusehdot</Text>
                </View>

                <View style={styles.smallTopicContainer}>
                  <Text style={styles.smallTitle}>Yleistietoa</Text>
                  <Text style={styles.text}>
                    Tilauksen toimitusaika määräytyy Pizzataximin ilmoittamien toimitusaikojen mukaan. Tarkista aukioloajat alempaa. Tilaukset viimeistään 1/2 tuntia ennen sulkemisaikaa. Noudettaessa odottamisaika on n. 10-25 min -kiirevaraus. Arvioitu toimitusaika n.30-60 min. -kiirevaraus. Alaikäiset saavat tilata tuotteita vain edunvalvojan suostumuksella. Ilmoitetut hinnat sisältävät arvonlisäveron. Pidätämme oikeuden muutoksiin.
                  </Text>
                </View>

                <View style={styles.smallTopicContainer}> 
                  <Text style={styles.smallTitle}>Kuljetusalueet</Text>
                  <Text style={styles.text}>
                    02100, 02120, 02130, 02140, 02150, 02180, 02200, 02210, 02230, 02250, 02600, 02610, 02620, 02630, 02700, 02710, 02750 
                  </Text>
                </View>

                <View style={styles.smallTopicContainer}> 
                  <Text style={styles.smallTitle}>Kuljetusmaksu</Text>
                  <Text style={styles.text}>
                  Kun tilaus on yli 17,00€, toimitus on ilmainen. Kun tilaus on alle 17,00€, kuljetuspalvelumaksu on 3,00€.
                  </Text>
                </View>

                <View style={styles.smallTopicContainer}>
                  <Text style={styles.smallTitle}>Tilausvahvistus</Text>
                  <Text style={styles.text}>
                  Vastaanotettuamme tilauksen lähetämme teille tilausvahvistuksen sähköpostilla (Gmail, Hotmail, Yahoo käyttäjä tarkista kaikki viestit ja roskakori) , joka on hyvä säästää siihen asti kunnes tilaus on saapunut. On ensiarvoisen tärkeää että ilmoitetut yhteystiedot ovat oikeita jotta vahvistukset tulevat perille.
                  </Text>
                </View>

                <View style={styles.smallTopicContainer}>
                  <Text style={styles.smallTitle}>Toimitus</Text>
                  <Text style={styles.text}>
                  Tilauksen toimitus tapahtuu kuljetuksella, poikkeuksena nouto. Mikäli tuotteen toimituksessa on ongelmia tai itse tuotteessa on vikaa, niin silloin tulee toimia kuten reklamaatio kohdassa ilmoitetaan.
                  </Text>
                </View>

                <View style={styles.smallTopicContainer}>
                  <Text style={styles.smallTitle}>Reklamaatio</Text>
                  <Text style={styles.text}>
                  Pizzataximin palvelun toimittajat sitoutuvat toimittamaan tilaukset ilmoitetussa ajassa ja sellaisina kuin ne on tilattu. Jos toimituksessa tai tuotteessa on kuitenkin vikaa niin pyydämme ottamaan yhteyttä asiakaspalveluumme. Tilausvahvistuksessa ilmoitetaan myös tilauksen valmistavan ja toimittavan ravintolan tiedot ja toimitusaikaan sekä tuotteeseen liittyvissä asioissa voi myös olla yhteydessä suoraan toimittavaan ravintolaan nopeuttaakseen tiedon kulkua.
                  </Text>
                </View>

              </View>
              <View style={styles.topicContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Aukioloajat</Text>
                </View>

                <View style={styles.smallTopicContainer}>
                  <Text style={styles.smallTitle}>Maanantai - Torstai</Text>
                  <View style={styles.timeSheets}>
                  <View style={styles.timeItemLeft}>
                    <Text>Aukioloajat</Text>
                    <Text style={styles.text}>09:45 - 22:00</Text>
                  </View>
                  <View style={styles.timeItemMid}>
                    <Text>Lounas</Text>
                    <Text style={styles.text}>10:00 - 14:00</Text>
                  </View>
                  <View style={styles.timeItemRight}>
                    <Text>Kuljetuspalvelu</Text>
                    <Text style={styles.text}>10:00 - 21:30</Text>
                  </View>
                  </View>
                </View>

                <View style={styles.smallTopicContainer}>
                  <Text style={styles.smallTitle}>Perjantai</Text>
                  <View style={styles.timeSheets}>
                  <View style={styles.timeItemLeft}>
                    <Text>Aukioloajat</Text>
                    <Text style={styles.text}>09:45 - 23:00</Text>
                  </View>
                  <View style={styles.timeItemMid}>
                    <Text>Lounas</Text>
                    <Text style={styles.text}>10:00 - 14:00</Text>
                  </View>
                  <View style={styles.timeItemRight}>
                    <Text>Kuljetuspalvelu</Text>
                    <Text style={styles.text}>10:00 - 22:30</Text>
                  </View>
                  </View>
                </View>

                <View style={styles.smallTopicContainer}>
                  <Text style={styles.smallTitle}>Lauantai</Text>
                  <View style={styles.timeSheets}>
                  <View style={styles.timeItemLeft}>
                    <Text>Aukioloajat</Text>
                    <Text style={styles.text}>10:30 - 23:00</Text>
                  </View>
                  <View style={styles.timeItemRight}>
                    <Text>Kuljetuspalvelu</Text>
                    <Text style={styles.text}>11:00 - 22:30</Text>
                  </View>
                  </View>
                </View>

                <View style={styles.smallTopicContainer}>
                  <Text style={styles.smallTitle}>Sunnuntai</Text>
                  <View style={styles.timeSheets}>
                  <View style={styles.timeItemLeft}>  
                    <Text>Aukioloajat</Text>
                    <Text style={styles.text}>10:30 - 22:00</Text>
                  </View>
                  <View style={styles.timeItemRight}>
                    <Text>Kuljetuspalvelu</Text>
                    <Text style={styles.text}>11:00 - 21:30</Text>
                  </View>
                  </View>
                </View>

              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    alignSelf: "center",
    marginHorizontal: "5%",
    marginVertical: "5%",
    width: "90%"
  },
  topicContainer: {
    marginVertical: "5%",
    padding:5,
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
  titleContainer: {
    borderBottomColor: "#cdcdcd",
    borderBottomWidth: 2
  },
  title: {
    fontFamily: "Verdana",
    fontSize: 24,
  },
  imgContainer: {
    marginTop: "2%",
    width: "100%",
    height: 250,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  callContainer: {
    alignSelf:"center",
    width: "100%",
  },
  callItem: {
    marginTop: "2%",
    flexDirection:"row",
    alignSelf:"flex-start",
    alignItems: "center",
    justifyContent: "center"
  },
  callText: {
    fontFamily: "Verdana",
    fontSize: 20,
    marginLeft: 5
  },
  smallTopicContainer: {
    marginTop: "2%",
  },
  smallTitle: {
    fontSize: 18,
  },
  timeSheets: {
    flexDirection: "row",
    marginTop: "2%",
    justifyContent: "space-between",
    paddingBottom:2,
    borderBottomColor: "#cdcdcd",
    borderBottomWidth: 1,
  },
  timeItemLeft: {
    width: "33%",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  timeItemMid: {
    width: "33%",
    alignItems: "center",
    justifyContent: "center"
  },
  timeItemRight: {
    width: "33%",
    alignItems: "flex-end",
    justifyContent: "center"
  }
})



export default Info;