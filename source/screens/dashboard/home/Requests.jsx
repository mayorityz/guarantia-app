import React from 'react'
import { View, Text } from 'react-native'
import AppWrapper from '../../../constants/AppWrapper'
import { GlobalStyle } from '../../../constants/GlobalStyle'
import { RequestScreenStyle } from './Style'

export default function Requests() {
  return (
    <AppWrapper>
      <View style={[GlobalStyle.p20]}>
        <Text style={[RequestScreenStyle.title]}>Seller</Text>
        <Text style={[RequestScreenStyle.sellerText]}>
          Zee's Grills & Catering Services.
        </Text>
        <Text style={[RequestScreenStyle.title]}>Price</Text>
        <Text style={[RequestScreenStyle.sellerText]}>N45,000</Text>
        <Text style={[RequestScreenStyle.title]}>Description</Text>
        <Text style={[RequestScreenStyle.sellerDesc]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dolore
          dolores illo laborum explicabo consectetur maiores, iure reiciendis
          fugiat repellat illum ea sed mollitia non sint voluptates sit rerum
          veniam.
        </Text>

        <Text style={[RequestScreenStyle.title]}>Images</Text>

        <Text style={[RequestScreenStyle.title]}>Social Link</Text>
      </View>
    </AppWrapper>
  )
}
