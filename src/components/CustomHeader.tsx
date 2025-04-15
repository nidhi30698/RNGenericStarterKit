import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons"
type CustomHeaderProps = {
  title: string;
  back?:boolean
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, back }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
        {back && <TouchableOpacity onPress={handleBackPress}>
            <Icon name={'arrow-back-ios'} color={'#000000'}  />
        </TouchableOpacity>}
        <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#ffffff', // Header background color
    paddingHorizontal: 15,
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default CustomHeader;
