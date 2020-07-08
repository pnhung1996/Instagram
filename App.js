import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

const listData = [
  {
    "key": 1,
    "imagePath": require('./assets/39332.jpg'),
    "likeCount": 11
  },
  {
    "key": 2,
    "imagePath": require('./assets/2b2835314a793c20412a2174b978c6b9.jpg'),
    "likeCount": 12
  },
  {
    "key": 3,
    "imagePath": require('./assets/88e1701f41b81af3186ed1b1480e22db.jpg'),
    "likeCount": 500
  },
  {
    "key": 4,
    "imagePath": require('./assets/57699.jpg'),
    "likeCount": 200
  },
  {
    "key": 5,
    "imagePath": require('./assets/394181.jpg'),
    "likeCount": 110
  },
]

class ItemFlast extends Component {
  render() {
    return (<View>
      <View style={styles.inforOfUser}>
        <Image source={require('./assets/702226.jpg')} style={styles.avatar} />
        <Text style={styles.name}>Phùng Nghĩa Hùng</Text>
      </View>

      <Image source={this.props.item.imagePath} style={styles.contentImage} />
      <View style={styles.actionContainer}>
        <Feather name='heart' color="black" size={25} style={styles.iconAction} onPress={() => alert("Liked")}/>
        <Feather name='message-square' color="black" size={25} style={styles.iconAction} onPress={() => alert("Commented")}/>
        <Feather name='share' color="black" size={25} style={styles.iconAction} onPress={() => alert("Shared")}/>
      </View>
      <View style={styles.likeCountContainer}>
        <AntDesign name='heart' color="black" size={25} style={styles.iconAction} />
        <Text >{this.props.item.likeCount} likes </Text>
      </View>


    </View>);
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headerContainer}>
        <Image source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
        }}
          style={styles.logoContainer} />
        <Feather name='inbox' size={27} color="black" style={styles.inbox} />
      </SafeAreaView>
      <FlatList style={styles.listStyle} data={listData}
        renderItem={({ item, index }) => {
          return (
            <ItemFlast item={item} index={index}></ItemFlast>
          );
        }}></FlatList>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    backgroundColor: 'rgb(242,246,250)',
    width: '100%',
    height: 70,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    paddingRight: 10,
    marginTop: 25
  },
  logoContainer: {
    resizeMode: 'contain',
    height: '100%',
    width: '60%',
    position: 'absolute'
  },
  inbox: {
    alignSelf: 'flex-end'
  },
  contentImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  inforOfUser: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#ffff',
    padding: 7,
    marginTop: 10
  },
  avatar: {
    borderRadius: 60,
    height: '100%',
    width: 45,
    resizeMode: 'cover'
  },
  name: {
    fontSize: 20,
    marginLeft: 10
  },
  listStyle: {
    width: '100%'
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  iconAction: {
    alignSelf: 'center',
    margin: 10
  },
  likeCountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems : 'center'
  }
});

