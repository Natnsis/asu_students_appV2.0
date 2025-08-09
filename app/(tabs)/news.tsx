import React from "react";
import { View, ScrollView } from "react-native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { SafeAreaView } from "react-native-safe-area-context";

// A simple array of news data
const newsData = [
  {
    id: "1",
    title: "University Announces New Research Grant Program",
    description:
      "Assosa University is proud to announce a new grant program to support groundbreaking research in science and technology. Applications are now open.",
    date: "2 days ago",
  },
  {
    id: "2",
    title: "Upcoming Career Fair for Final Year Students",
    description:
      "A career fair will be held next week, connecting final-year students with potential employers. Prepare your CVs and portfolios!",
    date: "1 week ago",
  },
  {
    id: "3",
    title: "Campus Library Extends Opening Hours",
    description:
      "Starting this semester, the main campus library will be open until midnight to accommodate students during exam periods.",
    date: "2 weeks ago",
  },
  {
    id: "4",
    title: "New Cafeteria Menu for the Fall Semester",
    description:
      "The university cafeteria has introduced a new menu with more diverse and healthy options based on student feedback. Come and try the new dishes!",
    date: "1 month ago",
  },
  {
    id: "5",
    title: "Inter-Faculty Football Tournament Kicks Off",
    description:
      "The annual inter-faculty football tournament has begun. All students are invited to support their favorite teams every weekend.",
    date: "2 months ago",
  },
];

const News = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center px-4 pt-4">
          <Heading size="lg">News</Heading>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          // Increased paddingBottom to prevent the last news card from being covered by the tab bar.
          paddingBottom: 100,
        }}
        className="w-full flex-col px-4 pt-4"
      >
        <View className="gap-y-4">
          {newsData.map((item) => (
            <Card key={item.id} className="p-4 rounded-xl shadow-lg bg-white">
              <View className="flex-col gap-2">
                <Heading size="md" className="font-bold text-blue-600">
                  {item.title}
                </Heading>
                <Text size="xs" className="text-gray-500">
                  {item.date}
                </Text>
                <Text size="sm" className="text-gray-600 mt-1">
                  {item.description}
                </Text>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;
