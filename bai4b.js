import React 
from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons, FontAwesome } 
from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 4.5,
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/dd1657422b541162e8a308b9781e1521',
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 4.0,
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1b9ece2245660effaf57bba1fb4ac7d5',
  },
  {
    id: '3',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 4.2,
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/627d00392a98bfae48cd5c6bb51c2cdd',
  },
  {
    id: '4',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 5.0,
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/501aa1f30fa92d6b216f8a42192184ce',
  },
  {
    id: '5',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 4,
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8d31d502424dfcbb4939339d35203f50',
  },
   {
    id: '6',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 4,
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/070353cbe46f76dd762923e79f8e5653',
  },
];

const Item = ({ title, price, rating, imageUrl }) => (
  <View style={styles.item}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <View style={styles.ratingContainer}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.reviews}>(15)</Text>
      </View>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Dây cáp USB"
        />
        <TouchableOpacity>
          <Ionicons name="cart" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            price={item.price}
            rating={item.rating}
            imageUrl={item.imageUrl}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: '47%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#e91e63',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
  },
  reviews: {
    fontSize: 12,
    color: '#888',
    marginLeft: 5,
  },
  row: {
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default App;
