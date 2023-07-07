import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="view1"
        options={{
          headerShown: false,
          tabBarIcon: () => <Text>🍪</Text>,
        }}
      />
      <Tabs.Screen
        name="view2"
        options={{
          headerShown: false,
          tabBarIcon: () => <Text>🛒</Text>,
        }}
      />
    </Tabs>
  );
}