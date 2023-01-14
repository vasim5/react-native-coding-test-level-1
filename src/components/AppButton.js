import React, { useMemo } from 'react'
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { Colors } from '../utils/Colors'
import { Dimens } from '../utils/Dimens'
import { Fonts } from '../utils/Fonts'

export const AppButton = ({ onPress, disabled, activeOpacity, title, style }) => {

    const buttonStyle = useMemo(() => {
        return { ...styles.buttonStyle, backgroundColor: disabled ? Colors.grayColor : Colors.buttonColor }
    }, [disabled])

    return <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={activeOpacity || 0.5}
        style={[buttonStyle, style]}>
        <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.buttonColor,
        height: Dimens.defaultButtonHeight,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    textStyle: {
        color: 'white',
        fontSize: Fonts.fontSize._16x
    }
})
