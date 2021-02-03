import CardImg from '../Articles/components/Card-Img'

import {
  ArticleItem,
  TitleArticle,
  FootNotice,
  Drafting,
  // FlexItems,
  Share
} from './style'

const Articles = ({
  imgArticle,
  draftingArticle,
  titleArticle,
  dateArticle,
  href
  // onClick
}) => {
  return (
    <>
      <ArticleItem>
        <a className="redirections" href={href}>
          <CardImg
            imgArticle={imgArticle}
          />
          <TitleArticle>
            {titleArticle}
          </TitleArticle>
        </a>
          <FootNotice>
            <Drafting>Redacción: {draftingArticle} - {dateArticle}</Drafting>
            <Share>Compartir:</Share>
          {/* <FlexItems>
            <button onClick={onClick}>F</button>
            <button onClick={onClick}>T</button>
          </FlexItems> */}
          </FootNotice>
      </ArticleItem>
      <style jsx>{`
        .redirections{
          text-decoration: none;
          color: black;
        }
      `}</style>
    </>
  )
}

export default Articles
