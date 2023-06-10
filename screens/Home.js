import React from 'react';
import { FlatList, View } from 'react-native';
import PressableItems from '../components/PressableItems';
import { globalStyles } from '../styles/AppStyles';

const DATA = [
  {
    id: '1',
    name: 'Emma',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    country: 'Allemagne',
    totalImg: 3,
    img: 'https://cdn.pixabay.com/photo/2017/12/17/08/44/girl-3023853_960_720.jpg',
    favColor: 'blueviolet',
  },
  {
    id: '2',
    name: 'Marcel',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    country: 'France',
    totalImg: 5,
    img: 'https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg',
    favColor: 'firebrick',
  },
  {
    id: '3',
    name: 'Diana',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    country: 'Espagne',
    totalImg: 4,
    img: 'https://cdn.pixabay.com/photo/2019/08/13/05/39/girl-4402542_960_720.jpg',
    favColor: 'olivegreen',
  },
  {
    id: '4',
    name: 'Diego',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    country: 'Italie',
    totalImg: 5,
    img: 'https://cdn.pixabay.com/photo/2017/03/24/18/59/face-2171923_960_720.jpg',
    favColor: 'orange',
  },
];

const Home = ({ navigation }) => {
  const renderProfile = ({ item }) => {
    const handleNavigate = () => {
      navigation.navigate('Portfolio', {
        name: item.name,
        country: item.country,
        totalImg: item.totalImg,
        favColor: item.favColor,
      });
    };

    return <PressableItems item={item} handleNavigate={handleNavigate} />;
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={DATA}
        renderItem={renderProfile}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
