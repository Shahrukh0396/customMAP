import React from "react"
import { observer } from "mobx-react-lite"
import { Image, ImageStyle, ViewStyle } from "react-native"
import { Screen } from "../../components"
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const MARKER: ImageStyle = {
  height: 100,
  width: 100
}

export const MapScreen = observer(function MapScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <MapView initialRegion={INITIAL_REGION} style={{ flex: 1 }}>
        <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }}>
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }}>
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }}>
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }}>
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }}>
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }}>
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 52.2, longitude: 21 }} >
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 52.4, longitude: 21 }} >
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 51.8, longitude: 20 }} >
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 52.8, longitude: 19.7 }}>
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
        <Marker coordinate={{ latitude: 50.4, longitude: 19.1 }}>
          <Image style={MARKER} source={require('../welcome-screen/bowser.png')} />
        </Marker>
      </MapView>
    </Screen>
  )
})
