import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    // <View style={{ flex: 1, backgroundColor: "white" }}>
    //   <Text>Tabs layout placeholder</Text>
    // </View>
  )
}
