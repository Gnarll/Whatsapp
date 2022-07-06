import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';
import Footer from './Footer';
import { colors } from '../../constants';

const Layout = ({ children }) => {
  return (
    <LinearGradient
      colors={['#14493E', '#212121']}
      start={{ x: 1.1, y: 0.9 }}
      style={{
        backgroundColor: colors.BG,
        height: '100%',
        width: '100%',
        paddingTop: 45,
      }}
    >
      <Header />
      {children}
      <Footer />
    </LinearGradient>
  );
};

export default Layout;
