import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Images } from '../../assets/index'
import {BottomSheetUnified} from '../../components/BottomSheet'


export const ProsScreen = ({navigation}: any) => {
  const translateY = useSharedValue(0);
  return (
      <GestureHandlerRootView>
        <View style={styles.container}>
              <Image
              source={Images.prosimage}
              style={styles.image}
              />
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.backborder}>
              <Image
                source={Images.crossoverlay}
                style={styles.cross}
              />
              </View>
              </TouchableOpacity>
        </View>
        <BottomSheetUnified screen="pro" translateY={translateY} />
        
      </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#070807'
  },
  image:{
    width: '60%',
    height: 220,
    position: 'absolute',
    marginTop: 40,
    marginHorizontal: 90, 
  },
  cross:{
    marginLeft: 5,
    fontSize: 20,
    fontWeight: '400',
    tintColor: 'white'
  },
  backborder:{
    // backgroundColor: 'grey',
    // borderWidth: 1,
    width: 25,
    marginLeft: 20,
    marginTop: 20,
    // borderRadius: 20,    
  }
})
