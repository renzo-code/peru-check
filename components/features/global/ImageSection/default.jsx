import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { measures } from 'const'

const ImageSection = ({ imageSection }) => {
  const [imgSection, setImage] = useState('')

  const selectTypeImgSection = () => {
    switch (imageSection) {
      case 'Verificadas':
        setImage('https://origin.cronosmedia.glr.pe/large/2021/01/18/lg_6005bbb6ed10ad7d366d85c9.jpg')
        break
      case 'Falsas':
        setImage('https://origin.cronosmedia.glr.pe/large/2021/01/18/lg_6005ba0c8c9b942dde0973d0.jpg')
        break
      case 'Dudosas':
        setImage('https://origin.cronosmedia.glr.pe/large/2021/01/18/lg_6005bb323a3daf28f778ab55.jpg')
        break
      case 'Ojo':
        setImage('https://origin.cronosmedia.glr.pe/large/2021/01/18/lg_6005bb323a3daf28f778ab55.jpg')
        break
      default:
        break
    }
  }

  useEffect(() => {
    selectTypeImgSection()
  }, [imageSection])

  return (
    <Content src={imgSection}/>
  )
}

export default ImageSection

const Content = styled.img`
  height: 100px;
  width: 125px;
  position: absolute;
  top: -20px;
  left: -30px;
  z-index: -5;
  @media (max-width: ${measures.mobile}){
    height: 75px;
    width: 100px;
    top: -5px;
    left: -10px;
  }
`
