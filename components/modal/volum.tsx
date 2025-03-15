import { Volume1Icon, VolumeOffIcon } from "lucide-react-native";
import { View, TouchableOpacity } from "react-native";

export default function Volum() {
  return (
    <View className="w-full mt-8 flex-row items-center justify-between px-4">
      <TouchableOpacity>
        <Volume1Icon size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <VolumeOffIcon size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
