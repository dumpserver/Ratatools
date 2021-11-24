import React from "react";
import { Text, View } from "react-native";

type Rat = {
  rat_name: String,
  rat_date?: Number
}

const RatField = ({rat_name}: Rat, {rat_date}: Rat) => {

  return (
      <Text>{rat_name}</Text>
  )

}

export default RatField