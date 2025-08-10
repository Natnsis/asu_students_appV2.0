import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

interface NewsDataTypes {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const News = () => {
  const [news, setNews] = useState<NewsDataTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://asu-api.onrender.com/news");
      if (response && response.data) {
        setNews(response.data);
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to load news. Please check your network and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#4299e1" />
          <Text className="mt-4 text-gray-500">Loading news...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View className="flex-1 justify-center items-center p-4">
          <Text className="text-red-500 text-lg font-bold text-center">
            {error}
          </Text>
          <TouchableOpacity
            className="mt-4 bg-blue-500 px-6 py-3 rounded-full shadow-lg"
            onPress={fetchNews}
          >
            <Text className="text-white font-bold">Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
        }}
        className="w-full flex-col px-4 pt-4"
      >
        <View className="gap-y-4">
          {news.map((item: NewsDataTypes) => (
            <Card key={item.id} className="p-4 rounded-xl shadow-lg bg-white">
              <View className="flex-col gap-2">
                <Heading size="md" className="font-bold text-blue-600">
                  {item.title}
                </Heading>
                <Text size="xs" className="text-gray-500">
                  {item.createdAt}
                </Text>
                <Text size="sm" className="text-gray-600 mt-1">
                  {item.content}
                </Text>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center px-4 pt-4">
          <Heading size="lg">News</Heading>
        </View>
      </View>
      {renderContent()}
    </SafeAreaView>
  );
};

export default News;
