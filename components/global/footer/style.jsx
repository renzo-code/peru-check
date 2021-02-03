import styled from 'styled-components'
import { colors, measures } from 'const'

export const ContainerFooter = styled.footer`
	display: flex;
	justify-content: center;
	position: relative;
	width: 100%;
	min-height: 370px;
	background-color: #1f3026;
	padding: 50px 20px;
	align-items: center;
`

export const Contact = styled.div`
	display: flex; 
  justify-content: center;
	width: 100%;
	@media (max-width: ${measures.tablet}) {
		display: block;
		& > .center{
			margin: 0 auto;
			padding-left: 0;
			&:nth-child(2) {
				margin-top: 50px;
			}
		}
	}
`

export const ContentLogo = styled.div`
	width: 60%;
	height: 80%;
	@media (max-width: ${measures.tablet}){
		width: 100%;
		& > .img-perucheck{
			text-align: center;
		}
	}
`

export const SectionsFooter = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 25px;
  margin-right: 30px;
	width: 100%;
	color: #cedbd3;
	font-family: Arial, Helvetica, sans-serif;
	@media (max-width: ${measures.tablet}) {
		justify-content: space-evenly;
		margin-right: 0;
		& > .r-section2{
			padding-right: 0;
		}
	}
`

export const Section2 = styled.div`
	padding-right: 5%;
`

export const ItemSections = styled.h5`
	cursor: pointer;
	padding-top: 20px;
	font-size: 15px;
	&:hover{
    text-decoration: currentcolor solid underline;
    cursor: pointer;
  }
	@media (max-width: ${measures.mobile}){
		font-size: 12px;
	} 
`

export const ContentContact = styled.div`
	height: 80%;
  width: 300px;
	padding-left: 20px;
`

export const TitleContact = styled.h2`
	position: relative;
	color: white;
	font-family: Arial, Helvetica, sans-serif;
	height: 45px;
	padding-top: 15px;
	margin-bottom: 15px;
  font-size: 30px;
  letter-spacing: 1.5px;
  &::after{
    content: "";
    position: absolute;
    display: block;
    height: 4px;
    width: 50px;
    background-color: ${colors.primary};
    top: 0px;
		@media (max-width: ${measures.tablet}) {
			top: 0px;
			left: 25px;
		}
  }
	@media (max-width: ${measures.tablet}){
		text-align: center;
	}
`

export const GmailContact = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	color: ${colors.primary};
	cursor: pointer;
	padding-top: 20px;
	@media (max-width: ${measures.tablet}) {
		justify-content: center;
	}
`

export const UserGmail = styled.h6`
	display: flex;
	align-items: center;
	padding-left: 10px;
	font-size: 14px;
	color: #cedbd3;
	height: 14px;
	font-family: Arial, Helvetica, sans-serif;
	@media (max-width: ${measures.mobile}) {
		font-size: 12px;
	}
`

export const ContCopyright = styled.div`
	line-height: 50px;
  padding-top: 40px;
`

export const Copyright = styled.h6`
	text-align: center;
	color: #cedbd3;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 15px;
	@media (max-width: ${measures.mobile}) {
		font-size: 12px;
	}
`
