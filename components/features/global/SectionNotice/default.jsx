import styled from 'styled-components'
import { measures } from 'const'

const SectionNotice = ({ image }) => {
  return (
    <BodyNotice>
      <ImageNotice src={image} alt="primaryImage"/>
    </BodyNotice>
  )
}

export default SectionNotice

const BodyNotice = styled.div`
  display:flex;
  width: 100%;
  height: auto;
  cursor: pointer;
`
const ImageNotice = styled.img`
  width: 100%;
  height: 380px;
  border-radius: 10px;
  z-index: 10;
  @media (max-width: ${measures.tablet}){
    height: 380px;
  }
  @media (max-width: ${measures.mobile}){
    height: 200px;
  }
`
