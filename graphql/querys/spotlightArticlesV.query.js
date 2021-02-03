import { gql } from '@apollo/client'

export const fnQueryArticlesV = (pageGql) => {
  const QUERY_ARTICLES_V = gql`
    query Articles {
      articles (site_id: "perucheck", status: 1, page: 1, limit: 10, category_slug: "/verificadas") {
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
  return QUERY_ARTICLES_V
}
