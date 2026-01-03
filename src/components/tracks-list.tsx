import tracksData from "@/assets/data/library.json"
import { ItemSeparator } from "@/components/item-separator"
import { TrackListItem } from "@/components/track-list-item"
import { FlatList, FlatListProps } from "react-native"

type Track = {
  id: string
  title: string
  artist?: string
  image?: string
}

type TrackListProps = Partial<FlatListProps<Track>>

export const TracksList = (props: TrackListProps) => {
  return (
    <FlatList
      data={tracksData as Track[]}
      ItemSeparatorComponent={() => <ItemSeparator />}
      renderItem={({ item: track }) => <TrackListItem track={track} />}
      keyExtractor={(item) => item.id}
      {...props}
    />
  )
}
