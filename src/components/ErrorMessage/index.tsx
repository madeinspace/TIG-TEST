import { Center, Text } from "@chakra-ui/react";
import { FC } from "react";

type messageProps = {
    message:string,
    size?:string
}

const ErrorMessage: FC<messageProps> = ({message, size='3xl'}) => {
  return (
    <Center height="100vh">
        <Text fontSize={size} color='red'>
            {message}
        </Text>
    </Center>
  );
};

export default ErrorMessage;