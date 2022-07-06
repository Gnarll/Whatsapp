import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants';

const Footer = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 80,
        backgroundColor: colors.DARK,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 20,
        borderRadius: 30,
        borderStyle: 'solid',
        borderColor: '#383838',
        borderWidth: 1,
      }}
    >
      <Ionicons name="home-outline" size={30} color={colors.GRAY} />
      <Feather name="phone" size={30} color={colors.GRAY} />
      <AntDesign name="pluscircleo" size={40} color={colors.GRAY} />
      <Entypo name="camera" size={30} color={colors.GRAY} />
      <MaterialIcons name="account-circle" size={30} color={colors.GRAY} />
    </View>
  );
};

export default Footer;
