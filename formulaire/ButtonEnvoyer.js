//Code creer et modifier par : Killian Gil
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const ButtonEnvoyer = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.submitButtonContainer}>
            <Text style={styles.submitButtonText}>{children}</Text>
        </TouchableOpacity>
    );
};

export default ButtonEnvoyer;

