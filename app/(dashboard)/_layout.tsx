import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
const TabsLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "shift",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 45,
          backgroundColor: "#252d3e",
          borderRadius: 50,
          width: "95%",
          marginHorizontal: "2.5%",
          marginBottom: 20,
          position: "absolute",
        },
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "white",
        tabBarLabelPosition: "beside-icon",
        tabBarActiveBackgroundColor: "#f1492a",
        tabBarLabelStyle: {
          fontSize: 11,
          textTransform: "uppercase",
          color: "white",
          marginStart: 5,
        },
        tabBarItemStyle: {
          height: 48,
        },
      }}
    >
      <Tabs.Screen
        name="homepage/index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={color}
              style={{ marginStart: 8 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="qrscaner"
        options={{
          title: "Skener",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "scan" : "scan-outline"}
              size={22}
              color={color}
              style={{ marginStart: 8 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="invoices/index"
        options={{
          title: "Računi",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calculator" : "calculator-outline"}
              size={22}
              color={color}
              style={{ marginStart: 8 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={22}
              color={color}
              style={{ marginStart: 8 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="invoices/[iid]"
        options={{
          headerShown: true,
          href: null,
          tabBarStyle: { display: "none" },
          headerTitle: "",
          headerStyle: { backgroundColor: "#f57a5c", height: 35 },
          headerShadowVisible: false,
          headerLeft: () => (
            <View className="flex-row items-center justify-between">
              <Pressable
                onPress={() => router.replace("/guarantee")}
                className="flex-row items-center justify-start w-1/2 gap-2"
              >
                <Ionicons
                  name={"arrow-up-circle"}
                  size={24}
                  style={{ marginStart: 8, opacity: 0.8, color: "white" }}
                />
                <Text className="text-md font-bold opacity-80 text-white">
                  SVE GARANCIJE
                </Text>
              </Pressable>
              <Pressable
                onPress={() => router.replace("/invoices")}
                className="flex-row items-center justify-end w-1/2 gap-0 pe-3"
              >
                <Text className="text-md font-bold opacity-80 text-white">
                  SVI RAČUNI
                </Text>
                <Ionicons
                  name={"arrow-up-circle"}
                  size={24}
                  style={{ marginStart: 8, opacity: 0.8, color: "white" }}
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="invoices/invoice-print"
        options={{
          headerShown: false,
          href: null,
          tabBarStyle: { display: "none" },
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />

      <Tabs.Screen
        name="guarantee/index"
        options={{
          headerShown: true,
          href: null,
          tabBarStyle: { display: "none" },
          headerTitle: "",
          headerStyle: { backgroundColor: "#f57a5c", height: 35 },
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable
              onPress={() => router.replace("/homepage")}
              className="flex-row items-center justify-center gap-2 px-0"
            >
              <Ionicons
                name={"arrow-up-circle"}
                size={24}
                style={{ marginStart: 8, opacity: 0.8, color: "white" }}
              />
              <Text className="text-md font-bold opacity-80 text-white">
                HOME
              </Text>
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
