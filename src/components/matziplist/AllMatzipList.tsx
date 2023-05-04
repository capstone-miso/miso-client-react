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

  const matzipTable: [string, string, string, string][] = [
    ["https://ifh.cc/g/HY2lWp.jpg", "시홍쓰", "중식", "❤️"],
    ["https://ifh.cc/g/HnMJm7.jpg", "춘천집", "한식", "❤️"],
    ["https://ifh.cc/g/dKD1wS.png", "개미집투", "한식", "❤️"],
    ["https://ifh.cc/g/1qrGTs.jpg", "오돌이생삼겹", "한식", "❤️"],
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
              {matzipTable.map(([imageUrl, menu, type, like], index) => (
                <Tr key={index}>
                  <Td>
                    <Image
                      boxSize="100px"
                      src={imageUrl}
                      alt={menu}
                      borderRadius="lg"
                    />
                  </Td>
                  <Td>
                    <Heading size="sm">{menu}</Heading>
                    <Text fontSize="xs">{type}</Text>
                  </Td>
                  <Td>{like}</Td>
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
