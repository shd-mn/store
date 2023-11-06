import React from 'react';
import {Image, SafeAreaView, Text, View, Button} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';

import styles from './Detail.style';
type PropTypes = {
  route: {
    params: {
      id: string | number;
    };
  };
};

let URL: string | any = Config.API_URL;

function Detail({route}: PropTypes) {
  const {id} = route.params;
  const {data: product, isLoading, error} = useFetch(`${URL}/${id}`);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  const {title, image, description, price, rating} = product[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img_box}>
        <Image style={styles.img} source={{uri: image}} resizeMode="contain" />
      </View>
      <View style={styles.content_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{rating.rate} rate</Text>
          <Text style={styles.price}>{price} $</Text>
        </View>
        <Button title="buy" />
      </View>
    </SafeAreaView>
  );
}

export default Detail;
