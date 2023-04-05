import React from 'react';
import { View } from 'react-native';
import CentreInteret from './CentreInteret';

const ListeCheckbox = ({ interet, selectedInterests, onChange }) => {
    return (
        <View>
            {interet.map((interest) => (
                <CentreInteret
                    key={interest}
                    interest={interest}
                    checked={selectedInterests.includes(interest)}
                    onChange={onChange}
                />
            ))}
        </View>
    );
};

export default ListeCheckbox;
