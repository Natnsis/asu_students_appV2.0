import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

interface GalleryItemTypes {
  id: string;
  imageUrl: string;
  caption: string;
  createdAt: string;
}

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItemTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch gallery items
  const fetchGalleryItems = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://asu-api.onrender.com/gallery");
      if (response.data && response.data.response) {
        setGalleryItems(response.data.response);
      } else {
        setError("Invalid data format received from the server.");
      }
    } catch (err) {
      console.error("Error fetching gallery items:", err);
      setError("Failed to load gallery items. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#4299e1" />
          <Text className="mt-4 text-gray-500">Loading gallery...</Text>
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
            onPress={fetchGalleryItems}
          >
            <Text className="text-white font-bold">Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View className="w-full gap-4">
        {galleryItems.length > 0 ? (
          galleryItems.map((item, index) => (
            <Card key={item?.id} className="bg-white rounded-xl shadow-lg p-5">
              <Text className="text-gray-500 mt-1 mb-3">{item?.createdAt}</Text>

              <Image
                source={{ uri: item.imageUrl }}
                className="w-full h-48 rounded-lg shadow-inner"
                resizeMode="cover"
              />

              <Text size="sm" className="text-gray-700 mt-3">
                {item?.caption}
              </Text>

              {/* Only show a divider if it's not the last item */}
              {index < galleryItems.length - 1 && <Divider className="my-3" />}
            </Card>
          ))
        ) : (
          <View className="flex-1 justify-center items-center p-4">
            <Ionicons name="images-outline" size={60} color="#cbd5e1" />
            <Text className="text-gray-400 mt-4 text-center text-lg">
              No gallery items found.
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">University Gallery</Heading>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100, // Ensure content is above the tab bar
        }}
        className="w-full flex-col px-4 pt-4"
      >
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gallery;
