import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { config } from "@gluestack-ui/config";

const PerfilUsuario = ({ nombre, email, imagen }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
  },
});

export default Profile;
