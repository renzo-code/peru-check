import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../../layouts/default'
import { fnQueryContentNotice } from 'graphql/querys/contentNotice.query'
import NoticeCard from 'components/features/global/NoticeCard/default'
import { fonts, FormatUrl, measures } from 'const'
import Articles from 'components/features/global/Articles/default'
import { fnQueryArticlesSlug } from 'graphql/querys/spotlightArticles.query'
import { createApolloClient } from 'graphql/helpers/apollo-client'

const noticia = (props) => {
  const ref = useRef(null)
  const { data: qContentNotice, dataArt: qArticles } = props
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let notice = ''
    qContentNotice?.article?.data.content_elements.forEach((text) => {
      notice += text.content
    })
    ref.current.innerHTML = notice
  }, [qContentNotice])

  useEffect(() => {
    if (qArticles && Object.values(qArticles?.articles?.data).length > 0) {
      setArticles([...articles, ...qArticles?.articles?.data])
    }
  }, [qArticles])

  return (
    <>
      <Layout>
        <TitleNotice>VERIFICACIONES</TitleNotice>
        <NoticeCard
          image={ FormatUrl + qContentNotice?.article?.data.multimedia[0].path.substring(36)}
          titleNotice={qContentNotice?.article?.title}
          drafting={qContentNotice?.article?.data.authors[0].fullname}
          date={qContentNotice?.article?.date.split(' ')[0]}
        />
        <ContainerBodyNotice
          className="detail_notice"
          ref={ref}
        />
        <ContainerArticle>
          {
            qArticles?.articles?.data.map((item, i) => {
              return (
                <Articles
                  href={`/articles${item.slug}`}
                  key={i}
                  imgArticle={FormatUrl + item.data.multimedia[0].path.substring(36)}
                  typeArticle={item.data?.categories[0].name}
                  titleArticle={item.title}
                  draftingArticle={item.data.authors[0]?.fullname}
                  dateArticle={item.date.substring(0, 10)}
                />
              )
            })
          }
        </ContainerArticle>
      </Layout>
    </>
  )
}

export default noticia

noticia.getInitialProps = async (ctx) => {
  let response = null
  let articl = null
  try {
    const { query } = createApolloClient()
    const res = await query({
      query: fnQueryContentNotice(ctx.asPath.substr(9))
    })
    const art = await query({
      query: fnQueryArticlesSlug('/' + ctx.query.noticia[0].toLowerCase())
    })
    console.log('resddd', '/' + ctx.query.noticia[0].toLowerCase())
    response = res
    articl = art
  } catch (error) {
    console.log('error', error)
  }

  return {
    data: response.data,
    dataArt: articl.data
  }
}

const ContainerBodyNotice = styled.div`
  width: 100%;
  height: auto;
  & p {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 17px;
    font-family: ${fonts.initial};
  }
  & blockquote {
    margin: 0 auto !important;
  }
  & a {
    color: black;
    &:hover{
      text-decoration: underline;
    }
  }
  & h2{
    margin-top: 20px;
    font-size: 18px;
  }
`
const TitleNotice = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
  @media (max-width: ${measures.tablet}){
    font-size: 20px;
  }
`
const ContainerArticle = styled.div`
  display: grid;
  grid-template-columns: 225px 225px 225px 225px;
  grid-column-gap: 20px;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 910px){
    grid-template-columns: 48% 48%;
  }
  @media (max-width: ${measures.tablet}){
    grid-row-gap: 20px;
  }
`
