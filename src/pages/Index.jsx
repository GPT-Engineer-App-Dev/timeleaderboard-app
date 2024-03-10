import React, { useState } from "react";
import { Box, Button, Container, Heading, Table, Thead, Tbody, Tr, Th, Td, Input, Select, Stack, useToast } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Index = () => {
  const [category, setCategory] = useState("coding");
  const toast = useToast();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const connectToGitHub = () => {
    toast({
      title: "Connect to GitHub",
      description: "This would start the OAuth process to connect the user's GitHub account.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const uploadData = () => {
    toast({
      title: "Upload Data",
      description: "This would trigger the upload process for time-tracking data from ActivityWatch.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Stack direction="column" spacing={6}>
        <Heading as="h1" size="xl">
          Leaderboard
        </Heading>

        <Button leftIcon={<FaGithub />} colorScheme="gray" onClick={connectToGitHub}>
          Connect to GitHub
        </Button>

        <Box>
          <Select placeholder="Select category" onChange={handleCategoryChange} value={category}>
            <option value="coding">Coding</option>
            <option value="design">Design</option>
            <option value="writing">Writing</option>
          </Select>
        </Box>

        <Box as="form" onSubmit={uploadData}>
          <Stack direction="row" spacing={4} align="center">
            <Input type="file" />
            <Button colorScheme="blue" onClick={uploadData}>
              Upload
            </Button>
          </Stack>
        </Box>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Username</Th>
              <Th isNumeric>{category.charAt(0).toUpperCase() + category.slice(1)} Hours</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Mock Data */}
            <Tr>
              <Td>1</Td>
              <Td>user123</Td>
              <Td isNumeric>42</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>codeMaster</Td>
              <Td isNumeric>38</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>devDiva</Td>
              <Td isNumeric>35</Td>
            </Tr>
            {/* More rows... */}
          </Tbody>
        </Table>
      </Stack>
    </Container>
  );
};

export default Index;
