// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import SectionNotice from 'components/features/global/SectionNotice/default'
import Load from 'components/features/global/Load/default'
import CompartirRedes from 'components/compartirRedes/CompartirRedes'

import {
  ContainerNotice,
  // TheLast,
  TitleNotice,
  FootNotice,
  Drafting,
  FlexItems,
  Share
  // IconFacebook,
  // IconTwitter
} from './style'

const NoticeCard = ({
  href,
  image,
  titleNotice,
  drafting,
  date,
  loadCard,
  urlRedes
}) => {
  if (loadCard) {
    return (
      <Load
      />
    )
  }

  return (
    <>
      <ContainerNotice load={loadCard} >
        <a className="redirections" href={href}>
          <SectionNotice
            image={image}
          />
          <TitleNotice>
            {titleNotice}
          </TitleNotice>
        </a>
        <FootNotice>
          <Drafting>Redacción: {drafting} - {date}</Drafting>
            {/* <IconFacebook>
              <FontAwesomeIcon icon={faFacebookF}/>
              </IconFacebook>
              <IconTwitter>
              <FontAwesomeIcon icon={faTwitter}/>
            </IconTwitter> */}
        </FootNotice>
          <FlexItems>
            <Share>Compartir:</Share>
            <CompartirRedes
              Url={urlRedes}
              Titulo='PeruCheck ...'
              Resumen='Resumen'
            />
          </FlexItems>
      </ContainerNotice>
      <style jsx>{`
        .redirections{
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default NoticeCard
