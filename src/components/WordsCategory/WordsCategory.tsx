import { Button, HStack } from "@chakra-ui/react";

const wordsCategory = ({
  onClick: onClick,
}: {
  onClick: (amount: number) => void;
}) => {
  // const [tempWord, setTempWord] = useState("");
  // useEffect(() => {
  //   for (let i = 0; i < count; i++) {
  //     apiClient
  //       .get<{ word: string }>("/words")
  //       .then((res) => setTempWord(res.data.word));
  //     onClick(tempWord);
  //   }
  // }, [count]);
  return (
    <>
      <HStack justifyContent={"center"}>
        <Button onClick={() => onClick(5)}>5</Button>
        <Button onClick={() => onClick(10)}>10</Button>
        <Button onClick={() => onClick(15)}>15</Button>
      </HStack>
    </>
  );
};

export default wordsCategory;
