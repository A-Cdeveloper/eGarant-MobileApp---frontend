import Input from "@/components/ui/Input";
import { StyleSheet, TextInput, View } from "react-native";

const SearchInvoices = ({
  setSearchValue,
  searchValue,
}: {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}) => {
  return (
    <View className="mb-8">
      <Input
        onChangeText={(text) => setSearchValue(text)}
        value={searchValue}
        className="bg-white/80 w-full px-3 py-2 rounded-lg border border-primary-light/30 placeholder:text-primary-light/50 place"
        placeholder="Unesite ime prodavca..."
      />
    </View>
  );
};

export default SearchInvoices;

const styles = StyleSheet.create({});
