import React from 'react'
import { RkCard, RkText } from 'react-native-ui-kitten'
import { StyleSheet, Text, Image, View } from 'react-native'

class ResultsScreen extends React.Component {
  state = { item: null }

  static navigationOptions = {
    title: 'Résultats',
    headerStyle: {
      backgroundColor: '#C72C41',
    },
    headerTintColor: '#fff',
  }

  render() {
    const {
      navigation: {
        state: { params },
      },
    } = this.props

    if (!params.wiki_id) {
      return (
        <View style={styles.container}>
          <RkCard>
            <RkText rkType="header">Aucun résultat...</RkText>
          </RkCard>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <RkCard style={styles.card}>
          {params.item.title && (
            <View rkCardHeader>
              <RkText rkType="header" style={{ color: 'white' }}>
                {params.item.title} (reconnu à {(params.score * 100).toFixed(2)}
                %)
              </RkText>
            </View>
          )}
          {params.item.images.length && (
            <Image
              rkCardImg
              source={{
                uri:
                  'https://commons.wikimedia.org/wiki/Special:FilePath/' +
                  params.item.images[0].title.split(':')[1],
              }}
            />
          )}

          {params.item.description && (
            <View rkCardContent>
              <RkText style={{ color: 'white' }} rkType="subtitle">
                {params.item.description}
              </RkText>
            </View>
          )}
          {params.item.extract && (
            <View rkCardFooter>
              <RkText style={{ color: 'white' }} rkType="medium">
                {params.item.extract}
              </RkText>
            </View>
          )}
        </RkCard>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D142C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#801336',
  },
})

export default ResultsScreen
