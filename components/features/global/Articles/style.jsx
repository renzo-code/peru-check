import styled from 'styled-components'
import { measures, fonts } from 'const'

export const ArticleItem = styled.div`
  width: 100%;
  margin: 15px 0px;
  min-height: 200px;
  background-color: white;
  @media (max-width: ${measures.mobile}){
    min-width: 155px;
    min-height: 200px;
    margin-bottom: 0px;
  }
`
export const TitleArticle = styled.h1`
  font-size: 18px;
  padding-top: 10px;
  font-family: ${fonts.secundary};
  &:hover{
    text-decoration: currentcolor solid underline;
    cursor: pointer;
  }
`
export const FootNotice = styled.div`
  padding-top: 10px;
  width: 100%;
  height: 55px;
`
export const Drafting = styled.h5`
  color: #A4A4A4;
  font-size: 13px;
`
export const FlexItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 15px;
  width: 100px;
  height: 20px;
`
export const Share = styled.h5`
  font-size: 13px;
  color: #A4A4A4;
`
export const IconFacebook = styled.div`
  height: 15px;
  width: 11px;
  color: #2D88FF;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
    transition: 0.3s;
  }
`
export const IconTwitter = styled.div`
  height: 15px;
  width: 15px;
  margin-left: 5px;
  color: #1DA1F2;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
    transition: 0.3s;
  }
`
