import React from 'react';
import {FlatList, SafeAreaView, ActivityIndicator, Text} from 'react-native';
import Config from 'react-native-config';
import {ProductTypes} from './types';

import ProductCard from '../../components/ProductCard';
import styles from './Products.style';
import useFetch from '../../hooks/useFetch';
let URL: string | any = Config.API_URL;

function Products() {
  const {data: products, isLoading, error} = useFetch(URL);

  const renderData = ({item}: {item: ProductTypes}) => {
    return <ProductCard product={item} />;
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={products} renderItem={renderData} />
    </SafeAreaView>
  );
}

export default Products;
