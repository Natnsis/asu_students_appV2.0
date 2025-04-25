import { Button, ButtonGroup, ButtonIcon, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="p-5 bg-white flex-1">
      <Heading size="2xl" className="text-center">
        Welcome to 
      </Heading>
      <Heading size="xl" className="text-center">
        Asu Students App
      </Heading>

      <Text size="sm" className="text-center mt-5">
        Access your Academic resources, campus events and student service; all in one place
      </Text>

      <Image
        size="2xl"
        source={{
          uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        }}
        alt="firstPage"
        className="w-full mt-5 rounded-lg"
      />
      <Link href="/login" asChild>
        <Button size="xl" variant="solid" action="primary" className="mt-5 ">
            <ButtonText>Sign In</ButtonText>
        </Button>
      </Link>

      <Button size="xl" variant="outline" action="primary" className="mt-5 ">
          <ButtonText>Continue as Guest</ButtonText>
      </Button>

      <Text size="sm" className="text-center mt-5 mb-1">
        New to this platform? 
      </Text>
      <Text size="sm" className="text-center ">
        create an account to get started <Link href="/" className="text-blue-700">Register here</Link>
      </Text>

      <View className="absolute bottom-5 w-screen flex-row justify-center">
        <Text size="sm">
          🔐 Secure login
        </Text>
        <Text size="sm">
          📱 Mobile friendly
        </Text>
        <Text size="sm" className="min-w-fit">
          💭 24/7 Support 
        </Text>
      </View>
    </View>
  );
}
