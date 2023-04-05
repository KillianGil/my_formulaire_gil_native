import React from 'react';
import { View, Text, CheckBox } from 'react-native';

const CentreInteret = ({ interest, checked, onChange }) => {
    return (
        <View>
            <CheckBox value={checked} onValueChange={onChange} />
            <Text>{interest}</Text>
        </View>
    );
};

export default CentreInteret;
