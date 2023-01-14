import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppButton } from '../../components/AppButton'
import { Colors } from '../../utils/Colors'
import { Dimens } from '../../utils/Dimens'

export const Home = ({ navigation }) => {

    const onContactUsPressed = () => {
        navigation.navigate("ContactUs");
    }

    return (
        <View style={styles.mainView}>
            <AppButton onPress={onContactUsPressed} title="Contact Us" />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItem: "center",
        justifyContent: "center",
        paddingHorizontal: Dimens.horizontalPadding,
        backgroundColor: Colors.white
    },

})