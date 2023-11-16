import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const backgroundImageUrl = 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?w=740&t=st=1700161602~exp=1700162202~hmac=2d1eb07ca85e535314201279bd7e57f95323db531c29c3714c4c7d9681b40b81'; // Replace with your image URL

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenWrapper;