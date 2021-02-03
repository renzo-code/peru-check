import { gql } from '@apollo/client'

export const QUERYMENU = gql`
query Menu {
    menu (site_id: "perucheck", status: 1, _id: "5ff8794b93a6642cb3483eb3") {
      links {
        title
        path
        metadata {
          key
          value
        }
        children {
          title
          path
        }
      }
      status
    }
  }
`
