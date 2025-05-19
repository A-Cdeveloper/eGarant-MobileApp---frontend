import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
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
          height: 45,
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
          headerStyle: { backgroundColor: "#EEE6E6DA", height: 45 },
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable
              onPress={() => router.replace("/invoices")}
              className="flex-row items-center justify-center gap-2 px-0"
            >
              <Ionicons
                name={"arrow-back-circle"}
                size={24}
                style={{ marginStart: 8 }}
              />
              <Text className="w-full text-lg font-bold">Svi računi</Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="invoices/invoice-print"
        options={{
          headerShown: true,
          href: null,
          tabBarStyle: { display: "none" },
          headerTitle: "",
          headerStyle: { backgroundColor: "#EEE6E6DA", height: 40 },
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable
              onPress={() => router.replace("/invoices/[iid]")}
              className="flex-row items-center gap-0 px-2"
            >
              {/* <Text className="text-lg font-bold">Zatvori</Text> */}
              <Ionicons
                name={"close-circle"}
                size={30}
                style={{ marginStart: 8 }}
              />
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name="auth/index"
        options={{
          headerShown: true,
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
