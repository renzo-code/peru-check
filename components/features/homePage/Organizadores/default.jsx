import styled from 'styled-components'
import { measures } from 'const'

const Organizadores = () => {
  return (
    <ContainerSponsors id="container-sponsors">
      <TitleSponsors>ORGANIZADORES</TitleSponsors>
      <LogoSponsors>
        <ImgSponsors src="https://origin.cronosmedia.glr.pe/large/2021/02/02/lg_601a2d4eb7d4ad28bd5148ae.jpg"/>
        <ImgSponsors src="https://origin.cronosmedia.glr.pe/large/2021/02/03/lg_601a2dd1349a574c2f1fc154.jpg"/>
        <ImgSponsors src="https://origin.cronosmedia.glr.pe/large/2021/02/02/lg_601a2cf6f65e491f76183265.jpg"/>
      </LogoSponsors>
    </ContainerSponsors>
  )
}

export default Organizadores

const ContainerSponsors = styled.div`
  position: relative;
  margin: 0 auto;
  height: auto;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
`
const TitleSponsors = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: #1f2e27;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 10px;
  &::after{
    position: absolute;
    display: block;
    content: "";
    height: 4px;
    width: 60px;
    background-color: #06af40;
    top: 8px;
    @media (max-width: ${measures.mobile}){
      width: 40px;
    }
  }
  @media (max-width: ${measures.tablet}){
    font-size: 25px;
  }
  @media (max-width: ${measures.mobile}){
    font-size: 20px;
    margin-bottom: 15px;
  }
`
const ImgSponsors = styled.img`
  width: 268px;
  height: 150px;
  object-fit: cover;
  margin-left: 5px;
  @media (max-width: ${measures.tablet}){
    height: 150px;
    margin-bottom: 10px;
  }
  @media (max-width: ${measures.mobile}){
    width: 85%;
    height: 145px;
    margin-bottom: 10px;
  }
`
const LogoSponsors = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  @media (max-width: ${measures.tablet}){
    flex-direction: column;
    align-items: center;
  }
`
