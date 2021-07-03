import React from 'react';
import { Image } from 'react-native';
import { Card,Text, Title } from 'react-native-paper';

const HeroCard = ({info}) =>{
    console.log(info);
    return(
        <Card>
            <Card.Title title={info.name}/>
            <Card.Content>
                <Card.Cover source={{uri:"https://picsum.photos/700"}} style={{height:350}} />
            </Card.Content>
        </Card>
    );
};

export default HeroCard;