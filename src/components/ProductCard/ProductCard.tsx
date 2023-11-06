import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {ProductTypes} from '../../pages/Products/types';
import styles from './ProductCard.style';

type PropTypes = {
  product: ProductTypes;
  onSelect: (id: number, title: string) => void;
};

function ProductCard({product, onSelect}: PropTypes) {
  return (
    <TouchableWithoutFeedback
      onPress={() => onSelect(product.id, product.title)}>
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
    </TouchableWithoutFeedback>
  );
}

export default ProductCard;
