import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { measures } from 'const'
import { QUERYMENU } from '../../../graphql/querys/menuHeader.query'

import {
  ContainerFooter,
  Contact,
  ContentLogo,
  SectionsFooter,
  Section2,
  ContentContact,
  TitleContact,
  GmailContact,
  ContCopyright,
  Copyright,
  UserGmail
} from './style'

const Footer = () => {
  const { data } = useQuery(QUERYMENU)
  return (
		<>
			<ContainerFooter>
        <div className="cont-internal-footer">
          <Contact className="renzo">
            <ContentLogo className="center">
              <div className="img-perucheck">
                <a href="/">
                  <img src="/static/images/PeruCheckLogoFooter.svg" width={230}/>
                </a>
              </div>
              <SectionsFooter>
                <div>
                  <a className="ItemSections" href="/">
                    Inicio
                  </a>

                  <a className="ItemSections" href="/verificaciones">{data?.menu.links[0].title}</a>
                  <a className="ItemSections" href="/noticiasFalsas"> {data?.menu.links[1].title}</a>
                </div>
                <Section2 className="r-section2">
                  <a className="ItemSections" href="/#container-sponsors">
                    {data?.menu.links[2].title}
                  </a>
                  <a className="ItemSections" href="/quienesSomos">
                    {data?.menu.links[3].title}
                  </a>
                  <a className="ItemSections">
                    Politica de privacidad y cookies
                  </a>
                </Section2>
              </SectionsFooter>
            </ContentLogo>
            <ContentContact className="center">
              <TitleContact>CONTÁCTANOS</TitleContact>
              <GmailContact>
								<div className="content-awesome">
                  <FontAwesomeIcon icon={faEnvelope} />
								</div>
                <UserGmail>informacion@perucheck.pe</UserGmail>
              </GmailContact>
              <GmailContact>
								<div className="content-awesome r-contact">
                  <FontAwesomeIcon icon={faEnvelope} />
								</div>
                <UserGmail>direccion@perucheck.pe</UserGmail>
              </GmailContact>
              <GmailContact>
								<div className="content-awesome rf-contact">
                  <FontAwesomeIcon icon={faEnvelope} />
								</div>
                <UserGmail>validacion@perucheck.pe</UserGmail>
              </GmailContact>
            </ContentContact>
          </Contact>
          <ContCopyright>
            <Copyright>© Todos los derechos reservados 2020</Copyright>
          </ContCopyright>
        </div>
      </ContainerFooter>
			<style jsx>{`
				.content-awesome{
					font-size: 20px;
					height: 13px;
					width: 18px;
				}
        .img-perucheck{
          cursor: pointer;
        }
          @media (max-width: ${measures.tablet}){
            .r-contact{
              margin-right: 16px;
            }
            .rf-contact{
              margin-right: 9px;
            }
          }
        .cont-internal-footer{
          width: 1000px;
          margin: 0 auto;
        }
			`}
			</style>
		</>
  )
}

export default Footer
