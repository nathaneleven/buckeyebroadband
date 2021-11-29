import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack, List, ListIcon, ListItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CheckIcon } from '@chakra-ui/icons'

const Whatyouget = () => {
    return (
        <>
        <Stack bgColor="#f1f1f1" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading color="#002c6d" mb="24px">
                    What you get with Buckeye Broadband
                    </Heading>
                    <List color="#000000"spacing={2}>
                        <ListItem>
                            <ListIcon as={CheckIcon}  />
                            Reliable, fast connection: from 25 Mpbs to Gig we have the fastest Internet in town
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} />
                            In-Home Wi-Fi
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} />
                            Local, 24/7 customer service: we are always here on the phone or online
                        </ListItem>
                    </List>
                </Box>
        </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/what-you-get-buckeye-broadband-image.jpg" alt="WHat you get Image Buckeye Broadband" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default Whatyouget