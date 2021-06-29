import React from 'react';
import { Image } from 'react-native';
import { Card,Text } from 'react-native-paper';

const HeroCard = ({name}) =>{
    return(
            <Text>{name}</Text>
    );
};

export default HeroCard;