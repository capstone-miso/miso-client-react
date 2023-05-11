import {
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
// import axios from "axios";
import React from "react";
// import HeartButton from "../HeartButton";

// interface PostProps {
//   // Specify the types for props here if needed
// }
// const MatzipListContainer = (props: PostProps) => {

const MatzipListContainer = () => {
  // const [like, setLike] = useState<boolean>(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(/* ... */);
  //     if (res.data.type === "liked") {
  //       setLike(true);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const toggleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const res = await axios.post(/* ... */);
  //   setLike(!like);
  // };

  interface Matzip {
    id: number;
    image: string;
    name: string;
    type: string;
    like: string;
  }

  const matzipTable: Matzip[] = [
    {
      id: 0,
      image: "https://ifh.cc/g/HY2lWp.jpg",
      name: "시홍쓰",
      type: "중식",
      like: "❤️",
    },
    {
      id: 1,
      image: "https://ifh.cc/g/1qrGTs.jpg",
      name: "대원칼국수",
      type: "한식",
      like: "❤️",
    },
    {
      id: 2,
      image: "https://ifh.cc/g/dKD1wS.png",
      name: "개미집투",
      type: "한식",
      like: "❤️",
    },
    {
      id: 3,
      image: "https://ifh.cc/g/1qrGTs.jpg",
      name: "오돌이생삼겹",
      type: "한식",
      like: "❤️",
    },
  ];

  return (
    <>
      <Flex
        maxW="100%"
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        alignItems="center"
      >
        <TableContainer pt="30px" maxW="100%">
          <Table w="350px">
            <Tbody>
              {/* <HeartButton like={like} onClick={toggleLike} /> */}
              {matzipTable.map((Matzip) => (
                <Tr key={Matzip.id}>
                  <Td>
                    <Image
                      boxSize="100px"
                      src={Matzip.image}
                      alt={Matzip.name}
                      borderRadius="lg"
                    />
                  </Td>
                  <Td>
                    <Heading size="sm">{Matzip.name}</Heading>
                    <Text fontSize="xs">{Matzip.type}</Text>
                  </Td>
                  <Td>{Matzip.like}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default MatzipListContainer;
