import { ScrollView, View } from 'react-native'
import React from 'react'
import { Sidebar } from '@/components/Sidebar'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button, ButtonIcon } from '@/components/ui/button'
import { GripVerticalIcon } from '@/components/ui/icon'
import { Alert, AlertText } from '@/components/ui/alert'
import { Progress, ProgressFilledTrack } from '@/components/ui/progress'
import { Center } from '@/components/ui/center'

const Index = () => {
  const [showDrawer, setShowDrawer] = React.useState(false)
  const sections = [
    {
      emoji: '📚',
      title: 'Curriculum',
      description: 'Track your courses and credits',
      infos: [
        { label: '4.0 GPA', width: 'w-20' },
        { label: '96 credits', width: 'w-32' },
      ],
    },
    {
      emoji: '🗺',
      title: 'Campus Map',
      description: 'Navigate your campus with ease',
      infos: [
        { label: 'Building A', width: 'w-24' },
        { label: 'Library', width: 'w-24' },
      ],
    },
    {
      emoji: '🪑',
      title: 'Lounges',
      description: 'find study and relaxation spaces',
      infos: [
        { label: '120 credits', width: 'w-28' },
        { label: '3 semesters left', width: 'w-36' },
      ],
    },
    {
      emoji: '🧮',
      title: 'Gpa Calculator',
      description: 'Calculate your grades',
      infos: [
        { label: '120 credits', width: 'w-28' },
        { label: '3 semesters left', width: 'w-36' },
      ],
    },
    {
      emoji: '📸',
      title: 'Gallery',
      description: 'University photo galleries',
      infos: [
        { label: '120 credits', width: 'w-28' },
        { label: '3 semesters left', width: 'w-36' },
      ],
    },
    {
      emoji: '⏰',
      title: 'Remainders',
      description: 'Stay on top of your tasks',
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
        alignItems: "center",
        paddingBottom: 10,
      }}
      className="w-full flex-col"
    >
      <View className="flex-row justify-between items-center p-4 bg-white">
        <View className="gap-2 flex-row items-center w-full">
          <Sidebar />
          <Heading size="lg">Asu Students App</Heading>
        </View>
        <Button variant="link">
          <ButtonIcon as={GripVerticalIcon} />
        </Button>
      </View>

      <View className="bg-white w-[90vw] mt-6 rounded-lg shadow-md p-3">
        <View className="p-5 flex-col gap-3 shadow-md">
          <Heading size="lg">Welcome back, Alex</Heading>
          <Text>
            Track your academic progress and campus life all in one place.
          </Text>
          <View className="flex-row justify-between items-center gap-3">
            <Text className="text-white bg-primary-700 rounded-full px-3 py-1">
              CS
            </Text>
            <Text className="text-white bg-primary-700 rounded-full px-3 py-1">
              year 3
            </Text>
            <Text className="text-white bg-primary-700 rounded-full px-3 py-1">
              FT
            </Text>
          </View>
        </View>
      </View>

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

      <View className='mb-20'>
        {sections.map((section, index) => (
          <View
            key={index}
            className="bg-white w-[90vw] mt-6 rounded-lg shadow-md p-5"
          >
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
        ))}
      </View>
      
    </ScrollView>
  );
}

export default Index