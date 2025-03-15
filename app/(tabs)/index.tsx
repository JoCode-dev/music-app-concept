import Categories from "@/components/Categories";
import Header from "@/components/Header";
import MusicCard from "@/components/MusicCard";
import { categories, musics } from "@/constants/dummy";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");
const _itemSize = width * 0.7;
const _spacing = 20;
const _itemTotalSize = _itemSize + _spacing;

export default function HomeScreen() {
  const paddingTop = useSafeAreaInsets().top;
  const paddingBottom = useSafeAreaInsets().bottom;
  const tabBarHeight = useBottomTabBarHeight();
  const scrollX1 = useSharedValue(0);
  const scrollX2 = useSharedValue(0);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].name
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX1.value = contentOffset.x;
    },
  });

  const onScroll2 = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX2.value = contentOffset.x;
    },
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-[#131313]"
    >
      <View
        className="flex-1 bg-[#131313] items-center"
        style={{ paddingTop, paddingBottom: tabBarHeight }}
      >
        {/* Header */}
        <Header />

        {/* Categories */}
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Musics by category */}
        <View className="w-full px-4">
          <Animated.FlatList
            horizontal
            data={musics.filter((music) =>
              music.category.includes(selectedCategory)
            )}
            renderItem={({ item, index }) => (
              <MusicCard item={item} index={index} scrollX={scrollX1} />
            )}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={onScroll}
            snapToInterval={_itemTotalSize}
            decelerationRate="fast"
            contentContainerStyle={{}}
          />
        </View>

        {/* New Releases */}
        <View className="w-full px-4 my-1">
          <Text className="text-white text-2xl font-bold">New Releases</Text>
          <Animated.FlatList
            horizontal
            data={new Array(10).fill(musics).flat()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <MusicCard item={item} index={index} scrollX={scrollX2} />
            )}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={onScroll2}
            snapToInterval={_itemTotalSize}
            decelerationRate="fast"
            contentContainerStyle={{}}
          />
        </View>
      </View>
    </ScrollView>
  );
}
