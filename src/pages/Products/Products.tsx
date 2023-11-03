import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import {ProductTypes} from './types';

import ProductCard from '../../components/ProductCard';
import styles from './Products.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
let URL: string | any = Config.API_URL;

function Products() {
  const {data: products, isLoading, error} = useFetch(URL);

  const renderData = ({item}: {item: ProductTypes}) => {
    return <ProductCard product={item} />;
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={products} renderItem={renderData} />
    </SafeAreaView>
  );
}

export default Products;
