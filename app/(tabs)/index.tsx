import { ScrollView, View } from "react-native";
import { Link } from "expo-router";
import { Sidebar } from "@/components/Sidebar";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileButton from "@/components/ProfileButton";

const Index = () => {
  const ministyle = "bg-success-50 px-2 text-base rounded-lg text-center";

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20,
      }}
      className="w-full flex-col bg-gray-100"
    >
      {/* Header Section */}
      <SafeAreaView className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-between px-4 pt-4">
          <View className="flex-row items-center gap-3">
            <Sidebar />
            <View className="flex-col">
              <View className="flex-row items-center gap-1">
                <Heading size="lg">ASU Students App</Heading>
                <Text size="2xs" className="text-green-400 font-bold ml-1">
                  beta
                </Text>
              </View>
            </View>
          </View>
          <ProfileButton />
        </View>
      </SafeAreaView>

      {/* Welcome Section */}
      <View className="bg-white w-[90vw] mt-6 mx-auto rounded-xl shadow-lg p-6">
        <View className="flex-col gap-4">
          <Heading size="xl">Welcome, Guest</Heading>
          <Text className="text-gray-600 leading-snug">
            Track your academic progress and campus life all in one place.
          </Text>
          <View className="flex-row flex-wrap justify-between items-center gap-2">
            <Text className="text-white rounded-full px-3 py-1 bg-success-700 font-medium">
              department
            </Text>
            <Text className="text-white bg-success-700 rounded-full px-3 py-1 text-sm font-medium">
              Year: 4
            </Text>
            <Text className="text-white bg-success-700 rounded-full px-3 py-1 text-sm font-medium">
              male
            </Text>
          </View>
        </View>
      </View>

      {/* Sections */}
      <View className="mt-6 w-[90vw] mx-auto mb-20 gap-4">
        {/* Curriculum */}
        <Link
          href="/(otherScreens)/curriculum"
          className="w-full bg-white rounded-xl shadow-lg p-6"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full p-2" size="xl">
              📚
            </Text>
            <Heading size="md" className="font-bold">
              Curriculum
            </Heading>
            <Text className="w-full text-center text-gray-500 text-sm">
              Track your courses and credits
            </Text>
            <View className="flex-row items-center justify-center gap-3 w-full mt-2">
              <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                4.0 GPA
              </Text>
              <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                96 credits
              </Text>
            </View>
          </Center>
        </Link>

        {/* Lounges */}
        <Link
          href="/(otherScreens)/lounges"
          className="w-full bg-white rounded-xl shadow-lg p-6"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full p-2" size="xl">
              🪑
            </Text>
            <Heading size="md" className="font-bold">
              Lounges
            </Heading>
            <Text className="w-full text-center text-gray-500 text-sm">
              Find study and relaxation spaces
            </Text>
            <View className="flex-row justify-center items-center gap-3 mt-2">
              <Text className={ministyle}>120 credits</Text>
              <Text className={ministyle}>3 semesters left</Text>
            </View>
          </Center>
        </Link>

        {/* GPA Calculator */}
        <Link
          href="/(otherScreens)/gpa-calculator"
          className="w-full bg-white rounded-xl shadow-lg p-6"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full p-2" size="xl">
              🧮
            </Text>
            <Heading size="md" className="font-bold">
              GPA Calculator
            </Heading>
            <Text className="w-full text-center text-gray-500 text-sm">
              Calculate your grades
            </Text>
            <View className="flex-row justify-center items-center gap-3 mt-2">
              <Text className={ministyle}>120 credits</Text>
              <Text className={ministyle}>3 semesters left</Text>
            </View>
          </Center>
        </Link>

        {/* Gallery */}
        <Link
          href="/(otherScreens)/gallery"
          className="w-full bg-white rounded-xl shadow-lg p-6"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full p-2" size="xl">
              📸
            </Text>
            <Heading size="md" className="font-bold">
              Gallery
            </Heading>
            <Text className="w-full text-center text-gray-500 text-sm">
              University photo galleries
            </Text>
            <View className="flex-row justify-center items-center gap-3 mt-2">
              <Text className={ministyle}>120 credits</Text>
              <Text className={ministyle}>3 semesters left</Text>
            </View>
          </Center>
        </Link>

        {/* Reminders */}
        <Link
          href="/(otherScreens)/remainders"
          className="w-full bg-white rounded-xl shadow-lg p-6"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full p-2" size="xl">
              ⏰
            </Text>
            <Heading size="md" className="font-bold">
              Reminders
            </Heading>
            <Text className="w-full text-center text-gray-500 text-sm">
              Stay on top of your tasks
            </Text>
            <View className="flex-row justify-center items-center gap-3 mt-2">
              <Text className={ministyle}>120 credits</Text>
              <Text className={ministyle}>3 semesters left</Text>
            </View>
          </Center>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Index;
