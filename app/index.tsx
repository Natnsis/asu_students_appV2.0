import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="p-5 bg-white flex-1">
      <Text size="xl" className="text-center font-extrabold">
        <Text size="xl" className="text-success-700">
          Asu
        </Text>{" "}
        Students App
      </Text>

      <Text size="4xl" className="text-center mt-5 font-extrabold text-black  ">
        Experience the ultimate student assistance
      </Text>

      <Image
        size="2xl"
        source={require("@/assets/images/college students-bro.png")}
        alt="firstPage"
        className="w-full my-5 rounded-lg"
      />

      <Button
        size="xl"
        variant="solid"
        action="primary"
        className="mt-5 bg-success-700"
        onPress={() => router.push("/second")}
      >
        <ButtonText>Get Started</ButtonText>
      </Button>
    </View>
  );
}
