import styled from 'styled-components'
import { measures } from 'const'

const CardImg = ({ imgArticle }) => {
  return (
    <>
      <BodyNotice>
        <ImageNotice src={imgArticle}/>
      </BodyNotice>
    </>
  )
}

export default CardImg

const BodyNotice = styled.div`
  display:flex;
  width: 100%;
  height: auto;
  cursor: pointer;
`
const ImageNotice = styled.img`
  width: 100%;
  height: 145px;
  border-radius: 10px;
  z-index: 10;
  @media (max-width: ${measures.mobile}){
    height: 100px;
  }
`
