import React from 'react';
import {View, Button} from 'react-native';
import {useLinkTo} from '@react-navigation/native';
const ProfileButton = () => {
  const linkTo = useLinkTo();
  const handleClick = () => {
    linkTo('/Profile');
  };
  return (
    <View>
      <Button onPress={() => handleClick()} title="Info" />
    </View>
  );
};

export default ProfileButton;
