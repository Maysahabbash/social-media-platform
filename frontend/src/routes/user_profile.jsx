import { Flex, Text, VStack, Box, Heading, HStack, Image, Button, Spacer} from "@chakra-ui/react"; //chakra-ui DocS
import { useEffect, useState } from "react";
import { get_user_profile_data } from "../api/endpoints";
import { SERVER_URL } from "../constants/constant";
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

  const[loading, setLoading] = useState(true) //spins until data is loaded from the backend
  const[bio, setBio] = useState('')
  const [profileImage, SetProfileImage] = useState ('')
  const [followerCount, setFollowerCount] = useState (0)
  const [followingCount, setFollowingCount] = useState (0)

  const [isOurProfile, setIsOurProfile] = useState(false)
  const [following, setFollowing] = useState(false)
 
  useEffect(() =>{

  const fetchData = async () => {
    

    try{
      const data = await get_user_profile_data(username); // Fixed variable name
      setBio(data.bio)
      SetProfileImage(data.profile_image)
      setFollowerCount(data.follower_count)
      setFollowingCount(data.following_count)
      setIsOurProfile(data.is_our_profile)
      setFollowing(data.following)

    } catch {

      console.log('error')
      
    } finally {
      setLoading(false)
    }
    
  }
 
  fetchData()
}, [username]) // Add username to dependency array



  return(
    
     <VStack  w='100%' alignItems={'start'} gap={'35px'}>
      <Heading>@{username}</Heading>
      <HStack gap='20px'> 
        <Box boxSize='150px' border={'1px solid'}borderRadius={'full'} borderColor={'gray.700'} bg='white' overflow={'hidden'}>
        <Image src= {loading? null: `${SERVER_URL}${profileImage}`}  boxSize={"100%"} objectFit={"cover"}/>
        </Box>
        <VStack gap ='20px'>
         <HStack gap='20px' fontSize={'18px'}> 
           <VStack>
             <Text>Follower</Text>
             <Text>{ loading ? '-' : followerCount}0</Text>
           </VStack>
            <VStack >
              <Text>Following</Text>
              <Text>{ loading ? '-' : followingCount}</Text> 
            </VStack>
         </HStack>
         {

          loading?
          <Spacer/>

          :

          isOurProfile ?
          <Button w= '100%'>Edit Profile </Button>
          :
          <Button colorScheme="pink" w= '100%'>{following ? 'unFollow': 'Follow' }</Button>




         }
        </VStack>
      </HStack>
      <Text fontSize={'18px'}>{ loading? '-': bio}</Text>
     </VStack>

  
  )
}

export default UserProfile;