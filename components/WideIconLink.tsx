import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  text: string;
  href: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const WideIconLink = ({ text, href, icon }: Props) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(href as any)}
      className="bg-blue-500 p-4 mt-8 justify-center items-center rounded-md"
    >
      <View className="flex-row justify-between items-center w-full">
        <Text className="font-Varela_Round text-white text-xl mr-2">
          {text}
        </Text>
        <Ionicons name={icon} size={20} color="white" />
      </View>
    </Pressable>
  );
};

export default WideIconLink;
