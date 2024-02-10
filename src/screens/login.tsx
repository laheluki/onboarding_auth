import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

function renderHeader() {
  return (
    <View style={{ marginTop: Dimensions.get('window').height / 10 }}>
      <Text
        style={{ fontFamily: 'PoppinsBold', textAlign: 'center', fontSize: 30, color: '#1F41BB' }}>
        Login Here
      </Text>
      <Text
        style={{
          fontFamily: 'PoppinsSemiBold',
          fontSize: 20,
          textAlign: 'center',
        }}>
        Welcome back you've been missed!
      </Text>
    </View>
  );
}

function renderForm() {
  const [active1, setIstActive1] = useState(false);
  const [active2, setIstActive2] = useState(false);
  return (
    <View style={{ marginTop: 30 }}>
      <TextInput
        placeholder="Email"
        onFocus={() => setIstActive1(true)}
        onBlur={() => setIstActive1(false)}
        style={{
          marginVertical: 10,
          borderWidth: active1 ? 2 : 0,
          height: 50,
          fontFamily: 'PoppinsMedium',
          borderRadius: 7,
          paddingHorizontal: 15,
          backgroundColor: '#e2e8f0',
          borderColor: active1 ? '#1F41BB' : '#626262',
        }}
        placeholderTextColor={'#626262'}
      />
      <TextInput
        placeholder="Password"
        onFocus={() => setIstActive2(true)}
        onBlur={() => setIstActive2(false)}
        style={{
          marginVertical: 10,
          fontFamily: 'PoppinsMedium',
          borderWidth: active2 ? 2 : 0,
          height: 50,
          borderRadius: 7,
          paddingHorizontal: 15,
          backgroundColor: '#e2e8f0',
          borderColor: active2 ? '#1F41BB' : '#626262',
        }}
        placeholderTextColor={'#626262'}
        secureTextEntry
      />
    </View>
  );
}

function renderForgotPassword() {
  return (
    <TouchableOpacity style={{ marginVertical: 20, alignItems: 'flex-end' }}>
      <Text style={{ color: '#1F41BB', fontFamily: 'PoppinsSemiBold', fontSize: 14 }}>
        Forgot Password?
      </Text>
    </TouchableOpacity>
  );
}

function renderButton({ navigation }: any) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#1F41BB',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          borderRadius: 10,
        }}>
        <Text style={{ color: '#ffffff', fontFamily: 'PoppinsSemiBold', fontSize: 20 }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: '#494949', fontFamily: 'PoppinsSemiBold', fontSize: 14 }}>
          Create new account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function renderOr() {
  return (
    <Text
      style={{
        marginTop: 40,
        fontFamily: 'PoppinsSemiBold',
        fontSize: 14,
        color: '#1F41BB',
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
      Or continue with
    </Text>
  );
}

function renderFooter() {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightgray',
          paddingHorizontal: 10,
          paddingVertical: 7,
          borderRadius: 10,
        }}>
        <FontAwesome name="google" size={24} color={'#000000'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightgray',
          paddingHorizontal: 13,
          paddingVertical: 7,
          borderRadius: 10,
        }}>
        <FontAwesome name="facebook" size={25} color={'#000000'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightgray',
          paddingHorizontal: 13,
          paddingVertical: 7,
          borderRadius: 10,
        }}>
        <FontAwesome name="apple" size={24} color={'#000000'} />
      </TouchableOpacity>
    </View>
  );
}

const Login = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderForm()}
        {renderForgotPassword()}
        {renderButton({ navigation })}
        {renderOr()}
        {renderFooter()}
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
