import React, { useEffect } from 'react';
import Router from 'next/router';
import { Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';

const IndexContainer = () => {
  useEffect(() => {
    const { pathname } = Router;
    if(pathname == '/' ){
       Router.push('/users')
    }
  }, [])
  return (
    <Center>
      <Spinner size="xl" marginTop="50px" />
    </Center>
  )
}

export default IndexContainer;