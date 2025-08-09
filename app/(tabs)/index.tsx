import { ScrollView, View } from "react-native";
import { Link } from "expo-router";
import { Sidebar } from "@/components/Sidebar";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileButton from "@/components/ProfileButton";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon, BellIcon, ClockIcon, InfoIcon } from "@/components/ui/icon";
import { MegaphoneIcon } from "lucide-react-native";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
        }}
        className="w-full flex-col"
      >
        {/* Header Section */}
        <View className="w-full bg-white shadow-sm pb-4">
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
        </View>

        {/* Welcome Section */}
        <View className="bg-white w-11/12 mt-6 mx-auto rounded-xl shadow-lg p-6">
          <View className="flex-col gap-4">
            <Heading size="xl">Welcome, Guest</Heading>
            <Text className="text-gray-600 leading-snug">
              Track your academic progress and campus life all in one place.
            </Text>
            {/* New "Today's Announcements" card */}
            <Card className="p-4 mt-2">
              <View className="flex-row items-center gap-2 mb-2">
                <Icon as={BellIcon} size="md" className="text-blue-600" />
                <Heading size="sm" className="text-blue-800">
                  Today's Announcements
                </Heading>
              </View>
              <View className="gap-y-3">
                <View className="flex-row gap-3 items-center">
                  <Icon as={ClockIcon} size="sm" className="text-gray-500" />
                  <View>
                    <Text size="sm" className="font-bold">
                      Cafeteria Schedule
                    </Text>
                    <Text size="xs" className="text-gray-500">
                      Check today's menu and service hours.
                    </Text>
                  </View>
                </View>
                <View className="flex-row gap-3 items-center">
                  <Icon
                    as={MegaphoneIcon}
                    size="sm"
                    className="text-gray-500"
                  />
                  <View>
                    <Text size="sm" className="font-bold">
                      Join Communities on telegram
                    </Text>
                    <Text size="xs" className="text-gray-500">
                      Discover new student groups at the social tab.
                    </Text>
                  </View>
                </View>
                <View className="flex-row gap-3 items-center">
                  <Icon as={InfoIcon} size="sm" className="text-gray-500" />
                  <View>
                    <Text size="sm" className="font-bold">
                      About the University
                    </Text>
                    <Text size="xs" className="text-gray-500">
                      Learn more about Assosa University's history and mission.
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>

        {/* Sections */}
        <View className="mt-6 w-11/12 mx-auto mb-20 gap-4">
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
                <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                  120 credits
                </Text>
                <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                  3 semesters left
                </Text>
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
                <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                  120 credits
                </Text>
                <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                  3 semesters left
                </Text>
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
                <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                  120 credits
                </Text>
                <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                  3 semesters left
                </Text>
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
                <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                  120 credits
                </Text>
                <Text className="bg-success-50 px-3 py-1 rounded-lg text-center font-bold text-success-700">
                  3 semesters left
                </Text>
              </View>
            </Center>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
