import React from 'react';
import {View, Text, Image} from 'react-native';
import {ProductTypes} from '../../pages/Products/types';
import styles from './ProductCard.style';

function ProductCard({product}: {product: ProductTypes}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: product.image}}
        alt={product.title}
        resizeMode="contain"
      />
      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} $</Text>
      </View>
    </View>
  );
}

export default ProductCard;
