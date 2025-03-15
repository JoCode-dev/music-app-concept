import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="w-full p-4 flex-row justify-between flex">
      <View className="items-center">
        <Text className="text-[#CDCDCD] font-lexend text-lg">
          Good Evening,
        </Text>
        <Text className="text-white font-lexend font-medium text-2xl leading-tight">
          JoCode 😎
        </Text>
      </View>
      <View className="flex-row items-center gap-4">
        <Image
          source={require("@/assets/icons/search.png")}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
        <Image
          source={require("@/assets/icons/notification.png")}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
      </View>
    </View>
  );
};

export default Header;
