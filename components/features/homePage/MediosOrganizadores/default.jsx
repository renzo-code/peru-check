import styled from 'styled-components'
import { measures } from 'const'

const MediosOrganizadores = () => {
  return (
    <ContainerSponsors id="container-sponsors">
      <TitleSponsors> MEDIOS ORGANIZADORES</TitleSponsors>
      <LogoSponsors>
        <ImgSponsors src="https://origin.cronosmedia.glr.pe/large/2021/01/28/lg_60133b3f0b709356f8121413.jpg"/>
        <ImgSponsors src="https://origin.cronosmedia.glr.pe/large/2021/01/28/lg_60133bd27aa307751f1a85a1.jpg"/>
        <ImgSponsors src="https://origin.cronosmedia.glr.pe/large/2021/01/28/lg_60133b9986fa9639a20dc4e5.jpg"/>
      </LogoSponsors>
    </ContainerSponsors>
  )
}

export default MediosOrganizadores

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
  width: 250px;
  height: 120px;
  object-fit: cover;
  margin-left: 5px;
  @media (max-width: ${measures.tablet}){
    height: 100px;
  }
  @media (max-width: 535px){
    height: 100px;
  }
  @media (max-width: ${measures.mobile}){
    width: 80%;
    height: 105px;
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
