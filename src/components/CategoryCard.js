import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';

const CategoryCard = () => {
  return (
    <TouchableOpacity className="mr-2 rounded-2xl">
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1597429554061-25d8068d6b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTExNzA1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        }}
        className="w-20 h-20 rounded-2xl">
        <Text className="text-white text-end">testing 1</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
