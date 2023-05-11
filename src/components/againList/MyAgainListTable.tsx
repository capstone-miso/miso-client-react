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
import React from "react";

function MyAgainListTable() {
  interface MyMatzip {
    id: number;
    image: string;
    name: string;
    type: string;
    like: string;
  }

  const matzipTable: MyMatzip[] = [
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
      name: "오돌이생삼겹",
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
        <TableContainer maxW="100%">
          <Table w="350px">
            <Tbody>
              {matzipTable.map((MyMatzip) => (
                <Tr key={MyMatzip.id}>
                  <Td>
                    <Image
                      boxSize="100px"
                      src={MyMatzip.image}
                      alt={MyMatzip.name}
                      borderRadius="lg"
                    />
                  </Td>
                  <Td>
                    <Heading size="sm">{MyMatzip.name}</Heading>
                    <Text fontSize="xs">{MyMatzip.type}</Text>
                  </Td>
                  <Td>{MyMatzip.like}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}

export default MyAgainListTable;
