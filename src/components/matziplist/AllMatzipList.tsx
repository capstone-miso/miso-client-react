import {
  Flex,
  Heading,
  Image,
  Stack,
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
    storeId: number;
    image: string;
    storeName: string;
    category: string;
    address: string;
    like: string;
  }

  const matzipTable: Matzip[] = [
    {
      storeId: 0,
      image: "https://ifh.cc/g/HY2lWp.jpg",
      storeName: "시홍쓰",
      category: "중식",
      address: "gd",
      like: "❤️",
    },
    {
      storeId: 1,
      image: "https://ifh.cc/g/1qrGTs.jpg",
      storeName: "대원칼국수",
      category: "한식",
      address: "",
      like: "❤️",
    },
    {
      storeId: 2,
      image: "https://ifh.cc/g/dKD1wS.png",
      storeName: "개미집투",
      category: "한식",
      address: "",
      like: "❤️",
    },
    {
      storeId: 3,
      image: "https://ifh.cc/g/1qrGTs.jpg",
      storeName: "오돌이생삼겹",
      category: "한식",
      address: "",
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
          <Flex>
            <Table w="340px">
              <Tbody>
                {/* <HeartButton like={like} onClick={toggleLike} /> */}
                {matzipTable.map((Matzip) => (
                  <Tr key={Matzip.storeId}>
                    <Td>
                      <Image
                        boxSize="100px"
                        src={Matzip.image}
                        alt={Matzip.storeName}
                        borderRadius="lg"
                        ml="-20px"
                      />
                    </Td>
                    <Td>
                      <Flex>
                        <Heading ml="-95px" mb="10px" size="sm">
                          {Matzip.storeName}
                        </Heading>
                      </Flex>
                      <Stack ml="-95px" mt="5px">
                        <Flex mb="-10px">
                          <Image
                            boxSize="12px"
                            src="https://ifh.cc/g/QXRC8y.png"
                            alt="종류"
                            mr="5px"
                            mt="4px"
                          />
                          <Text fontSize="xs">{Matzip.category}</Text>
                        </Flex>
                        <Flex>
                          <Image
                            boxSize="12px"
                            src="https://ifh.cc/g/Xjtdvd.png"
                            alt="위치"
                            mr="5px"
                            mt="5px"
                          />
                          <Text fontSize="xs">{Matzip.address}</Text>
                        </Flex>
                      </Stack>
                    </Td>
                    <Td w="60px">
                      <Text>{Matzip.like}</Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Flex>
        </TableContainer>
      </Flex>
      <Stack mb="60px" />
    </>
  );
};

export default MatzipListContainer;
