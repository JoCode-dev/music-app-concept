import Categories from "@/components/Categories";
import Header from "@/components/Header";
import MusicCard from "@/components/MusicCard";
import { categories, musics } from "@/constants/dummy";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const paddingTop = useSafeAreaInsets().top;

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].name
  );

  return (
    <View className="flex-1 bg-[#131313] items-center" style={{ paddingTop }}>
      {/* Header */}
      <Header />

      {/* Categories */}
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Musics by category */}
      <View className="w-full border border-white p-2">
        <FlatList
          horizontal
          renderItem={({ item }) => <MusicCard item={item} />}
          contentContainerClassName="gap-4"
          data={musics}
        />
      </View>
      <Text className="text-white font-lexend text-lg">{selectedCategory}</Text>
    </View>
  );
}
