import React, { useState } from 'react'
import styled from 'styled-components'
import { measures } from 'const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Card = ({ data1, data2 }) => {
  console.log(data1)
  console.log(data2?.external?.data[0].slug)
  const [searchMenu, setSearchMenu] = useState('')
  const OnInput = e => {
    e.persist()
    setSearchMenu(e.target.value)
  }

  const handlerSearch = e => {
    e.preventDefault()

    if (searchMenu !== '') {
      window.location.href = `/search?searching=${searchMenu}`
    }
  }
  return (
    <>
      <ContainerCard>
        <BgImg src="/static/images/star.png" width={95} height={90}/>
        <TitleCard>LAS MÁS VISTAS</TitleCard>
        <ListCard><a href={`${data2?.external?.data[0].slug}`}>{data2?.external?.data[0].title}</a></ListCard>
        <ListCard><a href={`${data2?.external?.data[1].slug}`}>{data2?.external?.data[1].title}</a></ListCard>
        <ListCard><a href={`${data2?.external?.data[2].slug}`}>{data2?.external?.data[2].title}</a></ListCard>
        <ListCard><a href={`${data2?.external?.data[3].slug}`}>{data2?.external?.data[3].title}</a></ListCard>
        <ListCard><a href={`${data2?.external?.data[4].slug}`}>{data2?.external?.data[4].title}</a></ListCard>
      </ContainerCard>
      <ContainerCard>
        <BgImg src="/static/images/search.png" width={95} height={95}/>
        <TitleCard>BÚSQUEDA</TitleCard>
        <form action="" id="form1" onSubmit={handlerSearch}>
            <InputCard type="text" id="search_input" onInput={OnInput} placeholder="Escribe aqui y presiona enter"/>
        </form>
        <ButtonCard type="submit" form="form1" value="Submit">Buscar <IconSearch><FontAwesomeIcon icon={faSearch}/></IconSearch></ButtonCard>
      </ContainerCard>
      <ContainerCard>
        <BgImg src="/static/images/info.png" width={37} height={80}/>
        <TitleCard>QUIÉNES SOMOS</TitleCard>
        <TextCard>{data1?.spotlight?.data[3].data[0].value}</TextCard>
        <ButtonCard>Haz click aqui</ButtonCard>
      </ContainerCard>
    </>
  )
}

export default Card

const ContainerCard = styled.div`
  position: relative;
  margin-left: auto;
  margin-bottom: 20px;
  height: auto;
  width: 100%;
  font-size: 16px;
  padding: 30px 15px 10px;
  background-color: white;
  border-radius: 5px;
  -moz-box-shadow: 0px 0px 10px #ccc;
  -webkit-box-shadow: 0px 0px 10px #ccc;
  box-shadow: 0px 0px 10px #ccc;
  z-index: 0;
  @media (max-width: ${measures.tablet}){
    margin-top: 20px;
  }
  @media (max-width: ${measures.mobile}){
    width: 100%;
  } 
`
const TitleCard = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  color: #1f2e27;
  font-size: 20px;
  font-weight: 900;
  &::after{
    position: absolute;
    display: block;
    content: "";
    height: 4px;
    width: 60px;
    background-color: #06af40;
    top: 14px;
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
const TextCard = styled.p`
  font-family: 'Roboto',sans-serif;
  color: #7b7b7b;
  margin: 10px 0;
`
const ButtonCard = styled.button`
  position: relative;
  margin-top: 10px;
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  background-color: #06af40;
  color: white;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`
const ListCard = styled.li`
  border-bottom: 1px solid gray;
  list-style: none;
  counter-increment: li;
  padding: 10px 0 10px 45px;
  min-height: 65px;
  &::before {
  	content: counter(li);
  	color: white;
  	background-color: #06af40;
  	display: inline-block;
  	position: absolute;
  	border-radius: 20px;
  	padding: 8px;
  	left: 18px;
    width: 30px;
    height: 30px;
    text-align: center;
  }
  &:last-child {
  	border: none;
  }
  & a {
  	text-decoration: none;
  	font-family: 'Roboto',sans-serif;
  	color: #7b7b7b;
  }
`
const BgImg = styled.img`
  position: absolute;
  z-index: -1;
`
const IconSearch = styled.div`
  position: relative;
  top: 2px;
  width: 14px;
  margin-left: 4px;
  display: inline-block;
`
const InputCard = styled.input`
  font-family: 'Roboto',sans-serif;
  border: none;
  outline: none;
  background: none;
  border-bottom: 1px solid gray;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 5px; 
`
