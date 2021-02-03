import { colors } from 'const'
import { useRouter } from 'next/router'
import CompartirPost from '../../compartirRedes/CompartirRedes'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { QUERYMENU } from '../../../graphql/querys/menuHeader.query'

import {
  ContainerHeader,
  ContainerInternalHeader,
  MenuHamburguesa,
  Logo,
  MenuSection,
  MenuSectionList,
  RedesSection,
  MenuSectionMobile,
  MenuSectionListMobile
} from './style'

const Header = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { data } = useQuery(QUERYMENU)
  const Grouter = router.route.replace('/', '-')

  return (
    <>
      <ContainerHeader>
        <ContainerInternalHeader>
          <MenuHamburguesa open={open} onClick={() => setOpen(!open)}></MenuHamburguesa>
          <a href="/">
            <Logo>
              <img
                src="/static/images/PeruCheckLogoHeader.svg"
                width={225}
              />
            </Logo>
          </a>
          <MenuSection>
            <MenuSectionList>
                <a href="/verificaciones" className={`MenuItem Ver${Grouter}`}>{data?.menu.links[0].title}</a>
                <a href="/noticiasFalsas" className={`MenuItem Not${Grouter}`}>{data?.menu.links[1].title}</a>
                <a href="/#container-sponsors" className="MenuItem">{data?.menu.links[2].title}</a>
                <a href="/quienesSomos" className={`MenuItem Qui${Grouter}`}>{data?.menu.links[3].title}</a>
                <style jsx>{`
                  .Ver-verificaciones::before, .Not-noticiasFalsas::before, .Qui-quienesSomos::before {
                    content: '';
                    width: 100%;
                    height: 10px;
                    background: ${colors.primary};
                    position: absolute;
                    bottom: -32px;
                  }

                `}</style>
            </MenuSectionList>
          </MenuSection>
          <RedesSection>
            <CompartirPost Url={'https://qa.perucheck.pe/'} Titulo={'perucheck...'} Resumen={'resumen_del_post'} />
          </RedesSection>
        </ContainerInternalHeader>
        <MenuSectionMobile open={open}>
          <MenuSectionListMobile open={open}>
              <a className={`MenuItemMobile MovVer${Grouter}`} href="/verificaciones">{data?.menu.links[0].title}</a>
              <a className={`MenuItemMobile MovNot${Grouter}`} href="/noticiasFalsas">{data?.menu.links[1].title}</a>
              <a className="MenuItemMobile" href="/#container-sponsors">{data?.menu.links[2].title}</a>
              <a className={`MenuItemMobile MovQui${Grouter}`} href="/quienesSomos">{data?.menu.links[3].title}</a>
              <style jsx>{`
                  .MovVer-verificaciones, .MovNot-noticiasFalsas, .MovQui-quienesSomos {
                    position: relative;
                    list-style: none;
                    font-family: 'Roboto', sans-serif;
                    color: ${colors.primary};
                    font-size: 16px;
                    padding: 13px 0 13px 20px;
                    border-bottom: solid 1px #ececec;
                  }

                `}</style>
          </MenuSectionListMobile>
        </MenuSectionMobile>
      </ContainerHeader>
    </>
  )
}

export default Header
