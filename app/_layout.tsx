import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts as useInterFonts,
} from "@expo-google-fonts/inter";
import {
  Roboto_400Regular,
  Roboto_600SemiBold,
  Roboto_700Bold,
  useFonts as useRobotoFonts,
} from "@expo-google-fonts/roboto";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
    },
  },
});

export default function RootLayout() {
  const [interLoaded] = useInterFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const [robotoLoaded] = useRobotoFonts({
    Roboto_400Regular,
    Roboto_600SemiBold,
    Roboto_700Bold,
  });

  const fontsLoaded = interLoaded && robotoLoaded;

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className="flex-1 bg-primary">
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerShown: true,
            header: () => (
              <View className="flex-row items-center justify-center bg-primary py-4">
                <Image
                  source={require("../assets/egarant.png")}
                  style={{
                    width: 150,
                    height: 40,
                    resizeMode: "contain",
                  }}
                />
              </View>
            ),
            animation: "none",
          }}
        >
          <Stack.Screen name="(dashboard)" />
          <Stack.Screen name="auth/index" />
          <Stack.Screen name="auth/register" />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
