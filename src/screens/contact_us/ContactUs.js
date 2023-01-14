import React, { useCallback, useMemo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppButton } from '../../components/AppButton'
import { AppTextInput } from '../../components/AppTextInput'
import { Dimens } from '../../utils/Dimens'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Utils } from '../../utils/Utils'
import _ from "lodash"
import Dialog, { DialogButton, DialogContent, DialogFooter, DialogTitle } from 'react-native-popup-dialog'
import { Colors } from '../../utils/Colors'

export const ContactUs = ({ }) => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userBirthday, setUserBirthday] = useState();

    const [userNameError, setUserNameError] = useState('');
    const [userEmailError, setUserEmailError] = useState('');
    const [userBirthdayError, setUserBirthdayError] = useState('');

    const [isVisibleDatePicker, setVisibleDatePicker] = useState(false);
    const [dialogVisible, showDialog] = useState(false);

    const onBirthDateClicked = () => {
        setVisibleDatePicker(true);
    }

    const onDateSelected = (date) => {
        setVisibleDatePicker(false);
        setUserBirthday(date);
        setUserBirthdayError('');
    }

    const onSubmitClicked = () => {
        if (!userName) {
            setUserNameError("Please enter user name")
        } else if (_.isEmpty(userEmail) || !Utils.validateEmail(userEmail)) {
            setUserEmailError("Please enter valid email")
        } else if (!userBirthday) {
            setUserBirthdayError("Please select birth date")
        } else {
            showDialog(true);
        }
    }

    const checkAndSetUserName = (userName) => {
        if (!userName || Utils.isContainsLetterOnly(userName)) {
            setUserName(userName);
            setUserNameError('')
        }
    }

    return (
        <View style={styles.mainView}>
            <AppTextInput value={userName}
                placeholder="User Name"
                maxLength={50}
                error={userNameError}
                onChangeText={checkAndSetUserName} />
            <AppTextInput value={userEmail}
                placeholder="Email"
                error={userEmailError}
                maxLength={50}
                onChangeText={(text) => {
                    setUserEmail(text);
                    setUserEmailError('');
                }}
                style={{ marginTop: Dimens.verticalPadding }} />
            <AppTextInput
                value={userBirthday ? Utils.formateDate(userBirthday) : undefined}
                placeholder="Select Birth Date"
                error={userBirthdayError}
                editable={false}
                onPress={onBirthDateClicked}
                style={{ marginTop: Dimens.verticalPadding }} />
            <AppButton style={styles.button} onPress={onSubmitClicked} title="Submit" />

            <DateTimePickerModal
                isVisible={isVisibleDatePicker}
                mode="date"
                date={userBirthday}
                maximumDate={new Date()}
                onConfirm={onDateSelected}
                onCancel={() => setVisibleDatePicker(false)}
            />

            <Dialog
                width={300}
                dialogTitle={<DialogTitle title='Contact Details' />}
                visible={dialogVisible}
                onTouchOutside={() => {
                    showDialog(false)
                }}
                footer={
                    <DialogFooter>
                        <DialogButton
                            text="OK"
                            onPress={() => {
                                showDialog(false)

                            }}
                        />
                    </DialogFooter>
                }>
                <DialogContent style={{ margin: 8 }}>
                    <Text style={styles.dialogTextStyle}>{`User Name : ${userName}`}</Text>
                    <Text style={styles.dialogTextStyle}>{`Email : ${userEmail}`}</Text>
                    <Text style={styles.dialogTextStyle}>{`Date of Birth : ${Utils.formateDate(userBirthday)}`}</Text>
                </DialogContent>
            </Dialog>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: Dimens.horizontalPadding,
        alignItem: "center",
        backgroundColor: Colors.white
    },
    button: {
        marginTop: Dimens.verticalPadding
    },
    dialogTextStyle: {
        marginTop: 4
    }
})