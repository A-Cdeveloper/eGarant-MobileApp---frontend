import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { getCoordinatesFromAddress } from "@/lib/maps";
import Headline from "@/components/ui/Headline";
import Card from "@/components/ui/Card";

const DetailsSeller = ({ seller }: any) => {
  const [cordinates, setCordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const cords = async () => {
    const { lat: latitude, lng: longitude } = await getCoordinatesFromAddress(
      `${seller.address} ${seller.city}`
    );
    setCordinates({ latitude, longitude });
  };

  useEffect(() => {
    cords();
  }, []);

  return (
    <Card>
      <Headline level={3}>Prodajno mesto:</Headline>
      <Text className="font-normal">{seller.businessName}</Text>
      <Text className="font-normal">
        {seller.address},{seller.city}
      </Text>

      {/* {cordinates && cordinates.latitude !== 0 && cordinates.longitude !== 0 ? (
        <MapView
          provider={PROVIDER_GOOGLE} // Use Google Maps
          style={{
            width: "100%",
            height: 200,
            marginTop: 10,
          }}
          region={{
            latitude: cordinates.latitude,
            longitude: cordinates.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          zoomEnabled
        >
          <Marker coordinate={cordinates} title={seller.businessName} />
        </MapView>
      ) : null} */}
    </Card>
  );
};

export default DetailsSeller;
