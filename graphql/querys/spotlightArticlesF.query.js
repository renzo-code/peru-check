import { gql } from '@apollo/client'

export const fnQueryArticlesF = () => {
  const QUERY_ARTICLES_F = gql`
    query Articles {
      articles (site_id: "perucheck", status: 1, page: 1, limit: 10, category_slug: "/falsas") {
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
  return QUERY_ARTICLES_F
}
