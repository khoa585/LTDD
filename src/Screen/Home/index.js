import React from 'react'
import { TextInput, View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Swiper from 'react-native-swiper'
import { RectButton } from 'react-native-gesture-handler';
import { DATA } from './DATA'
const { width, height } = Dimensions.get('window');
function Home(props) {
    const [tab, setTab] = React.useState(0)
    return (
        <View style={styles.container}>
            <View style={styles.headerTop}>
                <View style={styles.headerTop_}>
                    <EvilIcons name={"search"} size={30} color="#000" />
                    <TextInput style={{ flex: 1, flexDirection: 'row', paddingVertical: 5 }} placeholder="Tìm kiếm móm ăn,tên địa điểm..."></TextInput>
                    <View style={styles.selectCity}>
                        <Text style={styles.nameCity}>ĐÀ NẴNG</Text>
                        <EvilIcons name={"chevron-down"} size={30} color="#000" />
                    </View>
                </View>
            </View>
            <ScrollView style={{
                flex: 1
            }}>
                <View style={styles.wrapper}>
                    <Swiper showsButtons={false} activeDotColor={"#fff"}>
                        <View style={styles.slide1}>
                            <Image style={{ width: "100%", height: "100%" }} source={{ uri: "https://media.foody.vn/images/beauty-upload-api-675x355-201119121924.jpg" }}></Image>
                        </View>
                        <View style={styles.slide2}>
                            <Image style={{ width: "100%", height: "100%" }} source={{ uri: "https://media.foody.vn/images/beauty-upload-api-675x355-201112135838.jpg" }}></Image>
                        </View>
                        <View style={styles.slide3}>
                            <Image style={{ width: "100%", height: "100%" }} source={{ uri: "https://media.foody.vn/images/beauty-upload-api-675x355-201119121503.jpg" }}></Image>
                        </View>
                    </Swiper>
                </View>
                <View style={styles.action}>
                    <RectButton>
                        <View style={styles.action_}>
                            <Image style={styles.image} source={{ uri: 'https://f17-zpc.zdn.vn/50399326585031743/a3c22a8576f287acdee3.jpg' }}></Image>
                            <Text style={styles.txt}>Khám Phá</Text>
                        </View>
                    </RectButton>
                    <RectButton>
                        <View style={styles.action_}>
                            <Image style={styles.image} source={{ uri: 'https://f6.photo.talk.zdn.vn/6329739171607062385/4983dec482b373ed2aa2.jpg' }}></Image>
                            <Text style={styles.txt}>Giao hàng</Text>
                        </View>
                    </RectButton>
                    <RectButton>
                        <View style={styles.action_}>
                            <Image style={styles.image} source={{ uri: 'https://f2.photo.talk.zdn.vn/5440682726973960647/c56267253b52ca0c9343.jpg' }}></Image>
                            <Text style={styles.txt}>Đặt chỗ</Text>
                        </View>
                    </RectButton>
                </View>
                <View style={{ height: 10, backgroundColor: '#eeeeee', marginHorizontal: 0 }}>

                </View>
                <View style={styles.listP}>
                    <View style={styles.actionChoice}>
                        <Text style={[{ marginRight: 10 }, tab === 0 && { fontWeight: 'bold' }]} onPress={() => { setTab(0) }}>Xem gần đây</Text>
                        <Text style={[{ marginLeft: 10 }, tab === 1 && { fontWeight: 'bold' }]} onPress={() => { setTab(1) }}>Gần tôi</Text>
                    </View>
                    {
                        tab === 0 && (
                            <View style={styles.container_list}>
                                {
                                    DATA.map((item) => (
                                        <RectButton key={item.id}>
                                            <View style={styles.WrapItem} >
                                                <View style={{ justifyContent: 'center', height: '60%' }}>
                                                    <Image source={{ uri: item.image }} style={styles.img} />
                                                </View>
                                                <View style={{ height: '40%' }}>
                                                    <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                                    <Text numberOfLines={2}>{item.cmt}</Text>
                                                </View>
                                            </View>
                                        </RectButton>
                                    ))
                                }
                            </View>
                        )
                    }
                    {
                        tab === 1 && (
                            <View style={styles.container_list}>
                                {
                                    DATA.map((item) => (
                                        <RectButton key={item.id}>
                                            <View style={styles.WrapItem} >
                                                <View style={{ justifyContent: 'center', height: '60%' }}>
                                                    <Image source={{ uri: item.image }} style={styles.img} />
                                                </View>
                                                <View style={{ height: '40%' }}>
                                                    <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                                    <Text numberOfLines={2}>{item.cmt}</Text>
                                                </View>
                                            </View>
                                        </RectButton>
                                    ))
                                }
                            </View>
                        )
                    }
                </View>
            </ScrollView>
        </View>
    )
}


export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerTop: {
        backgroundColor: 'red'
    },
    headerTop_: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 5
    },
    selectCity: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameCity: {
        color: "#000"
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    },
    wrapper: {
        height: 200,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginBottom: 10
    },
    image: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 5
    },
    action_: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,

    },
    txt: {
        fontWeight: 'bold'
    },
    listP: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,

    },
    actionChoice: {
        flexDirection: 'row',
        marginVertical: 10
    },
    WrapItem: {
        width: (width / 2) - 20,
        height: (width * 0.45),
        marginBottom: 5,
        justifyContent: 'space-between',
        marginHorizontal: 5
    },
    container_list: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    img: {
        width: '100%',
        height: "100%",
        resizeMode: 'contain'
    }
})