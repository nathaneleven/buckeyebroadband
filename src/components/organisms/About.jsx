import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const About = () => {
    return (
        <>
        <Stack bgColor="#fff" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading color="#002c6d" mb="24px">
                    About Buckeye Broadband
                    </Heading>
                    <Text>
                    Buckeye Broadband is a local company taking care of customers in Northwest Ohio, Southeast Michigan, and Erie County. It’s been actively investing in Northwest Ohio communities for more than 50 years.<br/><br/>

                    Buckeye Broadband internet offers internet plans ranging from 25 to 1,000 Mbps, where available, plus cable TV packages including local channels, sports, movies and more. 
                    </Text>
                </Box>
        </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/about-buckeye-broadband-image.jpg" alt="About Image Buckeye Broadband" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About