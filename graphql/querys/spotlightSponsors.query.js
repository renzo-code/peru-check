import { gql } from '@apollo/client'

export const QUERY_SPONSORS = gql`
  query Spotlight {
    spotlight (_id: "5ff87b695420932d6425cb31", site_id: "perucheck", status: 1) {
      data
    }
  }
`
