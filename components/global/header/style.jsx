import styled from 'styled-components'
import { colors, measures } from 'const'

export const ContainerHeader = styled.header`
  width: 100%;
  border-bottom: solid 2px #ececec;
  box-shadow: 0px 0px 5px .5px #ececec;
  @media (max-width: ${measures.tablet}){
    width: 100%;
    justify-content: space-evenly;
    padding-right: 27px;
    border-bottom: none;
  }
  @media (max-width: ${measures.mobile}){
    border-bottom: solid 2px #ececec;
  }
`
export const ContainerInternalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 980px;
  margin: 0 auto; 
  align-items: center;
  height: 80px;
  position: relative;
  @media (max-width: ${measures.tablet}){
    width: 100%;
    justify-content: space-evenly;
    padding-right: 27px;
  }
`
export const MenuSection = styled.div`
  width: 600px;
  @media (max-width: ${measures.tablet}){
    display: none;
  }
`
export const MenuSectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
`
export const MenuItem = styled.a`
  list-style: none;
  font-family: 'Roboto', sans-serif;
  color: #7b7b7b;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
`
export const MenuItemActive = styled.a`
  position: relative;
  list-style: none;
  font-family: 'Roboto', sans-serif;
  color: ${colors.primary};
  font-size: 16px;
  cursor: pointer;
  &::before {
    content: '';
    width: 100%;
    height: 10px;
    background: ${colors.primary};
    position: absolute;
    bottom: -32px;
  }
`
export const MenuHamburguesa = styled.div`
  display: none;
  width: 21px;
  height: 4px;
  position: relative;
  background-color: ${colors.primary};
  cursor: pointer;
  transform-origin: 1px;
  top: ${({ open }) => open ? '30px' : '38px'};
  transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  transition: all 0.3s linear;
  &::before {
    content: '';
    background-color: ${colors.primary};
    width: 21px;
    height: 4px;
    position: absolute;
    top: 7px;
    opacity: ${({ open }) => open ? '0' : '1'};
    transition: all 0.3s linear;
    }
  &::after {
    content: '';
    background-color: ${colors.primary};
    width: 21px;
    height: 4px;
    position: absolute;
    top: ${({ open }) => open ? '0px' : '-7px'};
    transform: ${({ open }) => open ? 'rotate(-90deg)' : 'rotate(0)'};
    transition: all 0.3s linear;
    }
@media (max-width: ${measures.tablet}){
  display: block;
  position: absolute;
  left: 35px;
}
@media (max-width: ${measures.mobile}){
  display: block;
  position: absolute;
  left: 20px;
}
`
export const RedesSection = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-around;
  @media (max-width: ${measures.tablet}){
    display: none;
  }
`
export const Logo = styled.div`
  cursor: pointer;
  @media (max-width: ${measures.tablet}){
    margin: auto;
    margin-left: 65px;
  }
`
export const MenuSectionMobile = styled.div`
  display: none;
  @media (max-width: ${measures.tablet}){
    display: ${({ open }) => open ? 'block' : 'none'};
    height: 171px;
    margin-bottom: 27px;
  }
  @media (max-width: ${measures.mobile}){
    margin-bottom: 0;
  }
`

export const MenuSectionListMobile = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
export const MenuItemActiveMobile = styled.a`
  position: relative;
  list-style: none;
  font-family: 'Roboto', sans-serif;
  color: ${colors.primary};
  font-size: 16px;
  padding: 13px 0 13px 20px;
  border-bottom: solid 1px #ececec;
`
export const MenuItemMobile = styled.a`
  list-style: none;
  font-family: 'Roboto', sans-serif;
  color: #7b7b7b;
  font-size: 16px;
  padding: 13px 0 13px 20px;
  border-bottom: solid 1px #ececec;
`
