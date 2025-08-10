import React, { useState, useEffect, useRef } from "react";
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
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const News = () => {
  const [news, setNews] = useState<NewsDataTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Ref to track if initial load is done, to never set loading true again
  const initialLoadDone = useRef(false);

  const fetchNews = async (showLoading: boolean = false) => {
    if (showLoading) {
      setIsLoading(true);
    }
    setError(null);

    try {
      const response = await axios.get("https://asu-api.onrender.com/news");
      if (response && response.data) {
        const publishedNews = response.data.filter(
          (item: NewsDataTypes) => item.published === true
        );
        setNews(publishedNews);
        initialLoadDone.current = true;
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError(
        initialLoadDone.current
          ? "Failed to update news. Showing last available data."
          : "Failed to load news. Please check your network and try again."
      );
    } finally {
      if (showLoading) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // Initial fetch with loading spinner
    fetchNews(true);

    // Periodic fetches without loading spinner
    const intervalId = setInterval(() => {
      fetchNews(false);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      // Only show loader on initial load (when news is empty)
      return (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#4299e1" />
          <Text className="mt-4 text-gray-500">Loading news...</Text>
        </View>
      );
    }

    if (error && news.length === 0) {
      // If error and no news at all, show error + retry
      return (
        <View className="flex-1 justify-center items-center p-4">
          <Text className="text-red-500 text-lg font-bold text-center">
            {error}
          </Text>
          <TouchableOpacity
            className="mt-4 bg-blue-500 px-6 py-3 rounded-full shadow-lg"
            onPress={() => fetchNews(true)}
          >
            <Text className="text-white font-bold">Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <>
        {/* Show warning if error exists but we have data */}
        {error && news.length > 0 && (
          <View className="p-2 bg-yellow-100 border border-yellow-400 rounded mb-2 mx-4">
            <Text className="text-yellow-700 text-center text-sm">{error}</Text>
          </View>
        )}

        {news.length === 0 ? (
          <View className="flex-1 justify-center items-center p-4">
            <Text className="text-gray-500 text-lg text-center">
              No news available at the moment.
            </Text>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
            className="w-full flex-col px-4 pt-4"
          >
            <View className="gap-y-4">
              {news.map((item) => (
                <Card
                  key={item.id}
                  className="p-4 rounded-xl shadow-lg bg-white"
                >
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
        )}
      </>
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
