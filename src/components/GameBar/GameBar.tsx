import { Input } from "@chakra-ui/react";
import { useState } from "react";

const GameBar = ({ placeHolder }: { placeHolder: string }) => {
  const [value, setValue] = useState(placeHolder);
  return (
    <Input
      placeholder={placeHolder}
      isInvalid={!(value === placeHolder)}
      onChange={(val) => setValue(val.target.value)}
    ></Input>
  );
};

export default GameBar;
