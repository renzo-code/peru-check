import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Load = () => {
  return (
    <>
    <ContentLoading>
      <Loading>
        <FontAwesomeIcon icon={faSpinner}/>
      </Loading>
      <p className="parf">Cargando ...</p>
    </ContentLoading>
    <style jsx>{`
      .parf{
        font-size: 20px;
        color: #7b7b7b;
        text-align: center;
        padding-bottom: 70px;
      }
    `}</style>
    </>
  )
}

export default Load

export const ContentLoading = styled.div`
  width: 100%;
  height: auto;
`
export const Loading = styled.div`
  margin: 100px auto;
  height: 100px;
  width: 100px;
  -webkit-animation: girar 1.5s linear infinite;
  -o-animation: girar 1.5s linear infinite ;
  animation: girar 1.5s linear infinite;
  color: #7b7b7b;
  @keyframes girar {
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg);}
  }
`