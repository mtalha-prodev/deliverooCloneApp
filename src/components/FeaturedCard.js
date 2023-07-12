import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../utils/themeStyling';

const FeaturedCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  short_description,
  address,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-slate-100 rounded-md mr-3 shadow  dark:bg-slate-600">
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1597429554061-25d8068d6b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTExNzA1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        }}
        className="w-72 h-36 rounded-md"
      />
      <View className="ml-3 py-4">
        <Text className="text-xl text-black font-bold dark:text-slate-50">
          {title}
        </Text>

        <View className="flex-row mt-2 items-center">
          <Ionicons
            name={'star'}
            size={18}
            className=" ml-2"
            color={theme.iconColor}
          />
          <Text className="text-sm text-black dark:text-slate-200 ml-1 ">
            {rating}
          </Text>
          <Text className="text-sm text-black dark:text-slate-200 ml-1 ">
            {genre}
          </Text>
        </View>
        <View className="flex-row mt-3 items-center">
          <Ionicons
            name={'location'}
            size={22}
            className=" ml-2"
            color={theme.iconColor}
          />
          <Text className="text-black ml-2 text-sm dark:text-slate-50 ">
            {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
