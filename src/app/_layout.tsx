import { SearchProvider } from "@/contexts/search-context"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

// export const unstable_settings = {
//   anchor: "(tabs)",
// }

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SearchProvider>
        <RootNavigation />
        <StatusBar style="light" />
      </SearchProvider>
    </SafeAreaProvider>
  )
}

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
