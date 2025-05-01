import { Flex, Text, VStack, Box, Heading, HStack, Image, Button} from "@chakra-ui/react"; //chakra-ui DocS

const UserProfile = () => {
  return (
    <Flex w='100' justifyContent={'center'}>
         <VStack w='75%'>
           <Box w='100%' mt='40px'>
              <UserDetails/>
           </Box>
         </VStack>
    </Flex>
  )
}

const UserDetails = () => {
  return(
    
     <VStack  w='100%' alignItems={'start'} gap={'35px'}>
      <Heading>@Maysahabbash</Heading>
      <HStack gap='20px'> 
        <Box boxSize='150px' border={'1px solid'}borderRadius={'full'} borderColor={'gray.700'} bg='white' overflow={'hidden'}>
          <Image src="http://127.0.0.1:8000/api/media/profile_image/32ed91aa83d19e1251ea833a7f736d1b.jpg"  boxSize={"100%"} objectFit={"cover"}/>
        </Box>
        <VStack gap = '20px'>
         <HStack gap='20px'> 
         <VStack>
            <Text>Follwing</Text>
            <Text>0</Text>
          </VStack>
          <VStack >
            <Text>Follwers</Text>
            <Text>0</Text> 
          </VStack>
         </HStack>
         <Button w= '100%'>Edit Profile </Button>
        </VStack>
      </HStack>
      <Text fontSize={'18px'}>Hi its maysa habbash</Text>
     </VStack>

  
  )
}

export default UserProfile;