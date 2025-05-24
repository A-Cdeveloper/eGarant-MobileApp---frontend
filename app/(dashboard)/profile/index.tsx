import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Headline from "../../../components/ui/Headline";
import { useProfile } from "@/features/profile/hooks/useProfile";
import LoadingPage from "@/components/Loading";
import ErrorPage from "@/components/Error";

const ProfilePage = () => {
  const { isPending, data, error } = useProfile();

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <View className="flex-1 px-8 bg-background justify-center gap-4 ">
      {/*  */}
      <View className="mb-4">
        <Headline level={1} className="mt-8">
          {data?.user?.fullName}
        </Headline>
        <Text>{data?.user?.email}</Text>
        <Text>{data?.user?.phone}</Text>
      </View>
      {/*  */}
      <Card className="flex-row justify-between">
        <Text className="w-1/2">Broj računa:</Text>
        <Text className="w-1/2 text-right">{data?.invoiceCount}</Text>
      </Card>
      <Card className="flex-row justify-between">
        <Text className="w-1/2">Broj garancija:</Text>
        <Text className="w-1/2 text-right">{data?.productsGaranteeCount}</Text>
      </Card>
      <Card className="flex-row justify-between">
        <Text className="w-1/2">Poslednja aktivnost:</Text>
        <Text className="w-1/2 text-right">25.05.2025</Text>
      </Card>

      <View className="mt-8 flex-row flex-wrap justify-between">
        <Button className="bg-danger py-2 w-1/2 max-w-[48%]" onPress={() => {}}>
          Obriši profil
        </Button>
        <Button
          className="bg-secondary py-2 w-1/2 max-w-[48%]"
          onPress={() => {}}
        >
          Odjavi se
        </Button>
      </View>
    </View>
  );
};

export default ProfilePage;
