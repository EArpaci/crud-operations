import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import useAuth from '../../auth/useAuth';
import {
  View,
  Text,
  Button,
  Input,
  TouchableOpacity,
} from '../../components/Themed';
import { colors } from '../../constants/Colors';

export default function LoginScreen() {
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { logIn } = useAuth();

  const handleLogin = async () => {
    setLoading(true);

    if(email && password) {
      logIn('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
    }

    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text size={20} bold style={{ marginTop: 5 }} color={colors.solid}>
            CRUD OPERATIONS
          </Text>

          <TouchableOpacity
            style={{
              borderWidth: 1.5,
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              borderColor: colors.solid,
            }}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Input
              style={styles.input}
              value={email}
              onChangeText={setUserEmail}
              placeholder="Enter your e-mail address"
              autoCapitalize="none"
              label="E-mail Address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={setUserPassword}
              placeholder="Enter your password"
              autoCapitalize="none"
              label="Password"
            />
          </View>
          <Button
            onPress={() => handleLogin()}
            loading={loading}
            label="Login"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.solid,
    paddingVertical: 15,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  formContainer: {
    marginTop: 65,
  },
});
