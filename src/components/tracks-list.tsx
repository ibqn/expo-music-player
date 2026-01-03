import tracksData from "@/assets/data/library.json"
import { ItemSeparator } from "@/components/item-separator"
import { TrackListItem } from "@/components/track-list-item"
import type { ComponentProps } from "react"
import Animated from "react-native-reanimated"

type Track = {
  id: string
  title: string
  artist?: string
  image?: string
}

type TrackListProps = Partial<ComponentProps<typeof Animated.FlatList<Track>>>

export const TracksList = (props: TrackListProps) => {
  return (
    <Animated.FlatList
      data={tracksData as Track[]}
      ItemSeparatorComponent={() => <ItemSeparator />}
      renderItem={({ item: track }) => <TrackListItem track={track} />}
      keyExtractor={(item) => item.id}
      {...props}
    />
  )
}
