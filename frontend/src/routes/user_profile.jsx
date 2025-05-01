import { Flex, Text, VStack, Box, Heading, HStack, Image, Button} from "@chakra-ui/react"; //chakra-ui DocS
import { useEffect, useState } from "react";
import { get_user_profile_data } from "../api/endpoints";

const UserProfile = () => {
  const get_username_from_url = () => {
    const url_split = window.location.pathname.split('/');
    return url_split[url_split.length-1];
  }
  
  const [username, setUsername] = useState(get_username_from_url());
  
  useEffect(() => {
    setUsername(get_username_from_url());
  }, []); // Consider adding location dependency if URL changes matter

  return (
    <Flex w='100%' justifyContent={'center'}>
      <VStack w='75%'>
        <Box w='100%' mt='40px'>
          <UserDetails username={username}/>
        </Box>
      </VStack>
    </Flex>
  );
}
const UserDetails = ({username}) => {

  useEffect(() =>{
    const fetchData = async () => {
      const data = await get_user_profile_data(username); // Fixed variable name
      console.log(data);
    
    }
    fetchData()    

  }, [])


  return(
    
     <VStack  w='100%' alignItems={'start'} gap={'35px'}>
      <Heading>@{username}</Heading>
      <HStack gap='20px'> 
        <Box boxSize='150px' border={'1px solid'}borderRadius={'full'} borderColor={'gray.700'} bg='white' overflow={'hidden'}>
          <Image src="http://127.0.0.1:8000/api/media/profile_image/32ed91aa83d19e1251ea833a7f736d1b.jpg"  boxSize={"100%"} objectFit={"cover"}/>
        </Box>
        <VStack gap = '20px'>
         <HStack gap='20px'> 
         <VStack>
            <Text>Following</Text>
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