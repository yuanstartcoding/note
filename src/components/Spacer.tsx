import React from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-paper'

type SpacerProps = {
  size: number
  direction?: 'vertical' | 'horizontal'
  color?: string
  hasDivider?: boolean
}

export const Spacer = ({ size, direction = 'vertical', color, hasDivider = false }: SpacerProps) => {
  return (
    <>
      <View
        style={[
          direction === 'vertical' ? { height: size } : { width: size },
          { backgroundColor: color ? color : undefined },
        ]}>
        {hasDivider && <Divider />}
      </View>
    </>
  )
}
