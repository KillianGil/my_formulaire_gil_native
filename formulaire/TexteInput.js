//Code creer et modifier par : Killian Gil
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import styles from './styles';

const TexteInput = ({ value, onChangeText, placeholder }) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
        />
    );
};

export default TexteInput;
