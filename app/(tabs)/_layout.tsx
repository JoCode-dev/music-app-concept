import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            backgroundColor: "#1B1B1B",
            paddingTop: 5,
            borderTopWidth: 0,
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <>
              {focused && (
                <View className="bg-white w-16 h-1.5 z-50 rounded-bl-lg rounded-br-lg shadow shadow-white absolute bottom-9" />
              )}
              <Image
                source={require("@/assets/icons/home.png")}
                resizeMode="contain"
                style={{ width: 28, height: 28 }}
                className="mt-4"
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <>
              {focused && (
                <View className="bg-white w-16 h-1.5 z-50 rounded-bl-lg rounded-br-lg shadow shadow-white absolute bottom-9" />
              )}
              <Image
                source={require("@/assets/icons/explore.png")}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#fff" : "#808080",
                }}
                className="mt-4"
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          title: "Play",
          tabBarIcon: ({ focused }) => (
            <>
              {focused && (
                <View className="bg-white w-16 h-1.5 z-50 rounded-bl-lg rounded-br-lg shadow shadow-white absolute bottom-9" />
              )}
              <Image
                source={require("@/assets/icons/play.png")}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#fff" : "#808080",
                }}
                className="mt-4"
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <>
              {focused && (
                <View className="bg-white w-16 h-1.5 z-50 rounded-bl-lg rounded-br-lg shadow shadow-white absolute bottom-9" />
              )}
              <Image
                source={require("@/assets/icons/profile.png")}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? "#fff" : "#808080",
                }}
                className="mt-4"
              />
            </>
          ),
        }}
      />
    </Tabs>
  );
}
