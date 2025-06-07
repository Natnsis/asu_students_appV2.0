import { View } from "react-native";
import React from "react";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";

const third = () => {
  return (
    <View className="p-5 bg-white flex-1">
      <Text size="4xl" className="text-center mt-5 font-extrabold text-black ">
        Manage your tasks with a reminder
      </Text>

      <Image
        size="2xl"
        source={require("@/assets/images/Student stress-bro.png")}
        alt="secondPage"
        className="w-full my-5 rounded-lg"
      />

      <Text className="text-center my-5">
        With additional features to help you socialize and have a better stay
      </Text>
      <Button
        size="xl"
        variant="solid"
        action="primary"
        className="mt-5 bg-success-700"
        onPress={() => router.push("/(tabs)")}
      >
        <ButtonText>Start</ButtonText>
      </Button>

      <Button variant="link">
        <ButtonText className="text-success-700 text-extrabold">
          Skip
        </ButtonText>
      </Button>
    </View>
  );
};

export default third;
