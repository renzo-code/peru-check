import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import NextHead from 'next/head'
import Layout from '../layouts/default'
import styled from 'styled-components'
import Articles from 'components/features/global/Articles/default'
import Organizadores from 'components/features/homePage/Organizadores/default'
import MediosOrganizadores from 'components/features/homePage/MediosOrganizadores/default'
import NoticeCard from 'components/features/global/NoticeCard/default'
import Card from 'components/features/homePage/card/default'
import BtnSeeMore from 'components/features/homePage/ButtonSeeMore/default'
import { measures, FormatUrl } from 'const'
import { QUERY_PORTADA } from 'graphql/querys/spotlightPortada.query'
import { fnQueryArticles } from 'graphql/querys/spotlightArticles.query'
import { createApolloClient } from 'graphql/helpers/apollo-client'
import { QUERYQUIENESSOMOS, QUERYLOSMASVISTOS } from 'graphql/querys/spotlightCards.query'

const Home = (props) => {
  const { data, loading: loadPort, data1, data2 } = props
  const [articles, setArticles] = useState([])
  const [existData, setExistData] = useState(true)
  const [metaDatos, setMetaDatos] = useState('')
  const [numPage, setNumPage] = useState(1)
  const { data: qArticles, loading } = useQuery(fnQueryArticles(numPage))

  useEffect(() => {
    if (qArticles && Object.values(qArticles?.articles?.data).length > 0) {
      setArticles([...articles, ...qArticles?.articles?.data])
    }
  }, [qArticles])

  useEffect(() => {
    if (qArticles?.articles?.total && qArticles?.articles?.total === articles.length) {
      setExistData(false)
    }
  }, [qArticles, articles])

  const handleClick = (item) => {
    setMetaDatos(item)
    setTimeout(() => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${`https://qa.perucheck.pe/articles${metaDatos.slug}`}`, '_target', 'width=500,height=400')
    }, 500)
  }

  const Handler = () => {
    setNumPage(numPage + 1)
  }

  return (
    <>
    <NextHead>
        <meta property="og:url" content={`${`/articles${metaDatos.slug}`}`} />
        <meta property="og:title" content={`${metaDatos.title}`} />
        <meta
          property="og:image"
          content={`${FormatUrl + metaDatos.data?.multimedia[0].path.substring(36)}`}
        />
    </NextHead>
      <Layout>
        <PositionSection>
          <SectionNotice>
            <NoticeCard
              urlRedes={data?.spotlight?.data[0].data[0].fields[3].value}
              loadCard={loadPort}
              href = {data?.spotlight?.data[0].data[0].fields[3].value}
              imageSection="Ojo"
              image={FormatUrl + data?.spotlight?.data[0].data[0].fields[4].value.url.substring(36)}
              titleNotice = {data?.spotlight?.data[0].data[0].fields[1].value}
              drafting = {data?.spotlight?.data[0].data[0].fields[2].value.split('_')[0]}
              date = {data?.spotlight?.data[0].data[0].fields[2].value.split('_')[1]}
            />
            <ContainerArticle>
              {
                articles.map((item, i) => {
                  return (
                    <>
                      <Articles
                        onClick={() => handleClick(item)}
                        urlRedesArticles={'https://qa.perucheck.pe/articles/dudosas/2021/01/12/es-enganoso-el-post-que-compara-los-efectos-adversos-de-la-vacuna-pfizer-y-la-covid-19-22'}
                        metaTitleArticle={item.title}
                        metaResumenArticle='PerúCheck'
                        href={`/articles${item.slug}`}
                        key={i}
                        setExistDataGql={setExistData}
                        imgArticle={FormatUrl + item.data.multimedia[0].path.substring(36)}
                        typeArticle={item.data?.categories[0].name}
                        titleArticle={item.title}
                        draftingArticle={item.data.authors[0]?.fullname}
                        dateArticle={item.date.substring(0, 10)}
                      />
                    </>
                  )
                })
              }
            </ContainerArticle>
            <ContentBtnSeeMore>
              <BtnSeeMore
                nameBtn="Ver más"
                onClick={Handler}
                disabled={!existData}
                load={loading}
              />
            </ContentBtnSeeMore>
          </SectionNotice>
          <SectionCards>
            <Card data1={data1} data2={data2}/>
          </SectionCards>
        </PositionSection>
        <Organizadores/>
          <MediosOrganizadores/>
      </Layout>
    </>
  )
}

export default Home

Home.getInitialProps = async (ctx) => {
  let response = null
  let qQSomos = null
  let qMasVistos = null
  try {
    const { query } = createApolloClient()
    const res = await query({
      query: QUERY_PORTADA
    })
    console.log('ctx', ctx)
    const qSomos = await query({
      query: QUERYQUIENESSOMOS
    })
    const masVistos = await query({
      query: QUERYLOSMASVISTOS
    })
    response = res
    qQSomos = qSomos
    qMasVistos = masVistos
  } catch (error) {
    console.log('errorerror', error)
    response = {}
    qQSomos = {}
    qMasVistos = {}
  }

  return {
    data: response.data,
    loading: response.loading,
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

export const ContainerArticle = styled.div`
  display: grid;
  grid-template-columns: 225px 225px 225px;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  width: 100%;
  min-height: 200px;
  margin-top: 20px;
  @media (max-width: 910px){
    grid-template-columns: 48% 48%;
  }
  @media (max-width: ${measures.mobile}){
    grid-row-gap: 10px;
  }
`
