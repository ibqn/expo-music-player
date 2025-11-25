import tracksData from "@/assets/data/library.json"
import { ItemSeparator } from "@/components/item-separator"
import { TrackListItem } from "@/components/track-list-item"
import { FlatList, FlatListProps } from "react-native"

type TrackListProps = Partial<FlatListProps<unknown>>

export const TracksList = (props: TrackListProps) => {
  return (
    <FlatList
      data={tracksData}
      ItemSeparatorComponent={() => <ItemSeparator />}
      renderItem={({ item: track }) => <TrackListItem track={track} />}
      keyExtractor={(item) => item.id}
      {...props}
    />
  )
}
