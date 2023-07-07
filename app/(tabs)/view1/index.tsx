import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function View1 () {

  const [cookies, setCookies] = useState(0)

  useEffect(() => {
    async function getCookies() {
      var newCookies = await AsyncStorage.getItem('my-key')
      setCookies(parseFloat(newCookies))
    }
    
    const interval = setInterval(() => {
      getCookies()
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    const storeData = async () => {
      var valuestring = cookies + ""
      await AsyncStorage.setItem('my-key', valuestring);
      
    };
    storeData()
  }, [cookies])

  return (
    <View>
   <Stack.Screen options={{ title: "Farm" }} />
   <Text>Cookies: {cookies}</Text>
   <Button onPress={()=>setCookies(cookies+1)} title="click"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});