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
  const sections = [
    {
      emoji: '📚',
      title: 'Curriculum',
      description: 'Track your courses and credits',
      href: '/components/Curriculum', // Path to the Curriculum screen
      infos: [
        { label: '4.0 GPA', width: 'w-20' },
        { label: '96 credits', width: 'w-32' },
      ],
    },
    {
      emoji: '🗺',
      title: 'Campus Map',
      description: 'Navigate your campus with ease',
      href: '/components/CampusMap', // Path to the Campus Map screen
      infos: [
        { label: 'Building A', width: 'w-24' },
        { label: 'Library', width: 'w-24' },
      ],
    },
    {
      emoji: '🪑',
      title: 'Lounges',
      description: 'Find study and relaxation spaces',
      href: '/components/Lounges', // Path to the Lounges screen
      infos: [
        { label: '120 credits', width: 'w-28' },
        { label: '3 semesters left', width: 'w-36' },
      ],
    },
    {
      emoji: '🧮',
      title: 'GPA Calculator',
      description: 'Calculate your grades',
      href: '/components/GpaCalculator', // Path to the GPA Calculator screen
      infos: [
        { label: '120 credits', width: 'w-28' },
        { label: '3 semesters left', width: 'w-36' },
      ],
    },
    {
      emoji: '📸',
      title: 'Gallery',
      description: 'University photo galleries',
      href: '/components/Gallery', // Path to the Gallery screen
      infos: [
        { label: '120 credits', width: 'w-28' },
        { label: '3 semesters left', width: 'w-36' },
      ],
    },
    {
      emoji: '⏰',
      title: 'Reminders',
      description: 'Stay on top of your tasks',
      href: '/components/Reminders', // Path to the Reminders screen
      infos: [
        { label: '120 credits', width: 'w-28' },
        { label: '3 semesters left', width: 'w-36' },
      ],
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 10,
      }}
      className="w-full flex-col"
    >
      {/* Header Section */}
      <View className="flex-row justify-between items-center p-4 bg-white">
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
        <View className="p-5 flex-col gap-3 shadow-md">
          <Heading size="lg">Welcome back, Alex</Heading>
          <Text>Track your academic progress and campus life all in one place.</Text>
          <View className="flex-row justify-between items-center gap-3">
            <Text className="text-white bg-primary-700 rounded-full px-3 py-1">CS</Text>
            <Text className="text-white bg-primary-700 rounded-full px-3 py-1">Year 3</Text>
            <Text className="text-white bg-primary-700 rounded-full px-3 py-1">FT</Text>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam vel nesciunt, perferendis
          recusandae eos vitae repellat voluptates porro ipsa quidem sequi officia dolorem autem
          veritatis iure culpa aliquam, minima eligendi.
        </Text>
        <Progress value={40} size="md" orientation="horizontal">
          <ProgressFilledTrack />
        </Progress>
      </View>

      {/* Sections */}
      <View className="mb-20">
        {sections.map((section, index) => (
          <Link key={index} href={section.href} asChild>
            <View className="bg-white w-[90vw] mt-6 rounded-lg shadow-md p-5">
              <Center className="gap-3">
                <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
                  {section.emoji}
                </Text>
                <Heading>{section.title}</Heading>
                <Text className="w-fit">{section.description}</Text>
                <View className="flex-row justify-between items-center gap-3">
                  {section.infos.map((info, infoIndex) => (
                    <Text
                      key={infoIndex}
                      className={`bg-gray-200 rounded-lg text-center ${info.width}`}
                    >
                      {info.label}
                    </Text>
                  ))}
                </View>
              </Center>
            </View>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default Index;