import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../utils/themeStyling';
import FeaturedCard from './FeaturedCard';

const Features = ({title, text}) => {
  return (
    <View className="">
      <View className="justify-between">
        <View className="flex-row mt-4 justify-between ">
          <Text className="text-xl text-black dark:text-white">{title}</Text>
          <FontAwesome
            name={'arrow-right'}
            size={20}
            className=" ml-2"
            color={theme.iconColor}
          />
        </View>
        <Text className="text-gray-800 dark:text-gray-300">{text}</Text>
      </View>
      {/* card horizontal */}

      <ScrollView
        contentContainerStyle={{marginTop: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {/* featuredCard .... */}
        <FeaturedCard
          imgUrl={
            'https://images.unsplash.com/photo-1597429554061-25d8068d6b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTExNzA1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
          }
          title="nondo"
          text="something someting"
          rating="4.5"
          genre="Pakistan"
          address={'Nearby 123 Main st'}
        />
        <FeaturedCard
          imgUrl={
            'https://images.unsplash.com/photo-1597429554061-25d8068d6b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTExNzA1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
          }
          title="nondo"
          text="something someting"
          rating="4.5"
          genre="Pakistan"
          address={'Nearby 123 Main st'}
        />
      </ScrollView>
    </View>
  );
};

export default Features;
