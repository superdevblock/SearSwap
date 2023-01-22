import styled from 'styled-components'

const Loading = styled.div`
  border: 8px solid #0112E5;
  border-radius: 50%;
  border-top: 8px solid #0112E5;
  border-bottom: 8px solid #0112E5;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loading
