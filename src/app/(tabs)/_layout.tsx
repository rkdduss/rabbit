import { Tabs } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#16171A',
          borderColor: '#929BAD'
        }
      }}>
      <Tabs.Screen name="profile"/>
      <Tabs.Screen name="lecture"/>
      <Tabs.Screen name="explore"/>
      <Tabs.Screen name="library"/>
      <Tabs.Screen name="reelList"/>
    </Tabs>
  );
}