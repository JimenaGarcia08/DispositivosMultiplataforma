import React, { useState } from 'react';
import { GluestackUIProvider, Box, Text, ScrollView, ButtonText, Image } from '@gluestack-ui/themed';
import { Input, InputField, Button, FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import Logo from '../assets/Icons/Logo';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';

export default function Recovery() {
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

    if (formData.password === undefined || formData.password.length < 6) {
      setErrors({ ...errors, password: "La contraseña debe tener al menos 6 caracteres" });
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Validación exitosa') : console.log('Validación fallida', errors);
  };

  return (
<GluestackUIProvider config={config}>
  <Box flex={1} backgroundColor="#fff" padding={20}>
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <Box alignItems="center">
      <Image source={Logo} style={{ width: '22', height: '22', aspectRatio: 1 }} resizeMode="contain" alt="Logo de la aplicación" />
        <Text fontSize={24} fontWeight="bold" marginBottom={20}>Recuperar contraseña</Text>
      </Box>
      <FormControl isInvalid={errors.password} size="lg" marginBottom={20}>
        <FormControlLabel>
          <FormControlLabelText color="#000">Nueva contraseña</FormControlLabelText>
        </FormControlLabel>
        <Input isFocused={false} $focus-borderColor="#6c63ff" placeholder="Nueva contraseña" onChangeText={(value) => setFormData({ ...formData, email: value })} />
        <FormControlHelper>
          <FormControlHelperText>Debe tener al menos 6 caracteres.</FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorText>{errors.password}</FormControlErrorText>
        </FormControlError>
      </FormControl>
      <FormControl isInvalid={errors.password} size="lg" marginBottom={20}>
        <FormControlLabel>
          <FormControlLabelText color="#000">Confirmar contraseña</FormControlLabelText>
        </FormControlLabel>
        <Input isFocused={false} $focus-borderColor="#6c63ff" placeholder="Contraseña" onChangeText={(value) => setFormData({ ...formData, password: value })} />
        <FormControlHelper>
          <FormControlHelperText>Debe tener al menos 6 caracteres.</FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorText>{errors.password}</FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Box flexDirection="column" alignItems="center">
        <Button action="primary" variant="solid" size="md" onPress={onSubmit} marginBottom={20}>
          <ButtonText>Cambiar</ButtonText>
        </Button>
        <Button action="secondary" variant="solid" size="md" onPress={onSubmit} marginBottom={20}>
          <ButtonText>Cancelar</ButtonText>
        </Button>
      </Box>
    </ScrollView>
  </Box>
</GluestackUIProvider>
  );
}