import styled from 'styled-components'
import { colors, fonts, measures } from 'const/index'

export const ContainerNotice = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border-bottom: 1px solid #DDDDDD;
  max-width: 850px;
  margin: 0 auto;

  @media (max-width: ${measures.tablet}){
    /* height: 590px; */
  }
  @media (max-width: ${measures.mobile}){
    /* height: 380px; */
  }
`
export const TheLast = styled.h1`
  position: relative;
  height: 50px;
  font-size: 35px;
  font-family: ${fonts.initial};
  font-weight: 900;
  padding-top: 20px;
  margin-bottom: 20px;
  z-index: 5;
  color: ${colors.primaryTitle};
  &::after{
    position: absolute;
    display: block;
    content: "";
    height: 4px;
    width: 55px;
    background-color: ${colors.primary};
    top: 0px;
    @media (max-width: ${measures.mobile}){
      width: 78px;
    }
  }
  @media (max-width: ${measures.mobile}){
    letter-spacing: -1px;
    font-size: 30px;
    margin-bottom: 10px;
  }
`
export const TitleNotice = styled.h1`
  padding-top: 20px;
  font-size: 28px;
  letter-spacing: 0.5px;
  text-align: left;
  width: 100%;
  font-family: ${fonts.secundary};
  color: ${colors.primaryTitle};
  &:hover{
    text-decoration: currentcolor solid underline;
    cursor: pointer;
  }
  @media (max-width: ${measures.tablet}){
    font-size: 23px;
  }
  @media (max-width: ${measures.mobile}){
    font-size: 23px;
  }
`
export const FootNotice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 54px;
  @media (max-width: ${measures.mobile}){
    justify-content: left;
    padding-top: 11px;
  }
`
export const Drafting = styled.h5`
  color: #A4A4A4;
  font-size: 14px;
  @media (max-width: ${measures.tablet}){
    font-size: 13px;
  }
`
export const FlexItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 150px;
  height: 20px;
  margin-bottom: 10px;
  @media (max-width: ${measures.mobile}){
    width: 170px;
  }
`
export const Share = styled.h5`
  font-size: 13px;
  color: #A4A4A4;
  @media (max-width: ${measures.mobile}){
    margin-right: 20px;
  }
`
export const IconFacebook = styled.div`
  height: 15px;
  width: 11px;
  color: #2D88FF;
  margin-right: 10px;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
    transition: 0.3s;
  }
`
export const IconTwitter = styled.div`
  height: 15px;
  width: 15px;
  margin-left: 10px;
  color: #1DA1F2;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
    transition: 0.3s;
  }
  @media (max-width: ${measures.mobile}){
    margin-left: 20px;
  }
`
