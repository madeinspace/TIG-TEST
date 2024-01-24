import { Center, Spinner } from "@chakra-ui/react";
import { FC } from "react";

type spinnerProps = {
  size?: string
}

const LoadingSpinner: FC<spinnerProps> = ({size='xl'}) => {
  return (
    <Center height="100vh">
      <Spinner size={size} />
    </Center>
  );
};

export default LoadingSpinner;