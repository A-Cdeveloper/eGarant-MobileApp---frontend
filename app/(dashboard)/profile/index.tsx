import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Headline from "../../../components/ui/Headline";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const ProfilePage = () => {
  return (
    <ScrollView>
      <View className="flex-1 px-8 bg-background justify-between">
        {/*  */}
        <View className="mb-4">
          <Headline level={1} className="mt-8">
            Aleksandar Cvetkovic
          </Headline>
          <Text>aleksandar@gmail.com</Text>
        </View>
        <Card className="flex-row justify-between">
          <Text className="w-1/2">Broj računa:</Text>
          <Text className="w-1/2 text-right">8</Text>
        </Card>
        <Card className="flex-row justify-between">
          <Text className="w-1/2">Broj garancija:</Text>
          <Text className="w-1/2 text-right">18</Text>
        </Card>
        <Card className="flex-row justify-between">
          <Text className="w-1/2">Poslednja aktivnost:</Text>
          <Text className="w-1/2 text-right">25.05.2025</Text>
        </Card>

        <View>
          <Headline level={2} className="mt-8">
            Promeni lozinku
          </Headline>
          <Card>
            <Text>Lozinka####</Text>
          </Card>
        </View>

        <View className="mt-8 flex-1 flex-row flex-wrap justify-between">
          <Button
            className="bg-danger py-2 w-1/2 max-w-[48%]"
            onPress={() => {}}
          >
            Obrisi profil
          </Button>
          <Button
            className="bg-secondary py-2 w-1/2 max-w-[48%]"
            onPress={() => {}}
          >
            Odjavi se
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
