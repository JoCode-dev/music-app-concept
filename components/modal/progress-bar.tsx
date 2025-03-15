import { Text, View } from "react-native";

export default function ProgressBar() {
  return (
    <View className="w-full mt-8">
      <View className="h-1 bg-gray-800 rounded-full w-full">
        <View className="h-1 bg-white rounded-full" style={{ width: "35%" }} />
      </View>
      <View className="flex-row justify-between mt-2">
        <Text className="text-gray-400">1:35</Text>
        <Text className="text-gray-400">-2:32</Text>
      </View>
    </View>
  );
}
