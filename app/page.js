'use client';
import { useRef } from 'react';
import Header from "../component/Header"
import StickyCursor from "../component/StickyCursor/index"
import Hero from "../component/Hero"
import Work from "../component/Work"

export default function Home() {

  const stickyElement = useRef(null);

  return (
    <>
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <Hero />
      <Work />
      
    </>
  );
}
