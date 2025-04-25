import { View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import { Heading } from '@/components/ui/heading'
import { Input, InputField } from '@/components/ui/input'
import { Button, ButtonText } from '@/components/ui/button'
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetFlatList, ActionsheetItem, ActionsheetItemText, ActionsheetSectionHeaderText, ActionsheetSectionList } from '@/components/ui/actionsheet'
import { Link } from 'expo-router'

const StudentInfo = () => {
    const [showActionsheet, setShowActionsheet] = React.useState(false)
    const handleClose = () => setShowActionsheet(false)
    const DATA = [
        {
        title: "Gender",
        data: ["Men", "Women", "Boy", "Girl"],
        },
    ]

  
  return (
    <View className='flex-1 justify-center items-center'>
        <View className='bg-white w-[90vw] shadow-md rounded-lg px-3 gap-5 pt-5 pb-10 '>
            <Heading size='xl' className='pb-5'>
                Student Information
            </Heading>

            <View>
                <Text size='sm'>
                    Full Name
                </Text>
                <Input variant="rounded">
                    <InputField placeholder='john doe'/>
                </Input>
            </View>

            <View className='flex-row justify-around items-center'>
                <Text size='sm' className='w-40'>
                    Gender
                </Text>
                <>
                    <Button onPress={() => setShowActionsheet(true)} variant='outline'>
                        <ButtonText>Choose</ButtonText>
                    </Button>
                    <Actionsheet
                        isOpen={showActionsheet}
                        onClose={handleClose}
                        snapPoints={[35]}
                    >
                        <ActionsheetBackdrop />
                        <ActionsheetContent>
                        <ActionsheetDragIndicatorWrapper>
                            <ActionsheetDragIndicator />
                        </ActionsheetDragIndicatorWrapper>
                        <ActionsheetSectionList
                            h="$56"
                            sections={DATA}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => (
                            <ActionsheetItem onPress={handleClose}>
                                <ActionsheetItemText>{item}</ActionsheetItemText>
                            </ActionsheetItem>
                            )}
                            renderSectionHeader={({ section: { title, data } }) => (
                            <ActionsheetSectionHeaderText>
                                {title} ({data.length})
                            </ActionsheetSectionHeaderText>
                            )}
                        />
                        </ActionsheetContent>
                    </Actionsheet>
                    </>
            </View>

            <View className='flex-row justify-around items-center'>
                <Text size='sm' className='w-40'>
                    Department
                </Text>
                <>
                    <Button onPress={() => setShowActionsheet(true)} variant='outline'>
                        <ButtonText>Choose</ButtonText>
                    </Button>
                    <Actionsheet
                        isOpen={showActionsheet}
                        onClose={handleClose}
                        snapPoints={[35]}
                    >
                        <ActionsheetBackdrop />
                        <ActionsheetContent>
                        <ActionsheetDragIndicatorWrapper>
                            <ActionsheetDragIndicator />
                        </ActionsheetDragIndicatorWrapper>
                        <ActionsheetSectionList
                            h="$56"
                            sections={DATA}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => (
                            <ActionsheetItem onPress={handleClose}>
                                <ActionsheetItemText>{item}</ActionsheetItemText>
                            </ActionsheetItem>
                            )}
                            renderSectionHeader={({ section: { title, data } }) => (
                            <ActionsheetSectionHeaderText>
                                {title} ({data.length})
                            </ActionsheetSectionHeaderText>
                            )}
                        />
                        </ActionsheetContent>
                    </Actionsheet>
                    </>
            </View>

            <View className='flex-row justify-around items-center'>
                <Text size='sm' className='w-40'>
                    Year
                </Text>
                <>
                    <Button onPress={() => setShowActionsheet(true)} variant='outline' className='w-40'>
                        <ButtonText>Choose</ButtonText>
                    </Button>
                    <Actionsheet
                        isOpen={showActionsheet}
                        onClose={handleClose}
                        snapPoints={[35]}
                    >
                        <ActionsheetBackdrop />
                        <ActionsheetContent>
                        <ActionsheetDragIndicatorWrapper>
                            <ActionsheetDragIndicator />
                        </ActionsheetDragIndicatorWrapper>
                        <ActionsheetSectionList
                            h="$56"
                            sections={DATA}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => (
                            <ActionsheetItem onPress={handleClose}>
                                <ActionsheetItemText>{item}</ActionsheetItemText>
                            </ActionsheetItem>
                            )}
                            renderSectionHeader={({ section: { title, data } }) => (
                            <ActionsheetSectionHeaderText>
                                {title} ({data.length})
                            </ActionsheetSectionHeaderText>
                            )}
                        />
                        </ActionsheetContent>
                    </Actionsheet>
                    </>
            </View>
            
            <Link href="/home" asChild>
                <Button size='xl'>
                    <ButtonText>Submit Information</ButtonText>
                </Button>
            </Link>

        </View>
    </View>
  )
}

export default StudentInfo