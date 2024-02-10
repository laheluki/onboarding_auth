import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

function renderHero() {
  return (
    <Image
      source={require('../../assets/image/welcome_image.png')}
      style={{ width: Dimensions.get('window').width - 50 }}
    />
  );
}

function renderContent() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: '#1F41BB',
          fontFamily: 'PoppinsSemiBold',
          fontSize: 35,
          textAlign: 'center',
        }}>
        Discover Your Dream Job Here
      </Text>
      <Text
        style={{
          color: '#000000',
          fontFamily: 'PoppinsRegular',
          fontSize: 14,
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 40,
        }}>
        Explore all the existing job roles based on your interest and study major
      </Text>
    </View>
  );
}

function renderFooter({ navigation }: any) {
  return (
    <View style={{ flexDirection: 'row', gap: 30, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          alignItems: 'center',
          paddingHorizontal: 40,
          backgroundColor: '#1F41BB',
          paddingVertical: 7,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
          borderRadius: 10,
        }}>
        <Text style={{ color: '#FFFFFF', fontFamily: 'PoppinsSemiBold', fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: '#0a0a0a', fontWeight: '700', fontSize: 16 }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const Onboarding = ({ navigation }: any) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        padding: 20,
      }}>
      {renderHero()}
      {renderContent()}
      {renderFooter({ navigation })}
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
