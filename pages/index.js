import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Content from '@/components/Content'





export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Emmanuel Full-stack Developer Let's Collaborate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div>
          <Main />
          <About />
          <Skills />
          <Projects />
          <Content />
        </div>
      
    </>
  )
}
