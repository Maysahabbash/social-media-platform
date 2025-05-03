import { VStack, Text, HStack, Flex, Box , Spinner} from "@chakra-ui/react";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { toggleLike } from "../api/endpoints";

import { useState } from "react";

const Post = ({id, username, description, formatted_date, liked, like_count}) => {

const [clientLiked, setClientLiked] = useState(like_count);
const [clientLikeCount, setClientLikeCount] = useState(like_count);
const [isLikeLoading, setIsLikeLoading] = useState(false);

const handleToggleLike = async () => {
    try {
        setIsLikeLoading(true);
        const { data } = await toggleLike(id);
        
        setClientLiked(data.now_liked);
        setClientLikeCount(data.new_like_count);
    } catch (error) {
        console.error("Like toggle failed:", error);
        setClientLiked(prev => !prev);
        setClientLikeCount(prev => clientLiked ? prev - 1 : prev + 1);
    } finally {
        setIsLikeLoading(false);
    }
};
 
    return (
        <VStack w='400px' h='400px' border='1px solid' borderColor='gray.400' borderRadius='8px'>
            <HStack w='100%' flex='1' borderBottom='1px solid' borderColor='gray.300' p='0 20px' bg='gray.50' borderRadius='8px 8px 0 0'>
                <Text>@{username}</Text>
            </HStack>
            <Flex flex='6' w='100%' h='100%' justifyContent='center' alignItems='center'>
                <Text textAlign='center'>{description}</Text>
            </Flex>
            <Flex flex='2' w='100%' justifyContent='center' alignItems='center' borderTop='1px solid' bg='gray.50' borderColor='gray.400' borderRadius='0 0 8px 8px'>
                <HStack w='90%' justifyContent='space-between'>
                <HStack>
    <Box>
        {isLikeLoading ? (
            <Spinner size="sm" /> // Loading indicator
        ) : clientLiked ? (
            <Box 
                color='red' 
                cursor={isLikeLoading ? 'not-allowed' : 'pointer'}
                onClick={!isLikeLoading ? handleToggleLike : undefined}
            >
                <FaHeart />
            </Box>
        ) : (
            <Box 
                cursor={isLikeLoading ? 'not-allowed' : 'pointer'}
                onClick={!isLikeLoading ? handleToggleLike : undefined}
            >
                <FaRegHeart />
            </Box>
        )}
    </Box>
    <Text>{isLikeLoading ? '...' : clientLikeCount}</Text>
</HStack>
<Text>{formatted_date}</Text>                </HStack>
            </Flex>
        </VStack>
    )
}

export default Post;