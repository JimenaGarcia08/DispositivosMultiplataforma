import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { GluestackUIProvider, Box, Text, ScrollView, ButtonText, Image, HStack, VStack, FlatList } from '@gluestack-ui/themed';
import { Avatar, AvatarImage, Heading } from '@gluestack-ui/themed';
import { Input, InputField, Button, FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import Logo from '../assets/Icons/Logo';
import { config } from "@gluestack-ui/config";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';


type Json_placeholder = {
  id: string;
  title: string;
  body: string;
  userid: string;
};

const Home = () => {
  const [data, setData] = useState<Json_placeholder[]>([]);

  const getJsonPlaceholder = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      setData(json);
      console.log(json);
  }

  useEffect(() => {
      getJsonPlaceholder();
  }, []);

  const Drawer = createDrawerNavigator();

  const MyDrawer = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    );
  }

  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Nuevo
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50" }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <VStack space={[2, 3]} justifyContent="space-between">
              <Avatar size="48px" source={{ uri: item.avatarUrl }} />
              <VStack>
                <Text _dark={{ color: "warmGray.50" }} color="coolGray.800" bold>
                  {item.title}
                </Text>
                <Text color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                  {item.body}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                {item.userid}
              </Text>
            </VStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
      <MyDrawer />
    </Box>
  );
}

export default Home;
