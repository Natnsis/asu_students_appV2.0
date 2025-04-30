import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Sidebar } from '@/components/Sidebar'
import { Heading } from '@/components/ui/heading'
import { Button, ButtonIcon } from '@/components/ui/button'
import { GripVerticalIcon } from '@/components/ui/icon'

const Curriculum = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      alignItems: 'center',
      paddingBottom: 10,
    }}
    className="w-full flex-col">
      <View className="flex-row justify-between items-center p-4 bg-white w-full">
        <View className="gap-2 flex-row items-center w-full">
          <Sidebar />
          <Heading size="lg">Curriculum</Heading>
        </View>
        <Button variant="link">
          <ButtonIcon as={GripVerticalIcon} />
        </Button>
      </View>
    </ScrollView>
  )
}

export default Curriculum