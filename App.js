import React, { useEffect, useState } from 'react';
import { ImageBackgroundBase, StyleSheet, Text, View, ImageBackground  } from 'react-native';
import Formulario from './assets/Formulario';
import CardInfo from './assets/CardInfo';

export default function App() {
    let bgImage=require('./assets/background/clear2.jpg');

    const [ city, setCity ] = useState('');
    const [ weatherInfo, setweatherInfo ] = useState(null)
    const APIkey = 'a5f7c01020d596bc09838e38450e89ac';


    
  
    useEffect( () => {
         const getWheather = async () => {
            try
            {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&lang=es&units=metric`;
                const res = await fetch(url);
                const data = await res.json();

                setweatherInfo(data);
                console.log(data);
                console.log(city);
                
            }
            catch(error)
            {
                console.log(error);
            }
        }

        if(city !== '')
        {
            getWheather();
        }
    }, [city])

    return (
        
        <View style={styles.container}>
            <ImageBackground

             
            source={bgImage}
            style={{
            flex: 1
            }}>
                
                <View style={styles.containerInner}>
                    <Formulario city = { city } setCity = { setCity } />

                    {/* //verificacion de la informacion  */}
                    
                    { city.trim() !== '' && weatherInfo !== null ? (
                        <CardInfo weatherInfo = { weatherInfo } />
                        ):(null) }


                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop:0,
      
    },
    containerInner: {
        marginTop:0,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0,0, 0.35)'
    },
});
