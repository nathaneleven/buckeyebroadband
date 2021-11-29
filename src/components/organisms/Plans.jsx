import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex} from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'

const Plans = () => {
    return (
<>
<Box align="center" bgColor="#fff" p={{base:"10", md:"0 10 "}}>
    <Heading color="#002c6d" mb="10">Buckeye Broadband plans and deals</Heading>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="xl" bgColor="#fff" border="1px solid #d1d1d1" align="center" direction="column" >
      <Heading pt="30px" as="h3" fontSize="2xl">
      STARTER INTERNET
      </Heading>
      <Text>
      25Mbps
      </Text>
      <Box bgColor="#fff" w="100%" pt="5">

        <Flex align="start" color="#002c6d" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">19</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <Text pb="20px">
      Power 1-3 devices with this 25 Mbps speed. This will give you web and email access and help you keep up with social media.
      </Text>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
    
    <Flex rounded="md" boxShadow="xl" bgColor="#fff" border="1px solid #d1d1d1" align="center" direction="column" >
      <Heading pt="30px" as="h3" fontSize="2xl">
      ESSENTIAL INTERNET
      </Heading>
      <Text>
      100Mbps
      </Text>
      <Box color="#fff" w="100%" pt="5">

        <Flex align="start" color="#002c6d" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">39</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <Text pb="20px">
      Power 4-7 devices at one time with this essential speed. This will give you a great internet experience without delays and buffering. Includes free unlimited data for 6 months.
      </Text>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" boxShadow="xl" bgColor="#fff" border="1px solid #d1d1d1" align="center" direction="column" >
      <Heading pt="30px" as="h3" fontSize="2xl">
      ULTIMATE INTERNET
      </Heading>
      <Text>
      200Mbps
      </Text>
      <Box color="#fff" w="100%" pt="5">

        <Flex align="start" color="#002c6d" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">49</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <Text pb="20px">
      Power 10-15 devices at one time with this ultimate speed. This will give you the ability to stream on multiple devices!
      </Text>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
  </SimpleGrid>
</Box>
</>
    )}



export default Plans