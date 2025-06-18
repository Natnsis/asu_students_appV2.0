import { router } from "expo-router";
import { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { home } from "./constants";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Button, ButtonText } from "@/components/ui/button";

export default function Index() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const ButtonName = activeIndex === home.length - 1 ? "Get Started" : "Next";
  const isLastSlide = activeIndex === home.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/firstForm");
        }}
        className="w-full flex justify-end items-end p-5 "
      >
        <Text className="text-black text-md font-extrabold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {home.map((item, title) => (
          <View key={title} className="flex-1 items-center justify-center ">
            <Text
              size="xl"
              className="text-center font-extrabold text-success-700 px-5"
            >
              {item.title}
            </Text>

            <Text
              size="4xl"
              className="text-center my-5 font-extrabold text-black  "
            >
              {item.description}
            </Text>

            <Image
              size="2xl"
              source={item.image}
              alt="missing image"
              className="w-full my-5 rounded-lg"
            />

            <Button
              size="xl"
              variant="solid"
              action="primary"
              className="w-full rounded-full flex-row justify-center items-center shadow-md shadow-neutral-400/70 bg-success-700 "
              onPress={() => {
                if (isLastSlide) {
                  router.replace("/firstForm");
                } else if (swiperRef.current) {
                  swiperRef.current.scrollBy(1);
                }
              }}
            >
              <ButtonText>{ButtonName}</ButtonText>
            </Button>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}
