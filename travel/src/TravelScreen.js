import React, {useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageBackground,
    FlatList,
    RefreshControl
} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TravelScreen({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(1000).then(() => setRefreshing(false));
    }, []);
    return (
        <>
            <SafeAreaView style={{ flex: 0 }} />
            <StatusBar />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View accessibilityRole="header" style={{ flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                height: 50, 
                width: "100%", 
                paddingLeft: "5%", 
                }}>
                    <View
                        style={{
                            height: 44,
                            flexDirection: 'row',
                            paddingTop: 4,
                            justifyContent: "flex-start",
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 24 }}>
                            <Text style={{ fontWeight: 'bold', color: '#5CC27B' }}>Travel</Text>
                            <Text style={{ fontWeight: 'normal', color: '#979797'}}> With Skku</Text>
                        </Text>
                    </View>
                </View>
                <ScrollView 
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                <Text style={{
                        marginLeft: 8,
                        marginTop: 12,
                        color: '#303030',
                        fontSize: 18,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        ??? ???????????? ?????? ????????? ?????????????
                    </Text>
                    <Text style={{
                        marginLeft: 8,
                        marginTop: 4,
                        color: '#5cc27b',
                        fontSize: 30,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        DOOR-LOCK
                    </Text>
                    <Text style={{
                        marginLeft: 8,
                        marginTop: 4,
                        color: '#303030',
                        fontSize: 16,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        ????????? ?????????
                    </Text>
                    <Text style={{
                        marginTop: 4,
                        marginLeft: 40,
                        marginRight: 40,
                        color: '#303030',
                        fontSize: 14,
                        fontWeight: 'normal',
                        alignSelf: 'center',
                        textAlign: 'center'
                    }}>
                        ?????? ????????? ????????? ??????????????? ????????? ?????? ????????? ????????? ????????? ????????? ??????
                    </Text>
                    <Text style={{
                        marginLeft: 8,
                        marginTop: 6,
                        color: '#303030',
                        fontSize: 16,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        ?????????
                    </Text>
                    <Text style={{
                        marginTop: 4,
                        marginLeft: 40,
                        marginRight: 40,
                        color: '#303030',
                        fontSize: 14,
                        fontWeight: 'normal',
                        alignSelf: 'center',
                        textAlign: 'center',
                        marginBottom: 16
                    }}>
                        ?????? ??? ???????????? ?????? IoT ???????????? ???????????? ?????? ?????? ?????? ????????? ???????????? ????????????
                    </Text>
                    <Text style={{
                        marginLeft: 8,
                        color: '#303030',
                        fontSize: 18,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }}>
                        <Text style={{ color: 'orange' }}>????????? ?????? ??????</Text>
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        marginBottom: 8,
                        marginLeft: 10,
                        marginRight: 10
                    }}>
                        <View style={{
                            paddingBottom: 8,
                            paddingTop: 10,
                            paddingLeft: 4,
                            paddingRight: 4,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                    <FontAwesome5 name="hotel" size={40} />
                                    <Text style={{ fontSize: 12 }}>??????</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                    <Ionicons name="bed" size={40} />
                                    <Text style={{ fontSize: 12 }}>??????</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                    <Ionicons name="business" size={40} />
                                    <Text style={{ fontSize: 12 }}>??????</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                    <Ionicons name="home" size={40} />
                                    <Text style={{ fontSize: 12 }}>??????????????????</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        marginBottom: 16,
                        marginLeft: 10,
                        marginRight: 10
                    }}>
                        <View style={{
                            paddingBottom: 8,
                            paddingTop: 10,
                            paddingLeft: 4,
                            paddingRight: 4,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                    <Ionicons name="airplane" size={40} />
                                    <Text style={{ fontSize: 12 }}>?????????</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                    <Ionicons name="subway" size={40} />
                                    <Text style={{ fontSize: 12 }}>??????</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                    <Ionicons name="car" size={40} />
                                    <Text style={{ fontSize: 12 }}>??????</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 85 }}>
                                    <Ionicons name="rocket" size={40} />
                                    <Text style={{ fontSize: 12 }}>??????</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: 24,
                        marginBottom: 8
                    }}>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'gold' }} />
                        <Text style={{
                            marginLeft: 8,
                            color: '#303030',
                            fontSize: 18,
                            fontWeight: 'bold'
                        }}>
                            <Text style={{ color: 'red' }}>Skkuchain's</Text>
                            <Text style={{ fontSize: 17 }}> Pick!!</Text>
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        marginLeft: 16,
                        marginRight: 16,
                        marginBottom: 10
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('PensionScreen')}>
                            <Image style={{ width: 130, height: 130, borderRadius: 20 }} source={require('./icon/yeosu.jpeg')} />
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 14 }}>?????? ??????</Text>
                        </TouchableOpacity>
                        <View>
                            <Image style={{ width: 130, height: 130, borderRadius: 20 }} source={require('./icon/jeonju.jpg')} />
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 14 }}>?????? ??????</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        marginLeft: 16,
                        marginRight: 16,
                        marginBottom: 8,
                        padding: 20,
                    }}>
                        <View>
                            <Image style={{ width: 130, height: 130, borderRadius: 20 }} source={require('./icon/busan.jpg')} />
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 14 }}>?????? ?????????</Text>
                        </View>
                        <View>
                            <Image style={{ width: 130, height: 130, borderRadius: 20 }} source={require('./icon/gyungju.jpeg')} />
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 14 }}>?????? ?????????</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0 }} />
        </>
    )
}