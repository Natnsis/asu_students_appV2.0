import { ScrollView, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router'; // Import Link from expo-router
import { Sidebar } from '@/components/Sidebar';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Button, ButtonIcon } from '@/components/ui/button';
import { GripVerticalIcon } from '@/components/ui/icon';
import { Alert, AlertText } from '@/components/ui/alert';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Center } from '@/components/ui/center';

const Index = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 10,
      }}
      className="w-full flex-col"
    >
      {/* Header Section */}
      <View className="flex-row justify-between items-center p-4 bg-white w-full">
        <View className="gap-2 flex-row items-center w-full">
          <Sidebar />
          <Heading size="lg">Asu Students App</Heading>
        </View>
        <Button variant="link">
          <ButtonIcon as={GripVerticalIcon} />
        </Button>
      </View>

      {/* Welcome Section */}
      <View className="bg-white w-[90vw] mt-6 rounded-lg shadow-md p-3">
        <View className="p-5 flex-col gap-3">
          <Heading size="lg">Welcome back, Alex</Heading>
          <Text>
            Track your academic progress and campus life all in one place.
          </Text>
          <View className="flex-row justify-between items-center gap-3">
            <Text className="text-white bg-primary-700 rounded-full px-3 py-1">
              CS
            </Text>
            <Text className="text-white bg-primary-700 rounded-full px-3 py-1">
              Year 3
            </Text>
            <Text className="text-white bg-primary-700 rounded-full px-3 py-1">
              FT
            </Text>
          </View>
        </View>
      </View>

      {/* Library Section */}
      <View className="bg-white w-[90vw] mt-6 rounded-lg shadow-md p-5">
        <View className="flex-row justify-between items-center">
          <Heading>Library Extended Hours</Heading>
          <Alert action="info" variant="solid" className="rounded-full">
            <AlertText>New</AlertText>
          </Alert>
        </View>
        <Text className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam vel
          nesciunt, perferendis recusandae eos vitae repellat voluptates porro
          ipsa quidem sequi officia dolorem autem veritatis iure culpa aliquam,
          minima eligendi.
        </Text>
        <Progress value={40} size="md" orientation="horizontal">
          <ProgressFilledTrack />
        </Progress>
      </View>

      {/* Sections */}
      <View className="mb-20">
        {/* Curriculum */}
        <Link
          href="/(otherScreens)/curriculum"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              📚
            </Text>
            <Heading>Curriculum</Heading>
            <Text className="w-full text-center">
              Track your courses and credits
            </Text>
            <View className="flex-row  items-center justify-center gap-3 w-full">
              <Text className="bg-gray-200 rounded-lg text-center w-20">
                4.0 GPA
              </Text>
              <Text className="bg-gray-200 rounded-lg text-center w-32">
                96 credits
              </Text>
            </View>
          </Center>
        </Link>

        {/* Campus Map */}
        <Link
          href="/(otherScreens)/campus-map/index.tsx"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              🗺
            </Text>
            <Heading>Campus Map</Heading>
            <Text className="w-full text-center">
              Navigate your campus with ease
            </Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className="bg-gray-200 rounded-lg text-center w-24">
                Building A
              </Text>
              <Text className="bg-gray-200 rounded-lg text-center w-24">
                Library
              </Text>
            </View>
          </Center>
        </Link>

        {/* Lounges */}
        <Link
          href="/(otherScreens)/lounges"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              🪑
            </Text>
            <Heading>Lounges</Heading>
            <Text className="w-full text-center">
              Find study and relaxation spaces
            </Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className="bg-gray-200 rounded-lg text-center w-28">
                120 credits
              </Text>
              <Text className="bg-gray-200 rounded-lg text-center w-36">
                3 semesters left
              </Text>
            </View>
          </Center>
        </Link>

        {/* GPA Calculator */}
        <Link
          href="/(otherScreens)/gpa-calculator"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              🧮
            </Text>
            <Heading>GPA Calculator</Heading>
            <Text className="w-full text-center">Calculate your grades</Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className="bg-gray-200 rounded-lg text-center w-28">
                120 credits
              </Text>
              <Text className="bg-gray-200 rounded-lg text-center w-36">
                3 semesters left
              </Text>
            </View>
          </Center>
        </Link>

        {/* Gallery */}
        <Link
          href="/(otherScreens)/gallery"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              📸
            </Text>
            <Heading>Gallery</Heading>
            <Text className="w-full text-center">
              University photo galleries
            </Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className="bg-gray-200 rounded-lg text-center w-28">
                120 credits
              </Text>
              <Text className="bg-gray-200 rounded-lg text-center w-36">
                3 semesters left
              </Text>
            </View>
          </Center>
        </Link>

        {/* Reminders */}
        <Link
          href="/(otherScreens)/remainders"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              ⏰
            </Text>
            <Heading>Reminders</Heading>
            <Text className="w-full text-center">Stay on top of your tasks</Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className="bg-gray-200 rounded-lg text-center w-28">
                120 credits
              </Text>
              <Text className="bg-gray-200 rounded-lg text-center w-36">
                3 semesters left
              </Text>
            </View>
          </Center>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Index;