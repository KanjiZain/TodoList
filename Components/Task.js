import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFFF',
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,

    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width:24,
        height:24,
        backgroundColor: 'red',
        opacity: 0.6,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth: '80%',
        fontWeight: 'bold',
    },
    circular:{
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor:'#DF2828',
        marginTop: 5
    },
})

export default Task;