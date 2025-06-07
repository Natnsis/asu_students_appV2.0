import {
  Button,
  ButtonText,
} from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { View } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {

  const checkInformedStats = async () => {
    const userdata = await AsyncStorage.getItem("userData");
    if (userdata) {
      const isInfromed = JSON.parse(userdata).isInformed;
      if (isInfromed) {
        router.push("/(tabs)");
      } else {
        router.push("/(screens)/studentInfo");
      }
    }
  };

  const justGo = () =>{
      router.push("/(screens)/studentInfo")
  }

  return (
    <View className="p-5 bg-white flex-1">
      <Heading size="2xl" className="text-center">
        Welcome to
      </Heading>
      <Heading size="xl" className="text-center">
        Asu Students App
      </Heading>

      <Text size="sm" className="text-center mt-5">
        Access your Academic resources, campus events and student service; all in one place
      </Text>

      <Image
        size="2xl"
        source={{
          uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        }}
        alt="firstPage"
        className="w-full mt-5 rounded-lg"
      />

      <Button
        size="xl"
        variant="solid"
        action="primary"
        className="mt-5 "
        onPress={() => justGo()}
      >
        <ButtonText>Get Started here</ButtonText>
      </Button>
   </View>
  );
}
