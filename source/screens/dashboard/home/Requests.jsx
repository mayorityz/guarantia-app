import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import CustomHeader from '../../../components/CustomHeader'
import InputField from '../../../components/InputFields'
import AppWrapper from '../../../constants/AppWrapper'
import { GlobalStyle } from '../../../constants/GlobalStyle'
import { RequestScreenStyle } from './Style'

export default function Requests() {
  return (
    <AppWrapper>
      <CustomHeader title="Request" />
      <ScrollView>
        <View style={[RequestScreenStyle.banner]}>
          <Text style={[RequestScreenStyle.bannerText]}>Request Details</Text>
        </View>
        <View style={[GlobalStyle.p20]}>
          <View style={[RequestScreenStyle.infoContainer]}>
            <Text style={[RequestScreenStyle.title]}>Seller</Text>
            <Text style={[RequestScreenStyle.sellerText]}>
              Zee's Grills & Catering Services.
            </Text>
          </View>
          <View style={[RequestScreenStyle.infoContainer]}>
            <Text style={[RequestScreenStyle.title]}>Price</Text>
            <Text style={[RequestScreenStyle.sellerText]}>N45,000</Text>
          </View>
          <View style={[RequestScreenStyle.infoContainer]}>
            <Text style={[RequestScreenStyle.title]}>Description</Text>
            <Text style={[RequestScreenStyle.sellerDesc]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              dolore dolores illo laborum explicabo consectetur maiores, iure
              reiciendis fugiat repellat illum ea sed mollitia non sint
              voluptates sit rerum veniam.
            </Text>
          </View>
          <View style={[RequestScreenStyle.infoContainer]}>
            <Text style={[RequestScreenStyle.title]}>Images</Text>
            <View style={[RequestScreenStyle.imageContainer]}>
              <View style={[RequestScreenStyle.image]} />
              <View style={[RequestScreenStyle.image]} />
              <View style={[RequestScreenStyle.image]} />
              <View style={[RequestScreenStyle.image]} />
            </View>
          </View>
          <View style={[RequestScreenStyle.infoContainer]}>
            <InputField label="Social Link" labelColor="black" />
          </View>

          <View style={[RequestScreenStyle.requestActionsContainer]}>
            <TouchableOpacity
              style={[
                RequestScreenStyle.requestActionsBtn,
                RequestScreenStyle.requestActionsBtnSuccess,
              ]}
            >
              <Text style={[RequestScreenStyle.requestActionsBtnText]}>
                Accept Deal
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                RequestScreenStyle.requestActionsBtn,
                RequestScreenStyle.requestActionsBtnFailure,
              ]}
            >
              <Text
                style={[
                  RequestScreenStyle.requestActionsBtnText,
                  RequestScreenStyle.requestActionsBtnFailureText,
                ]}
              >
                Decline Payment
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[RequestScreenStyle.infoText]}>
            NB: To you must have the equivalent amount in your wallet to accept
            a payment and all agreements are placed in escrow.
          </Text>
        </View>
      </ScrollView>
    </AppWrapper>
  )
}
