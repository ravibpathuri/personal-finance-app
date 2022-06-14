import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Img,
} from "@chakra-ui/react";
import { string } from "yup";
import Link from "next/link";
import { useRouter } from "next/router";

const IMAGE =
  "https://media.istockphoto.com/photos/calculator-on-yellow-background-calculation-in-business-finance-or-picture-id1320740500?s=612x612";
const IMAGE1 =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
interface MyCardProps {
  brand: string;
  discription: string;
  image: any;
  color?: string;
  link?: any;
  backgroundImage?: any;
}

const MyCard: React.FunctionComponent<MyCardProps> = (props) => {
  const router = useRouter();
  // const handleClick = () => {
  //   {
  //     <Link href={props.link}>
  //       <a>test</a>
  //     </Link>;
  //   }
  //   console.log("clicked!");
  // };
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          onClick={() => router.push(props.link)}
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,

            // backgroundImage: `url(${IMAGE})`,
            backgroundImage: `url(${props.backgroundImage})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _hover={{}}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          {/* <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={props.image}
            alt="image"
          /> */}
          <Img
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={props.image}
            alt="image"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {props.brand}
          </Text>
          {/* <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            color={props.color}
          >
            {props.discription}
          </Heading> */}

          <Button
            colorScheme={props.color}
            mt={3}
            onClick={() => router.push(props.link)}
          >
            {props.discription}
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default MyCard;
{
}
