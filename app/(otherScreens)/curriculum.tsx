import { View, ScrollView } from 'react-native';
import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Heading } from '@/components/ui/heading';
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Divider } from '@/components/ui/divider';

const Curriculum = () => {
  // Array for course data
  const courses = [
    {
      code: 'CS301',
      title: 'Data Structure & Algorithm',
      description: 'Advanced data structures and algorithms design techniques.',
      credit: 4,
      instructor: 'Dr. Sarah Chen',
      progress: 75,
      materials: 12,
      assignments: 8,
      due: 'Binary Trees Quiz',
      schedule: 'Mon, Wed 10:00-11:30',
      room: 'CS Lab-2',
    },
    {
      code: 'CS302',
      title: 'Operating Systems',
      description: 'Introduction to operating systems and process management.',
      credit: 3,
      instructor: 'Dr. John Doe',
      progress: 60,
      materials: 10,
      assignments: 6,
      due: 'Memory Management Assignment',
      schedule: 'Tue, Thu 12:00-1:30',
      room: 'CS Lab-1',
    },
    {
      code: 'CS302',
      title: 'Operating Systems',
      description: 'Introduction to operating systems and process management.',
      credit: 3,
      instructor: 'Dr. John Doe',
      progress: 60,
      materials: 10,
      assignments: 6,
      due: 'Memory Management Assignment',
      schedule: 'Tue, Thu 12:00-1:30',
      room: 'CS Lab-1',
    },
    {
      code: 'CS302',
      title: 'Operating Systems',
      description: 'Introduction to operating systems and process management.',
      credit: 3,
      instructor: 'Dr. John Doe',
      progress: 60,
      materials: 10,
      assignments: 6,
      due: 'Memory Management Assignment',
      schedule: 'Tue, Thu 12:00-1:30',
      room: 'CS Lab-1',
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
      <View className="flex-row justify-between items-center p-4 bg-white w-full">
        <View className="gap-2 flex-row items-center">
          <Sidebar />
          <Heading size="lg">Curriculum</Heading>
        </View>
        <View>
          <Avatar className="bg-blue-600 rounded-full ">
            <AvatarFallbackText className="text-white font-extrabold">
              Alex
            </AvatarFallbackText>
          </Avatar>
        </View>
      </View>

      {/* Body Section */}
      <View className="w-full px-5">
        <View className="flex-row justify-between items-center w-full mt-5">
          <Card className="w-fit mx-2 bg-white">
            <Text size="xs">Credits</Text>
            <Heading size="xl" className="w-full text-center">
              25
            </Heading>
          </Card>
          <Card className="w-fit mx-2 bg-white">
            <Text size="xs">Completed</Text>
            <Heading size="xl" className="w-full text-center">
              25
            </Heading>
          </Card>
          <Card className="w-fit mx-2 bg-white">
            <Text size="xs" className="w-full text-center">
              GPA
            </Text>
            <Heading size="xl" className="w-full text-center">
              3.85
            </Heading>
          </Card>
          <Card className="w-fit mx-2 bg-white">
            <Text size="xs">Courses</Text>
            <Heading size="xl" className="w-full text-center">
              8
            </Heading>
          </Card>
        </View>
      </View>

      {/* Search Section */}
      <View className="w-full px-5">
        <Input
          variant="outline"
          size="md"
          className="bg-white mt-5 rounded-full"
        >
          <InputField placeholder="Search Courses..." />
        </Input>
      </View>

      {/* Courses Section */}
      <View className="px-5 w-full mt-10 mb-10">
        {courses.map((course, index) => (
          <View key={index} className="w-full bg-white rounded-md p-5 mb-5">
            <View className="flex-row items-center w-full">
              <Heading size="md" className="mr-3">
                {course.code}
              </Heading>
              <Button
                size="xs"
                variant="solid"
                action="secondary"
                className="rounded-full"
                isDisabled={true}
              >
                <ButtonText className="text-primary-950">Hello World!</ButtonText>
              </Button>
            </View>

            <View className="my-2 w-full">
              <Heading>{course.title}</Heading>
              <Text className="w-4/5">{course.description}</Text>
            </View>

            <View className="flex-row items-center w-full mb-10">
              <Text className="mr-5">
                Credit: <Text className="font-extrabold">{course.credit}</Text>
              </Text>
              <Text>
                Instructor: <Text className="font-extrabold">{course.instructor}</Text>
              </Text>
            </View>

            <View className="flex-row items-center mb-4">
              <Text className="mr-3">
                Progress: <Text className="font-extrabold">{course.progress}%</Text>
              </Text>
              <Text className="mr-3">
                Materials: <Text className="font-extrabold">{course.materials}</Text>
              </Text>
              <Text className="mr-3">
                Assignments: <Text className="font-extrabold">{course.assignments}</Text>
              </Text>
            </View>

            <View>
              <Text className="text-red-500 text-right w-full mb-1">
                Due: {course.due}
              </Text>
              <Progress value={course.progress} size="sm" orientation="horizontal">
                <ProgressFilledTrack />
              </Progress>
            </View>

            <Divider className="my-5" />

            <View className="flex-row items-center mb-5">
              <Text className="mr-5">
                Schedule: <Text className="font-extrabold">{course.schedule}</Text>
              </Text>
              <Text>
                Rooms: <Text className="font-extrabold">{course.room}</Text>
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Curriculum;