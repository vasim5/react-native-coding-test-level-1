import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { publicAxios } from '../../services/ApiInterceptor'
import { Dimens } from '../../utils/Dimens'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import Header from '../../components/Header'

const CatalogDetails = ({ route, navigation }) => {

    const [pokemonData, setPokemonData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPokemonData();
    }, [])

    const getPokemonData = async () => {
        setLoading(true);
        const { data } = await publicAxios.get(route.params.item.url);
        setPokemonData(data)
        setLoading(false);
    }

    const getRow = (caption, value) => {
        return <View style={styles.rowStyle}>
            <Text style={styles.captionStyle}>{caption}{': '}</Text>
            <Text style={styles.valueStyle}>{value}</Text>
        </View>
    }

    return (
        <View style={styles.main}>
            <Header title={route.params.item.name} navigation={navigation} />
            {loading ?
                <View style={[styles.main, { justifyContent: "center", alignItems: "center" }]}>
                    <ActivityIndicator color={Colors.buttonColor} size="large" />
                </View> : pokemonData ?
                    <ScrollView style={{ padding: Dimens.horizontalPadding }}>
                        {getRow('Name', pokemonData['name'])}
                        {getRow('Height', pokemonData['height'])}
                        {getRow('Weight', pokemonData['weight'])}
                        {getRow('Base Experience', pokemonData['base_experience'])}
                        {getRow('Abilities', pokemonData['abilities']?.length)}
                        {getRow('Moves', pokemonData['moves']?.length)}
                        {getRow('Game Indices', pokemonData['game_indices']?.length)}

                        <Image
                            resizeMode='contain'
                            style={styles.imageStyle}
                            source={{ uri: pokemonData.sprites["front_default"] }} />
                    </ScrollView> : <View />
            }
        </View>
    )
}

export default CatalogDetails

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.white
    },
    imageStyle: {
        height: Dimens._150x
    },
    captionStyle: {
        color: Colors.grayColor,
        fontSize: Fonts.fontSize._16x
    },
    valueStyle: {
        color: Colors.defaultTextColor,
        fontSize: Fonts.fontSize._16x
    },
    rowStyle: {
        flexDirection: 'row',
        marginTop: Dimens.verticalPadding
    }
})