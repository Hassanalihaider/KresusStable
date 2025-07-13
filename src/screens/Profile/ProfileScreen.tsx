import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ProfileCard from '../../components/ProfileCards';
import { Images } from '../../assets';

export const ProfileScreen = () => {
  const cards = [
    {
      icon: Images.solanalogo,
      title: 'Solana Wallet Address',
      address: 'dDCQNn...c7c8',
      background: Images.solanabg,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={Images.backarrow} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image source={Images.profileicon} style={styles.avatar} />
        <Text style={styles.name}>Nate Morey</Text>
        <Text style={styles.username}>natemorey802.kresus</Text>
        <TouchableOpacity>
          <Text style={styles.upgrade}>Upgrade ID {'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cards}>
      {cards.map((card, index) => (
        <ProfileCard key={index} {...card}  />
      ))}
      </View>
      <Text style={styles.footer}>Supported Networks</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 15,
    height: 15,
  },
  editText: {
    color: '#fff',
    fontSize: 18,
  },
  profileSection: {
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  name: {
    color: 'white',
    fontSize: 18,
    marginTop: 12,
  },
  username: {
    color: '#ADD2FD',
    fontSize: 15,
    marginTop: 4,
  },
  upgrade: {
    color: '#CEB55A',
    fontSize: 14,
    marginTop: 4,
  },
  cards:{
    marginTop: 80,
  },
  footer: {
    color: '#fff',
    fontSize: 16,
    marginTop: 40,
  },
});

export default ProfileScreen;
