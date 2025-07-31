import { router } from "expo-router";
import { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { home } from "./constants";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Button, ButtonText } from "@/components/ui/button";
import { ChevronLast } from "lucide-react-native";

export default function Index() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const ButtonName = activeIndex === home.length - 1 ? "Get Started" : "Next";
  const isLastSlide = activeIndex === home.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/sign-in");
        }}
        className="w-full flex-row justify-end items-end p-5 "
      >
        <Text className="text-main text-md font-extrabold items-center flex">
          Skip
        </Text>
        <ChevronLast />
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-main rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {home.map((item, title) => (
          <View key={title} className="flex-0 items-center justify-center px-5">
            <Image
              size="2xl"
              source={item.image}
              alt="missing image"
              className="w-full my-5 rounded-lg"
            />
            <Text
              size="3xl"
              className="text-center font-extrabold text-main px-5 mt-10"
            >
              {item.title}
            </Text>
            <Text size="sm" className="text-center my-2 ">
              {item.description}
            </Text>
            <View className="w-full flex-row justify-center mt-10 ">
              <Button
                size="xl"
                variant="solid"
                action="primary"
                className="bg-main w-2/3 "
                onPress={() => {
                  if (isLastSlide) {
                    router.replace("/sign-in");
                  } else if (swiperRef.current) {
                    swiperRef.current.scrollBy(1);
                  }
                }}
              >
                <ButtonText>{ButtonName}</ButtonText>
              </Button>
            </View>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}
