import React from 'react';
import EditUser from '../../components/EditUser/EditUser';
import { Container } from "@chakra-ui/layout";

const EditUserPage = () => {
    return (
        <Container maxW="container.sm">
            <EditUser/>
        </Container>
    )
}

export default EditUserPage;