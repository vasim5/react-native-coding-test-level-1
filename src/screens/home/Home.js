import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppButton } from '../../components/AppButton'
import { Colors } from '../../utils/Colors'
import { Dimens } from '../../utils/Dimens'

export const Home = ({ navigation }) => {

    const onContactUsPressed = () => {
        navigation.navigate("ContactUs");
    }

    const onViewCatalogPressed = () => {
        navigation.navigate("CatalogList");
    }

    return (
        <View style={styles.mainView}>
            <AppButton onPress={onContactUsPressed} title="Contact Us" />
            <AppButton style={styles.button} onPress={onViewCatalogPressed} title="View Catalog" />
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
    button: {
        marginTop: Dimens.verticalPadding
    }
})