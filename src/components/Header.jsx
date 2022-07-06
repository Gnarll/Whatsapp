import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity, View, Linking } from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
        <Image
          source={require('../images/whatsapp_logo.png')}
          style={{
            width: 160,
            height: 53,
          }}
        />
      </TouchableOpacity>
      <AntDesign name="search1" size={30} color="#fff" />
    </View>
  );
};

export default Header;
