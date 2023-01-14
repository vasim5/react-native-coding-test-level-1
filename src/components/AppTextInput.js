import React, { useMemo, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../utils/Colors';
import { Dimens } from '../utils/Dimens';
import { Fonts } from '../utils/Fonts';
import _ from "lodash";

export const AppTextInput = ({ placeholder, editable = true, onPress, value, onChangeText, maxLength, style, error }) => {
    const [focused, setFocused] = useState(false)

    const isError = useMemo(() => !_.isEmpty(error), [error])
    return (
        <View>
            <View style={[styles.container,
            {
                borderWidth: focused ? 0.7 : 0.5,
                borderColor: isError ? Colors.errorColor : focused ? Colors.primaryColor : Colors.undelineColor
            }, style]}>
                {editable ? <TextInput
                    value={value}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    style={styles.textStyle}
                    placeholderTextColor={Colors.hintColor}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                /> :
                    <Text style={value ? styles.textStyle : styles.placeholderTextStyle}
                        onPress={onPress}>{value || placeholder}</Text>}
            </View>
            {isError ? <Text style={styles.errorLabelStyle}>
                {error}
            </Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.white,
        borderWidth: 1,
        height: Dimens.defaultTextInputHeight,
        justifyContent: "center",
        borderRadius: Dimens._5x
    },
    textStyle: {
        color: Colors.defaultTextColor,
        fontSize: Fonts.fontSize._16x,
        height: Dimens.defaultTextInputHeight,
        padding: 8,
        textAlignVertical: 'center'
    },
    placeholderTextStyle: {
        color: Colors.hintColor,
        fontSize: Fonts.fontSize._16x,
        justifyContent: "center",
        height: Dimens.defaultTextInputHeight,
        paddingStart: Dimens._8x,
        textAlignVertical: 'center'
    },
    errorLabelStyle: {
        marginTop: 4,
        fontSize: 12,
        color: Colors.errorColor,
    }
});