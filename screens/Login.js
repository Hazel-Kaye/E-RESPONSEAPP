import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function LoginScreen({ navigation }) {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Icon name="arrow-back-ios" size={22} color="#000" />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Login to continue using the app</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#999"
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={secureText}
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setSecureText(!secureText)}
        >
          <Icon
            name={secureText ? 'visibility-off' : 'visibility'}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Social Login Icons */}
      <View style={styles.socialLogin}>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={32} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="google" size={30} color="#DB4437" />
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.registerPrompt}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E4E2',
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  back: {
    marginBottom: 10,
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
    marginVertical: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#E3DADA',
    borderRadius: 10,
    padding: 12,
    paddingRight: 40,
    fontSize: 14,
    color: '#000',
  },
  passwordWrapper: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  forgot: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#4C7CFF',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#aaa',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
    fontWeight: 'bold',
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  registerPrompt: {
    textAlign: 'center',
    color: '#333',
    fontSize: 13,
  },
  registerLink: {
    color: '#1877F2',
    fontWeight: 'bold',
  },
});
