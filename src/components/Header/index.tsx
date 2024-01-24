import { Flex, Heading } from "@chakra-ui/react"
import { FC } from "react";

type HeaderProps = {
    companyName: string;
};

const Header: FC<HeaderProps> = ({companyName}) => {
    return (
        <Flex color='black' padding={6} position="sticky">
            <Heading as='h1' size='lg'>{companyName}</Heading>
        </Flex>
    )
}

export default Header