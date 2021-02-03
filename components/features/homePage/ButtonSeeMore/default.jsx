import styled from 'styled-components'
import { colors } from 'const/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const BtnSeeMore = ({ onClick, nameBtn, disabled, load }) => {
  return (
    <>
      <Button
        onClick={onClick}
        disabled={disabled}
        load={load}
        >
          {
            load && (
              <Loading>
                <FontAwesomeIcon icon={faSpinner}/>
              </Loading>
            )
          }
        {nameBtn}
      </Button>
    </>
  )
}

export default BtnSeeMore

const Button = styled.button`
  position: relative;
  height: 40px;
  width: 200px;
  background-color: ${colors.primary};
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 13px;
  &:hover{
    opacity: 0.8;
    transition: 0.3s;
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`
const Loading = styled.div`
  position: absolute;
  left: 45px;
  top: 10px;
  height: 20px;
  width: 20px;
  -webkit-animation: girar 1.5s linear infinite;
  -o-animation: girar 1.5s linear infinite ;
  animation: girar 1.5s linear infinite;
  color: white;
  @keyframes girar {
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg);}
  }
`
