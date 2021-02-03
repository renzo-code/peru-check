import { useQuery } from '@apollo/client'
import { QUERY_SPONSORS } from 'graphql/querys/spotlightSponsors.query'
import styled from 'styled-components'
import { measures } from 'const'

const Sponsors = () => {
  const { data } = useQuery(QUERY_SPONSORS)

  return (
    <>
      <ContainerSponsors id="container-sponsors">
        <TitleSponsors>ALIADOS PARTICIPANTES</TitleSponsors>
        <LogoSponsors >
          {
            data?.spotlight.data[0].data.map((item, i) => {
              return (
              <ImgSponsors key={i} src={item.fields[2].value.url}/>
              )
            })
          }
        </LogoSponsors>
      </ContainerSponsors>
    </>
  )
}

export default Sponsors

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
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: 900;
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
  width: 100%;
  height: 110px;
`
const LogoSponsors = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 15px;
  width: 100%;
  @media (max-width: ${measures.tablet}){
    grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  }
  @media (max-width: ${measures.mobile}){
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
`
