import { Platform } from "react-native";

export const Dimens = {
    _5x: 5,
    _8x: 8,
    _10x: 10,
    _35x: 35,
    _100x: 100,   
    _150x: 150,   
    horizontalPadding: 16,
    verticalPadding: 12,
    defaultButtonHeight: 48,
    defaultTextInputHeight: 48,
    toolbarHeight: Platform.OS === "ios" ? 64 : 56,
}