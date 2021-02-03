import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../../layouts/default'
import NoticeCard from 'components/features/global/NoticeCard/default'
import { measures, FormatUrl } from 'const'
import Articles from 'components/features/global/Articles/default'
import BtnSeeMore from 'components/features/homePage/ButtonSeeMore/default'
import Card from 'components/features/homePage/card/default'
import { QUERY_PORTADA_V } from '../../graphql/querys/spotlightPortada.query'
import { ContainerArticle } from '../index'
import { createApolloClient } from 'graphql/helpers/apollo-client'
import { fnQueryArticles } from 'graphql/querys/spotlightArticles.query'
import { QUERYQUIENESSOMOS, QUERYLOSMASVISTOS } from 'graphql/querys/spotlightCards.query'

const trueNews = (props) => {
  const { data, loading: loadPort, dataArticl, loadingArticl, data1, data2 } = props
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [existData, setExistData] = useState(true)

  useEffect(() => {
    if (dataArticl && Object.values(dataArticl?.articles?.data).length > 0) {
      setArticles([...articles, ...dataArticl?.articles?.data])
    }
  }, [dataArticl])

  useEffect(() => {
    if (dataArticl?.articles?.total && dataArticl?.articles?.total === articles.length) {
      setExistData(false)
    }
  }, [dataArticl, articles])

  return (
    <>
      <Layout>
        <PositionSection>
          <SectionNotice>
            <NoticeCard
              loadCard={loadPort}
              href = {data?.spotlight?.data[0].data[0].fields[3].value}
              image={FormatUrl + data?.spotlight?.data[0].data[0].fields[4].value.url.substring(36)}
              titleNotice = {data?.spotlight?.data[0].data[0].fields[1].value}
              drafting = {data?.spotlight?.data[0].data[0].fields[2].value.split('_')[0]}
              date = {data?.spotlight?.data[0].data[0].fields[2].value.split('_')[1]}
            />
            <ContainerArticle>
              {
                articles.map((item, i) => {
                  return (
                    <Articles
                      href={`/articles${item.slug}`}
                      key={i}
                      pageGql={page}
                      setExistDataGql={setExistData}
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
            <ContentBtnSeeMore>
              <BtnSeeMore
                nameBtn="Ver más"
                onClick={() => setPage((prev) => prev + 1)}
                disabled={!existData}
                load={loadingArticl}
              />
            </ContentBtnSeeMore>
          </SectionNotice>
          <SectionCards>
            <Card data1={data1} data2={data2} />
          </SectionCards>
        </PositionSection>
      </Layout>
    </>
  )
}

export default trueNews

trueNews.getInitialProps = async (ctx) => {
  let response = null
  let articl = null
  let qQSomos = null
  let qMasVistos = null

  try {
    const { query } = createApolloClient()
    const res = await query({
      query: QUERY_PORTADA_V
    })
    const art = await query({
      query: fnQueryArticles()
    })
    const qSomos = await query({
      query: QUERYQUIENESSOMOS
    })
    const masVistos = await query({
      query: QUERYLOSMASVISTOS
    })
    console.log('resss', res, art)
    response = res
    articl = art
    qQSomos = qSomos
    qMasVistos = masVistos
  } catch (error) {
    console.log('errorerror', error)
    response = {}
    articl = {}
  }

  return {
    data: response.data,
    loading: response.loading,
    dataArticl: articl.data,
    loadingArticl: articl.loading,
    data1: qQSomos.data,
    data2: qMasVistos.data
  }
}

const PositionSection = styled.div`
  display: flex;
  @media (max-width: ${measures.tablet}){
    display: block;
  }
`
const SectionNotice = styled.div`
  height: 100%;
  width: 80%;
  margin-right: 22px;
  @media (max-width: ${measures.tablet}){
    width: 100%;
  }
`
const ContentBtnSeeMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  margin-bottom: 10px;
`
const SectionCards = styled.div`
  width: 27%;
  height: 100%;
  @media (max-width: ${measures.tablet}){
    width: 100%;
    margin: auto;
  }
  @media (max-width: ${measures.mobile}){
    width: 100%;
  }
`
