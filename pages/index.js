import React, { useEffect } from 'react';
import Router from 'next/router';

const IndexContainer = () => {
  useEffect(() => {
    const { pathname } = Router;
    if(pathname == '/' ){
       Router.push('/users')
    }
  }, [])
  return (
    <>Loading...</>
  )
}

export default IndexContainer;