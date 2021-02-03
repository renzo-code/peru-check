import { gql } from '@apollo/client'

export const fnQueryArticles = (pageGql = 1) => {
  const QUERY_ARTICLES = gql`
    query Articles {
      articles (site_id: "perucheck", status: 1, page: ${pageGql}, limit: 9) {
        data {
          title
          slug
          date
          data {
            categories {
              name
              slug
            }
            authors {
              fullname
            }
            multimedia {
              _id
              type
              subtype
              path
              data {
                title
                credits
                source
                type_video
                image_path
                embed
              }
              metadata {
                key
                value
              }
            }
          }
        }
        total
      }
    }
  `
  return QUERY_ARTICLES
}

export const fnQueryArticlesSlug = (categorySlug) => {
  const QUERY_ARTICLES_CSLUG = gql`
    query Articles {
      articles (site_id: "perucheck", status: 1, page: 1, limit: 4, category_slug: "${categorySlug}") {
        data {
          title
          slug
          date
          data {
            categories {
              name
              slug
            }
            authors {
              fullname
            }
            multimedia {
              _id
              type
              subtype
              path
              data {
                title
                credits
                source
                type_video
                image_path
                embed
              }
              metadata {
                key
                value
              }
            }
          }
        }
        total
      }
    }
  `
  return QUERY_ARTICLES_CSLUG
}
