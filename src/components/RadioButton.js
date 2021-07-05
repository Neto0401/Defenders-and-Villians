import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const RButton = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style ={{width:50}}>
        <Text>First</Text>
        <RadioButton value="first" />
      </View>
      <View style ={{width:50}}>
        <Text>Second</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
  );
};

export default RButton;