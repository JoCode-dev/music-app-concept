import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { Music } from "@/constants/dummy";
import { getColors } from "@/lib";

interface MusicCardProps {
  item: Music;
}

const MusicCard = ({ item }: MusicCardProps) => {
  useEffect(() => {
    const color = getColors(item.imgPath);
    console.log(color);
  }, []);

  return (
    <View className={` w-52 h-52 rounded-3xl  items-center justify-center`}>
      <Image
        source={item.image}
        resizeMode="cover"
        className="w-full h-full rounded-3xl"
      />
      <View className="absolute bottom-0 left-0 right-0 p-2">
        <Text className="text-white font-lexend text-lg">{item.name}</Text>
      </View>
    </View>
  );
};

export default MusicCard;
