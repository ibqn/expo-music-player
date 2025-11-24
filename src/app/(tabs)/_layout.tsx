import { colors, fontSizes } from "@/constants/tokens"
import { Tabs } from "expo-router"

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSizes.xs,
          fontWeight: 500,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="playlists" />
      <Tabs.Screen name="(songs)" />
      <Tabs.Screen name="artists" />
    </Tabs>
  )
}
