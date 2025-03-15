import AlbumArt from "@/components/modal/album-art";
import Controls from "@/components/modal/controls";
import Head from "@/components/modal/head";
import ProgressBar from "@/components/modal/progress-bar";
import TrackInfo from "@/components/modal/track-info";
import Volum from "@/components/modal/volum";
import { useRouter } from "expo-router";
import {
  ChevronLeft,
  StepBack,
  StepForward,
  Volume1Icon,
  VolumeOffIcon,
} from "lucide-react-native";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");
const imageSize = width * 0.8;

export default function PlayerScreen() {
  return (
    <View className="flex-1 bg-[#131313]">
      {/* Header with back button */}
      <Head />

      {/* Main Content */}
      <View className="flex-1 items-center px-6">
        {/* Album Art */}
        <AlbumArt imageSize={imageSize} />

        {/* Track Info */}
        <TrackInfo />

        {/* Progress Bar */}
        <ProgressBar />

        {/* Controls */}
        <Controls />

        {/* Volume/Extra Controls */}
        <Volum />
      </View>
    </View>
  );
}
