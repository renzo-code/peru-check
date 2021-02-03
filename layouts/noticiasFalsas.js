import NextHead from 'next/head'
import styled from 'styled-components'
import Footer from '../components/global/footer/default'
import Header from '../components/global/header/default'
import { measures } from 'const'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`

const ContainerMain = styled.main`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding: 30px 10px 0 10px;
  min-height: calc(100vh - 450px);
  /* background-color: peru; */
  font-family: Arial, Helvetica, sans-serif;
  @media(max-width: ${({ measures }) => measures.tablet}) {
    padding: 0 15px;
    /* background-color: red; */
  }
  @media(max-width: ${({ measures }) => measures.mobile}) {
    padding: 10px 15px ;
    /* background-color: blue; */
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <NextHead>
        <title>Perú Check</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* META POR AGREGAR!!! */}
      </NextHead>
      <Wrapper>
        <Header />
        <ContainerMain
          measures={measures}
        >
          {children}
        </ContainerMain>
        <Footer/>
      </Wrapper>

    </>
  )
}

export default Layout
