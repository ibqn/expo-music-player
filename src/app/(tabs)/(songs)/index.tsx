import { TracksList } from "@/components/tracks-list"
import { defaultStyles } from "@/styles"
import { View } from "react-native"

export default function SongsScreen() {
  return (
    <View style={defaultStyles.container}>
      <TracksList />
    </View>
  )
}
