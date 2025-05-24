import ErrorPage from "@/components/Error";
import LoadingPage from "@/components/Loading";
import Button from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";
import Widget from "@/features/homepage/Widget";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

const HomePage = () => {
  const router = useRouter();
  const { isPending, data, error } = useProfile();

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <View className="flex-1 pb-52 justify-between items-center px-4 py-6 gap-10 bg-background">
      <Headline level={2} className="text-center font-normal">
        Dobrodošli <Text className="font-bold">{data?.user?.fullName}</Text>,
      </Headline>
      {/*  */}
      <View className="w-full h-[200px] relative">
        <Widget
          variant="secondary"
          count={data?.invoiceCount as number}
          position="left-10 -top-1"
          href="/invoices"
        >
          računi
        </Widget>
        <Widget
          variant="primary"
          count={data?.productsGaranteeCount as number}
          position="-bottom-2 right-8"
          href="/guarantee"
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
