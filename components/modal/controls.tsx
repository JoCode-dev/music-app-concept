import { StepBack, StepForward } from "lucide-react-native";
import { View, TouchableOpacity, Image } from "react-native";

export default function Controls() {
  return (
    <View className="flex-row items-center justify-between w-full mt-8 px-4">
      <TouchableOpacity>
        <StepBack size={24} color="white" />
      </TouchableOpacity>

      <View className="flex-row items-center gap-8">
        <TouchableOpacity>
          <Image
            source={require("@/assets/icons/SkipForward.png")}
            className="w-8 h-8"
            style={{ tintColor: "white" }}
          />
        </TouchableOpacity>

        <TouchableOpacity className="w-16 h-16 bg-white rounded-full items-center justify-center">
          <Image
            source={require("@/assets/icons/play.png")}
            className="w-8 h-8"
            style={{ tintColor: "#131313" }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("@/assets/icons/SkipForward.png")}
            className="w-8 h-8"
            style={{ tintColor: "white" }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <StepForward size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
