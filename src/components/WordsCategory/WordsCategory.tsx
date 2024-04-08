import { HStack } from "@chakra-ui/react";
import apiClient from "./apiClient";

const wordsCategory = () => {
  apiClient
    .get<{ word: string }>("/words")
    .then((res) => console.log(res.data.word));
  return <HStack>asdasd</HStack>;
};

export default wordsCategory;
