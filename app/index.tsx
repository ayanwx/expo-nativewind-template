import { View, Text } from "react-native";
import { Image } from "react-native";
import React from "react";
import WideIconLink from "@/components/WideIconLink";

const index = () => {
  return (
    <View className="justify-center h-screen bg-slate-950 p-16">
      <View className="items-center mb-8">
        <Image
          source={require("@/assets/images/react-logo.png")}
          className="w-40 h-40 animate-slow_spin"
        />
      </View>
      <Text className="font-Varela_Round text-4xl text-gray-100">
        {"Expo + NativeWind Template"}
      </Text>
      <Text className="font-Rubik text-white text-xl mt-4">
        {"Welcome to your new React Native app! Edit "}
        <Text className="font-Ubuntu_Mono text-white">{"app/index.tsx"}</Text>
        {" to get started"}
      </Text>
      <WideIconLink
        text={"Explore Tab Navigation"}
        href={"(root)/(tabs)/"}
        icon={"caret-forward"}
      />
    </View>
  );
};

export default index;
