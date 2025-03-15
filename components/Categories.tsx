import { View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { categories } from "@/constants/dummy";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  return (
    <View className="w-full p-4 flex-row justify-between">
      {categories?.map((category) => {
        const isSelected = selectedCategory === category.name;

        const animatedStyle = useAnimatedStyle(() => {
          return {
            fontSize: withSpring(isSelected ? 24 : 18),
            fontWeight: isSelected ? "600" : "300",
            color: isSelected ? "#FFFFFF" : "#CDCDCD",
          };
        });

        return (
          <View key={category.id} className="flex items-center gap-2">
            <TouchableOpacity
              onPress={() => setSelectedCategory(category.name)}
              className="flex items-center gap-2 py-3"
            >
              <Animated.Text className="font-lexend" style={animatedStyle}>
                {category.name}
              </Animated.Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Categories;
