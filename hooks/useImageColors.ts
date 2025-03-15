import React, { useState } from "react";
import { getColors, type ImageColorsResult } from "react-native-image-colors";

const useImageColors = () => {
  const [colors, setColors] = useState<ImageColorsResult | null>(null);

  React.useEffect(() => {
    const url = "https://i.imgur.com/68jyjZT.jpg";

    getColors(url, {
      fallback: "#228B22",
      cache: true,
      key: url,
    }).then((colors) => {
      setColors(colors);
    });
  }, []);

  return colors;
};
