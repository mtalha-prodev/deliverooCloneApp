import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {backgroundStyle, theme} from '../utils/themeStyling';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Categories from '../components/Categories';
import Features from '../components/Features';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className={backgroundStyle}>
      {/* header  */}
      <View className="flex-row items-center justify-between mt-4 py-4">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1597429554061-25d8068d6b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTExNzA1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
            }}
            className="w-8 h-8 rounded-full "
          />
          <View className="  mx-2 ">
            <Text className="text-black text-xs dark:text-white">
              Delivery Now
            </Text>
            <Text className="text-black text-2xl dark:text-white">
              Current Location
              <FontAwesome
                name={'chevron-down'}
                size={20}
                className="ml-2"
                color={theme.iconColor}
              />
            </Text>
          </View>
        </View>
        <FontAwesome name="user" size={30} color={theme.iconColor} />
      </View>

      {/* Search bar */}
      <View className="mt-2 flex-row items-center  ">
        <View className="flex-row flex-1 p-3 bg-slate-100 rounded-lg space-x-2 mr-1.5 dark:bg-slate-600 ">
          {/* <FontAwesome name="" /> */}
          <FontAwesome name={'search'} size={28} color={theme.iconColor} />
          <TextInput
            placeholder="Search your location"
            placeholderTextColor={'black'}
            className="text-black text-lg h-full m-0 p-0  w-11/12 dark:text-white "
            keyboardType="default"
          />
        </View>
        <FontAwesome name="sliders" size={25} color={theme.iconColor} />
      </View>
      {/* Search bar */}

      <ScrollView className="mb-40 mt-4" showsVerticalScrollIndicator={false}>
        <Categories />
        {/* features */}
        {/* offers near */}
        <Features
          title="Offers Near You!"
          text="Why not suport your social retuarnts tonight!"
        />

        {/* features */}
        <Features title="Featured!" text="Paid placement from out partners!" />
        {/* tasty distence */}
        <Features
          title="Tasty Discount!"
          text="Everyone's  been enjoying these juicy discount!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
