import React from 'react';
import CreateUser from '../../components/CreateUser/CreateUser';
import { Container } from "@chakra-ui/layout";

const CreateUserPage = () => {
    return (
        <Container maxW="container.sm">
            <CreateUser/>
        </Container>
    )
}

export default CreateUserPage;