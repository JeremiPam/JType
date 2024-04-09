import { Button, HStack } from "@chakra-ui/react";

const wordsCategory = ({ onClick: onClick }: { onClick: () => void }) => {
  let count = 10;
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
        <Button>10</Button>
        <Button>15</Button>
        <Button>20</Button>
      </HStack>
    </>
  );
};

export default wordsCategory;
