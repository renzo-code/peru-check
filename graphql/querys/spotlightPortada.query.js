import { gql } from '@apollo/client'

export const QUERY_PORTADA = gql`
  query Spotlight {
    spotlight (_id: "5ffe2d97c808076429584331", site_id: "perucheck", status: 1) {
      data
    }
  }
`
export const QUERY_PORTADA_V = gql`
  query Spotlight {
    spotlight (_id: "60060982e47e817c3020e069", site_id: "perucheck", status: 1) {
      data
    }
  }
`
export const QUERY_PORTADA_F = gql`
  query Spotlight {
    spotlight (_id: "600609ae45e57826ee1bcb3b", site_id: "perucheck", status: 1) {
      data
    }
  }
`
