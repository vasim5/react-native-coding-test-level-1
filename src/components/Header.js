import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../utils/Colors";
import { Dimens } from "../utils/Dimens";
import { Fonts } from "../utils/Fonts";
import { getStatusBarHeight } from "../utils/StatusbarHeight";

export const Header = ({ navigation, backgroundColor, title, titleColor, showBackIcon = true }) => {

    return <SafeAreaView style={{
        backgroundColor: backgroundColor || Colors.toolbarHeaderColor,
        height: Dimens.toolbarHeight,
        marginTop: getStatusBarHeight()
    }}>
        <View style={{
            flex: 1,
            flexDirection: "row"
        }}>
            <View style={styles.leftStyle}>
                <View style={{ paddingStart: 5, alignSelf: "flex-start" }} >
                    {showBackIcon &&
                        <TouchableOpacity style={{ padding: 5 }}
                            onPress={navigation?.goBack}>
                            <Image style={{ width: 24, height: 24, tintColor: Colors.white }}
                                source={require('../../assets/ic_back_arrow.png')} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={styles.middleStyle}>
                {!!title && <Text numberOfLines={1}
                    style={{
                        color: titleColor || Colors.toolbarItemColor, alignSelf: 'center',
                        ...styles.titleStyle
                    }}>{title}
                </Text>}
            </View>
            <View style={styles.rightStyle}>

            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    leftStyle: {
        flex: 1,
        justifyContent: "center"
    },
    middleStyle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    textStyle: {
        marginHorizontal: 4,
        fontSize: Fonts.fontSize._18px,
        color: Colors.white,
        fontWeight: "bold"
    },
    titleStyle: {
        fontSize: Fonts.fontSize._18px,
        fontWeight: "bold"
    }
})

export default Header;