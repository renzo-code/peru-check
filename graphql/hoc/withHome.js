/* eslint-disable */
import React from 'react'
import { QUERY_PORTADA } from '../querys/spotlightPortada.query'
import { memoized } from 'util/cacheapis'

const WithHome = (Component) => {
  return class extends React.Component {
    static async getInitialProps (cntx) {
      console.log('cntx', cntx)
      return {
        test: 'test'
      }
    }
    render() {
      return <Component {...this.props}/>
    }
  }
}

export default WithHome
