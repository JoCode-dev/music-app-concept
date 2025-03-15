import { Image, View } from "react-native";

interface AlbumArtProps {
  imageSize: number;
}

export default function AlbumArt({ imageSize }: AlbumArtProps) {
  return (
    <View
      className="mt-8 rounded-2xl overflow-hidden shadow-2xl"
      style={{ width: imageSize, height: imageSize }}
    >
      <Image
        source={require("@/assets/images/image-1.jpg")}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
}
