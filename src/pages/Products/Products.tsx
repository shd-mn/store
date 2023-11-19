import React from 'react';
import Config from 'react-native-config';
import {FlatList} from 'react-native';
import {ProductTypes} from './types';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import ProductCard from '../../components/ProductCard';
import styles from './Products.style';

let URL: string | any = Config.API_PRODUCTS_URL;

type PropTypes = {
  navigation: {
    navigate: (routeName: string, params?: any) => void;
  };
};

function Products({navigation}: PropTypes) {
  const {data: products, isLoading, error} = useFetch(URL);

  const handleProductSelect = (id: number) => {
    navigation.navigate('DetailPage', {id});
  };

  const renderData = ({item}: {item: ProductTypes}) => {
    return <ProductCard product={item} onSelect={handleProductSelect} />;
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  return (
    <FlatList
      style={styles.container}
      data={products}
      renderItem={renderData}
      keyExtractor={(item: ProductTypes) => item.id.toString()}
    />
  );
}

export default Products;
