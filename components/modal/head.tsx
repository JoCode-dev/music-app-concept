import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { View, TouchableOpacity } from "react-native";

export default function Head() {
  const router = useRouter();

  return (
    <View
      style={{ paddingTop: 12 }}
      className="w-full px-4 flex-row items-center"
    >
      <TouchableOpacity
        onPress={() => router.back()}
        className="w-10 h-10 items-center justify-center"
      >
        <ChevronLeft size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
