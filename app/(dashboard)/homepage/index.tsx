import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import Button from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";
import Widget from "@/components/features/homepage/Widget";

const HomePage = () => {
  const router = useRouter();
  return (
    <View className="flex-1 pb-52 justify-between items-center px-4 py-6 gap-10 bg-background">
      <Headline level={2} className="text-center font-normal">
        Dobrodošli <Text className="font-bold">Aleksandar Cvetkovic</Text>,
      </Headline>
      {/*  */}
      <View className="w-full h-[200px] relative">
        <Widget
          variant="secondary"
          count={8}
          position="left-10 -top-1"
          href="/invoices"
        >
          računi
        </Widget>
        <Widget
          variant="primary"
          count={18}
          position="-bottom-2 right-8"
          href="/garanties"
        >
          garancije
        </Widget>
      </View>
      <View className="gap-4 w-2/3">
        <Button
          onPress={() => router.replace("/qrscaner")}
          className="bg-secondary"
        >
          Dodaj račun
        </Button>
        <Button
          onPress={() => router.replace("/profile")}
          className="bg-primary"
        >
          Moj nalog
        </Button>
      </View>
    </View>
  );
};

export default HomePage;
