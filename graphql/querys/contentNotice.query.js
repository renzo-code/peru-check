import { gql } from '@apollo/client'

export const fnQueryContentNotice = (slug) => {
  const QUERY_CONTENT_NOTICE = gql`
    query article {
      article (site_id: "perucheck", status: 1, slug: "${slug}") {
          title
          type
          date
          update_date
          slug
          status
          data {
            teaser
            content_elements
            categories {
              name
              slug
            }
            tags {
              name
              slug
            }
            authors {
              _id
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
          metadata_seo {
            keywords
            seo_title
            seo_description
          }
          metadata {
            key
            value
          }
      }
  }
`
  return QUERY_CONTENT_NOTICE
}
