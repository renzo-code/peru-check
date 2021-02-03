import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { FacebookShareButton, TwitterShareButton } from 'react-share'

class CompartirPost extends Component {
  render () {
    return (
      <>
        <div className="content-redes">

          <FacebookShareButton url={this.props.Url} quote={`${this.props.Titulo} - ${this.props.Resumen}`}>

          <img
                  src="https://origin.qacronosmedia.glr.pe/large/2021/01/27/lg_601188c0981dd74d31770cb2.jpg"
                  width={20}
                  height={20}
                />

          </FacebookShareButton>

          <TwitterShareButton url={this.props.Url} title={this.props.Titulo} >

          <img
                  src="https://origin.qacronosmedia.glr.pe/large/2021/01/27/lg_601188c6981dd74d31770cb3.jpg"
                  width={20}
                  height={20}
                />

          </TwitterShareButton>

        </div>
        <style jsx>{`
          .content-redes{
            display: flex;
          }
          .content-redes:hover{
            cursor: pointer;
          }
        `}</style>
      </>
    )
  }
}

CompartirPost.propTypes = {

  Url: PropTypes.string,

  Titulo: PropTypes.string,

  Resumen: PropTypes.string

}

export default CompartirPost
