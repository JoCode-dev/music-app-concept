import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Music } from "@/constants/dummy";

import { getColors } from "react-native-image-colors";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";

interface MusicCardProps {
  item: Music;
  index: number;
  scrollX: SharedValue<number>;
}

const { width } = Dimensions.get("screen");
const _itemSize = width * 0.7; // Increased size for better visibility
const _spacing = 20;
const _itemTotalSize = _itemSize + _spacing;
const inputRange = [-1, 0, 1];
const outputRange = [0.9, 1, 0.9];

const MusicCard = ({ item, scrollX, index }: MusicCardProps) => {
  const { push } = useRouter();
  const [color, setColor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const stylez = useAnimatedStyle(() => {
    const position = (index * _itemTotalSize - scrollX.value) / _itemSize;

    return {
      transform: [
        {
          scale: interpolate(position, inputRange, outputRange, "clamp"),
        },
      ],
      opacity: interpolate(position, inputRange, [0.3, 1, 0.3], "clamp"),
    };
  });

  useEffect(() => {
    const url = item.image;

    getColors(url, {
      fallback: "#228B22",
      cache: true,
      key: url,
    }).then((colors) => {
      // @ts-ignore
      setColor(colors.detail);
    });
  }, []);

  return (
    <Pressable
      onPress={() => {
        push("/modal");
      }}
    >
      <Animated.View
        className="rounded-[2rem] items-center justify-center my-3 overflow-hidden"
        style={[
          {
            width: _itemSize,
            height: _itemSize,
            marginHorizontal: _spacing / 2,
            shadowColor: color || "#228B22",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 10,
          },
          stylez,
        ]}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          className="w-full h-full rounded-[2rem]"
        />
        <BlurView
          intensity={20}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 16,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <Text className="text-white font-medium tracking-tight font-lexend text-xl">
            {item.name}
          </Text>
          <Text className="text-white font-medium tracking-tight font-lexend leading-5">
            {item.artist}
          </Text>
        </BlurView>
      </Animated.View>
      <View className="absolute top-0 right-0 bg-[#070409]/20 h-16 w-16 items-center justify-center rounded-full overflow-hidden">
        <BlurView
          className="w-full h-full items-center justify-center"
          intensity={40}
        >
          <Image
            source={require("@/assets/icons/play-btn.png")}
            resizeMode="contain"
            className="h-10 w-10"
          />
        </BlurView>
      </View>
    </Pressable>
  );
};

export default MusicCard;
