// import { useState, useEffect } from 'react'
// import styled from 'styled-components'
import Layout from '../../layouts/default'
// import NoticeCard from 'components/features/global/NoticeCard/default'
// import { measures, FormatUrl } from 'const'
// import Articles from 'components/features/global/Articles/default'
// import BtnSeeMore from 'components/features/homePage/ButtonSeeMore/default'
// import Card from 'components/features/homePage/card/default'
// import { useQuery } from '@apollo/client'
// import { fnQueryArticlesF } from '../../graphql/querys/spotlightArticlesF.query'
// import { QUERY_PORTADA_F } from '../../graphql/querys/spotlightPortada.query'
// import { ContainerArticle } from '../index'

const fakeNews = () => {
  // const [articles, setArticles] = useState([])
  // const [page, setPage] = useState(1)
  // const [existData, setExistData] = useState(true)
  // const { data: qArticles, loading } = useQuery(fnQueryArticlesF(page))
  // const { data, loading: loadPort } = useQuery(QUERY_PORTADA_F)

  // useEffect(() => {
  //   if (qArticles && Object.values(qArticles?.articles?.data).length > 0) {
  //     setArticles([...articles, ...qArticles?.articles?.data])
  //   }
  // }, [qArticles])

  // useEffect(() => {
  //   if (qArticles?.articles?.total && qArticles?.articles?.total === articles.length) {
  //     setExistData(false)
  //   }
  // }, [qArticles, articles])
  // console.log('asd', data?.spotlight?.data[0].data[0])

  return (
    <>
      <Layout>
        Metodología
        {/* <PositionSection>
          <SectionNotice>
            <NoticeCard
              loadCard={loadPort}
              href = {data?.spotlight?.data[0].data[0].fields[3].value}
              imageSection = "Falsas"
              titleSection = 'NOTICIAS FALSAS'
              image={FormatUrl + data?.spotlight?.data[0].data[0].fields[4].value.url.substring(36)}
              type = {data?.spotlight?.data[0].data[0].fields[0].value}
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
                load={loading}
              />
            </ContentBtnSeeMore>
          </SectionNotice>
          <SectionCards>
            <Card/>
          </SectionCards>
        </PositionSection> */}
      </Layout>
    </>
  )
}

export default fakeNews

// const PositionSection = styled.div`
//   display: flex;
//   @media (max-width: ${measures.tablet}){
//     display: block;
//   }
// `
// const SectionNotice = styled.div`
//   height: 100%;
//   width: 80%;
//   margin-right: 22px;
//   @media (max-width: ${measures.tablet}){
//     width: 100%;
//   }
// `
// const ContentBtnSeeMore = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 70px;
//   width: 100%;
//   margin-bottom: 10px;
// `
// const SectionCards = styled.div`
//   width: 27%;
//   height: 100%;
//   @media (max-width: ${measures.tablet}){
//     width: 70%;
//     margin: auto;
//   }
//   @media (max-width: ${measures.mobile}){
//     width: 100%;
//   }
// `
