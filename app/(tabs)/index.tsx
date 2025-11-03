import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ProductItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Index() {
  const [products, setProducts] = useState<ProductItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleNavigate = (id: number) => {
    router.push(`/products/${id}`);
  };

  if (loading) {
    return <ActivityIndicator style={styles.loader} color="black" />;
  }
  return (
    <FlatList
      contentContainerStyle={styles.flatlist}
      data={products}
      initialNumToRender={3}
      renderItem={({ item }) => (
        <Link href={`/products/${item.id}`}>
          <View style={styles.itemWrapper}>
            <Image
              source={item.image}
              // source={require('@/assets/images/icon.png')}
              style={styles.image}
              contentFit="contain"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Button title="details" onPress={() => handleNavigate(item.id)} />
          </View>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 56,
    rowGap: 15,
  },
  itemWrapper: {
    // borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingBottom: 16,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
  },
  image: {
    height: 140,
    marginVertical: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 600,
  },
  desc: {
    textAlign: "justify",
    fontWeight: 300,
    marginBottom: 12,
  },
  loader: {
    marginTop: 120,
  },
});
