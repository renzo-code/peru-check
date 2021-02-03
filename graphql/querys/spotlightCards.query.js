import { gql } from '@apollo/client'

export const QUERYQUIENESSOMOS = gql`
  query Spotlight {
    spotlight (_id: "5ff87b3fdbaa5a2457180d3b", site_id: "perucheck", status: 1) {
      data
    }
  }
`
export const QUERYBUSCADOR = gql`
  query DataJson {
  dataJson (site_id: "perucheck", status: 1, entity_type: "content", bundle: "article") {
    data
  }
}
`
export const QUERYLOSMASVISTOS = gql`
  query External {
  external (limit: 5, site_id: "elpopular", name: "charbeat", type: "api", force: true, easy: true) {
    data
  }
}
`
