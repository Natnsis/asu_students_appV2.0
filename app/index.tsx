import { router } from "expo-router";
import { useRef, useState, useEffect } from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Button, ButtonText } from "@/components/ui/button";
import { ChevronLast } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "@clerk/clerk-expo";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/(tabs)");
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) return null;

  const home = [
    {
      image: require("@/assets/images/Grades-cuate.png"),
      title: "Welcome to the ASU Students App!",
      description:
        "Your all-in-one companion for a comfortable and successful campus life at Arizona State University.",
    },
    {
      image: require("@/assets/images/college students-bro.png"),
      title: "Stay on Top of Your Academics",
      description:
        "Easily calculate your GPA, manage your class schedules, and track your progress to stay ahead in your studies.",
    },
    {
      image: require("@/assets/images/Student stress-bro.png"),
      title: "Connect with Your Campus",
      description:
        "Get the latest campus news, discover events, and stay updated with feeds from various student organizations.",
    },
  ];

  const ButtonName = activeIndex === home.length - 1 ? "Get Started" : "Next";
  const isLastSlide = activeIndex === home.length - 1;

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient colors={["#4ade80", "#22c55e"]} style={{ flex: 1 }}>
        {/* Skip Button */}
        <TouchableOpacity
          onPress={() => router.replace("/sign-in")}
          className="absolute top-3 right-5 z-10 flex-row items-center"
        >
          <Text className="text-white text-md font-extrabold mr-1">Skip</Text>
          <ChevronLast color="white" />
        </TouchableOpacity>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          loop={false}
          onIndexChanged={(index) => setActiveIndex(index)}
          dot={
            <View className="w-[10px] h-[10px] mx-1 bg-white/40 rounded-full" />
          }
          activeDot={
            <View className="w-[20px] h-[10px] mx-1 bg-white rounded-full" />
          }
        >
          {home.map((item, index) => (
            <View
              key={index}
              className="flex-1 justify-start items-center px-6 pt-8"
            >
              <Image
                source={item.image}
                alt="missing image"
                className="w-full h-1/2"
              />
              <Text
                size="3xl"
                className="text-center font-extrabold text-white mt-4"
              >
                {item.title}
              </Text>
              <Text
                size="sm"
                className="text-center text-white/90 mt-3 leading-6 px-4"
              >
                {item.description}
              </Text>
            </View>
          ))}
        </Swiper>

        <View className="absolute bottom-16 w-full flex-row justify-center">
          <Button
            size="xl"
            variant="solid"
            action="primary"
            className="w-3/4 rounded-full bg-white"
            onPress={() => {
              if (isLastSlide) {
                router.replace("/(auth)/sign-in");
              } else if (swiperRef.current) {
                swiperRef.current.scrollBy(1);
              }
            }}
          >
            <ButtonText className="text-main font-extrabold">
              {ButtonName}
            </ButtonText>
          </Button>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
