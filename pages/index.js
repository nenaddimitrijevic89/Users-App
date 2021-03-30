import React, { useEffect } from 'react';
import Router from 'next/router';

const Home = () => {
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

export default Home;