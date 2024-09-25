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
} 
from 'react-native';
import { Ionicons } 
from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/52efb26dc179da0f9fc42450b8153c98',
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/374d483bfdfb3514cd85e61976a47ccc',
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/896894cc9f9734526b6d59a41400b69c',
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/662bc37e8cf035d86bcb7d5569034f61',
  },
  {
    id: '5',
    title: 'Lãnh Đạo Giản Đơn ',
    shop: 'Minh Long Book',
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e24c567e78ca9aa2f80c0c3e45e6b1c3',
  },
  {
    id: '6',
    title: 'Hiểu Lòng Con Trẻ',
    shop: 'Minh Long Book',
    imageUrl:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e8d60c3ad9e1fec83c2e0ed06fe967b1',
  },
];

const Item = ({ title, shop, imageUrl }) => (
  <View style={styles.item}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.shop}>{shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.navbarTitle}>Chat</Text>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>

      {/* Product List */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} shop={item.shop} imageUrl={item.imageUrl} />
        )}
        keyExtractor={item => item.id}
      />

      {/* Footer */}
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
    backgroundColor: '#f0f0f0',
  },
  navbar: {
    backgroundColor: '#0288d1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  navButton: {
    padding: 5,
  },
  navbarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#e0f7fa',
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 14,
    color: '#00796b',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  shop: {
    fontSize: 12,
    color: '#888',
  },
  chatButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#0288d1',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default App;
