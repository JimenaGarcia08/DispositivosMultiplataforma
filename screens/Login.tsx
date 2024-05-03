import React, { useState } from 'react';
import { GluestackUIProvider, Box, Text, ScrollView, ButtonText, Image, Alert } from '@gluestack-ui/themed';
import { Input, InputField, Button, FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import Logo from '../assets/Icons/Logo.png';

const Login = ({ navigation }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const regex_email = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)[.][a-zA-Z]{2,5}/;
  const digit = /[0-9]/;
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const nonAlphanumeric = /[^0-9A-Za-z]/;

  const isStrongPassword = (password) => [digit, upperCase, lowerCase, nonAlphanumeric].every(re => re.test(password)) && password.length >= 8 && password.length <= 32;

  const validate = () => {
    setErrors({});
    console.log('email', formData.email);
    console.log('password', formData.password);

    if (!regex_email.test(formData.email)) {
      setErrors({ ...errors, email: "El correo electrónico no es válido" });
      return false;
    }

    if (formData.email === undefined) {
      setErrors({ ...errors, email: "El correo electrónico es requerido" });
      return false;
    } else if (formData.email.length < 3) {
      setErrors({ ...errors, email: "El correo electrónico es demasiado corto" });
      return false;
    }

    if (!isStrongPassword(formData.password)) {
      setErrors({ ...errors, password: "La contraseña no es válida" });
      return false;
    }

    return true;
  };

  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  const onSubmit = () => {
    validate() ? console.log('Validación exitosa') : console.log('Validación fallida', errors);
  };

  const logoStyle = {
    width: 250,
    height: 250,
    aspectRatio: 1,
  };

  return (
    <GluestackUIProvider config={config}>
    <Box flex={1} backgroundColor="#fff" padding={20}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <Box alignItems="center" marginBottom={40}>
        <Image source={require('../assets/Icons/Logo.png')} style={logoStyle} resizeMode="contain" alt="Logo de la aplicación" />
        </Box>
        <Box flexDirection="column" alignItems="center">
          <FormControl isInvalid={errors.email} size="lg" marginBottom={20} style={{ width: '100%' }}>
            <FormControlLabel>
              <FormControlLabelText color="#000">Correo electrónico</FormControlLabelText>
            </FormControlLabel>
            <Input isFocused={false} $focus-borderColor="#6c63ff" placeholder="Correo electrónico" onChangeText={(value) => setFormData({ ...formData, email: value })} />
            <FormControlError>
              <FormControlErrorText>{errors.email}</FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={errors.password} size="lg" marginBottom={20} style={{ width: '100%' }}>
            <FormControlLabel>
              <FormControlLabelText color="#000">Contraseña</FormControlLabelText>
            </FormControlLabel>
            <Input isFocused={false} $focus-borderColor="#6c63ff" placeholder="Contraseña" onChangeText={(value) => setFormData({ ...formData, password: value })} />
            <FormControlError>
              <FormControlErrorText>{errors.password}</FormControlErrorText>
            </FormControlError>
          </FormControl>
          <Button action="primary" variant="solid" size="md" onPress={handleSignIn} marginBottom={20}>
            <ButtonText>Iniciar sesión</ButtonText>
          </Button>
          <Text color="#6c63ff" onPress={() => console.log("Recuperar contraseña")}>Recuperar contraseña</Text>
        </Box>
      </ScrollView>
    </Box>
  </GluestackUIProvider>
  );
}

export default Login;