import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const locationsList = ['Aguilares', 'Apopa', 'Ayutuxtepeque', 'Ciudad Delgado', 'Cuscatancingo', 'El Paisnal', 'Guazapa', 'Ilopango', 'Mejicanos', 'Nejapa', 'Panchimalco', 'Rosario de Mora', 'San Marcos', 'San Martín', 'San Salvador', 'Santiago Texacuangos', 'Santo Tomás', 'Soyapango', 'Tonacatepeque']


const Formulario = ({ city, setCity }) => {
    return(
        <View style = { styles.containerForm }>
            <Text style = { styles.titulo }>Clima Actual</Text>
            <Picker 
                style = { styles.pickerTop }
                selectedValue = { city }
                onValueChange = { ciudad => setCity(ciudad) }
            >
                <Picker.Item style = { styles.itemcity } label="Selección" value="" />
                { locationsList.map( (city, index) => ( <Picker.Item key={ index } style= { styles.itemcity }  label={ city } value={ city } />)) }
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        width: '100%',
        marginVertical: 20,
        alignItems: 'center'
    },
    titulo: {
        width: '100%',
        fontSize: 26,
        marginVertical: 15,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
    },
    pickerTop: {
        borderRadius: 5,
        width: '85%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        borderBottomWidth: 5,
    },
    itemcity: {
        fontFamily: 'Lato-Italic',
        fontSize: 18
    }
})

export default Formulario;