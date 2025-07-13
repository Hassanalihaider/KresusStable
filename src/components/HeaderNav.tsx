import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Images } from '../assets';
import styles from '../styles/homestyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavigatorParamList } from '../navigators/routeNames'


type NavigationProp = NativeStackNavigationProp<AppNavigatorParamList>;

export const HeaderNav: React.FC = () => {
 const navigation = useNavigation<NavigationProp>();  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        <Image source={Images.profileicon} style={styles.profileIcon} />
        <Text style={styles.profileName}>Nate Diggity</Text>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} >
          <Image source={Images.scanner} style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.secure} style={[styles.headerIcon, { marginLeft: 20 }]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
