import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const view1 = () => {
  
  const [cookies, setCookies] = useState(0)

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('my-key');
        if (value !== null) {
          setCookies(parseFloat(value));
        }
      } catch (e) {
        // error reading value
      }
    };

    const interval = setInterval(() => {
      getData()
    }, 2000);
    return () => clearInterval(interval);

  }, [])
  
  
  return (
    <View>
   <Stack.Screen options={{ title: "view2" }} />
   <Text>Cookies: {cookies}</Text>
    </View>  
  );
};

export default view1;

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