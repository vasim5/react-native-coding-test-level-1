import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppButton } from '../../components/AppButton'
import Header from '../../components/Header'
import { getCatalogs } from '../../redux/actions/CatalogActions'
import { Colors } from '../../utils/Colors'
import { Dimens } from '../../utils/Dimens'
import { Fonts } from '../../utils/Fonts'

const CatalogList = ({ navigation }) => {
    const store = useSelector((state) => state.catalog)
    const dispatch = useDispatch()
    const { catalogs, error, loading, loadingMore, hasNext } = store

    useEffect(() => {
        if (!error && !catalogs.length)
            dispatch(getCatalogs())
    }, [error])

    const gotoDetails = (item) => {
        navigation.navigate("CatalogDetails", { item })
    }

    const onEndReached = useCallback(() => {
        if (!loading && !loadingMore && hasNext)
            dispatch(getCatalogs(10, catalogs.length + 10))

    }, [catalogs, loading, loadingMore, hasNext])

    return (
        <View style={styles.main}>
            <Header title={"Pokemon List"} navigation={navigation} />
            {loading ?
                <View style={[styles.main, { justifyContent: "center", alignItems: "center" }]}>
                    <ActivityIndicator color={Colors.buttonColor} size="large" />
                </View>
                :
                <FlatList
                    style={styles.main}
                    data={catalogs}
                    renderItem={({ item }) => (
                        <View style={styles.catalogItem}>
                            <Text style={styles.catalogName}>{item.name}</Text>
                            {/* <TouchableOpacity style={styles.viewButton} onPress={() => gotoDetails(item)}>
                                <Text style={styles.viewText}>{"View"}</Text>
                            </TouchableOpacity> */}
                            <AppButton
                                title={"View"}
                                style={styles.viewButton}
                                onPress={() => gotoDetails(item)} />
                        </View>
                    )}
                    ListFooterComponent={() => <ActivityIndicator style={styles.loading} color={Colors.buttonColor} size="small" />}
                    onEndReached={onEndReached}
                />}
        </View>
    )
}

export default CatalogList

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    catalogItem: {
        elevation: Dimens._5x,
        backgroundColor: Colors.white,
        margin: Dimens._8x, borderRadius: 4,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 8,
        flexDirection: 'row',
        alignItems: 'center',
        padding: Dimens.horizontalPadding
    },
    catalogName: {
        flex: 1,
        marginEnd: Dimens.horizontalPadding,
        fontSize: Fonts.fontSize._16x
    },
    viewButton: {
        width: Dimens._100x,
        height: Dimens._35x,
    },
    loading: {
        margin: Dimens.horizontalPadding
    }
})