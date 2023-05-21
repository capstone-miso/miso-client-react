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
import React from "react";

function SimilarAgainListTable() {
  interface SimilarMatzip {
    id: number;
    image: string;
    storeName: string;
    category: string;
    address: string;
    like: string;
  }

  const matzipTable: SimilarMatzip[] = [
    {
      id: 0,
      image: "https://ifh.cc/g/HY2lWp.jpg",
      storeName: "시홍쓰",
      category: "중식",
      address: "?",
      like: "❤️",
    },
    {
      id: 1,
      image: "https://ifh.cc/g/1qrGTs.jpg",
      storeName: "오돌이생삼겹",
      category: "한식",
      address: "?",
      like: "❤️",
    },
    {
      id: 2,
      image: "https://ifh.cc/g/dKD1wS.png",
      storeName: "개미집투",
      category: "한식",
      address: "?",
      like: "❤️",
    },
    {
      id: 3,
      image: "https://ifh.cc/g/1qrGTs.jpg",
      storeName: "오돌이생삼겹",
      category: "한식",
      address: "?",
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
              {matzipTable.map((SimilarMatzip) => (
                <Tr key={SimilarMatzip.id}>
                  <Td>
                    <Image
                      boxSize="100px"
                      src={SimilarMatzip.image}
                      alt={SimilarMatzip.storeName}
                      borderRadius="lg"
                    />
                  </Td>
                  <Td>
                    <Heading size="sm">{SimilarMatzip.storeName}</Heading>
                    <Stack mt="5px">
                      <Flex mb="-10px">
                        <Image
                          boxSize="12px"
                          src="https://ifh.cc/g/QXRC8y.png"
                          alt="종류"
                          mr="5px"
                          mt="4px"
                        />
                        <Text fontSize="xs">{SimilarMatzip.category}</Text>
                      </Flex>
                      <Flex>
                        <Image
                          boxSize="12px"
                          src="https://ifh.cc/g/Xjtdvd.png"
                          alt="위치"
                          mr="5px"
                          mt="5px"
                        />
                        <Text fontSize="xs" mt="2px">
                          {SimilarMatzip.address}
                        </Text>
                      </Flex>
                    </Stack>
                  </Td>
                  <Td>{SimilarMatzip.like}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}

export default SimilarAgainListTable;
