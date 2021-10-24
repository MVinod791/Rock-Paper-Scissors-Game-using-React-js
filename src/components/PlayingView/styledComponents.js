import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-top: 12px;
  padding-bottom: 12px;
  @media screen and(min-width:768px) {
    max-width: 1110px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`
export const ListImages = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TopImage = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const RulesButton = styled.button`
  align-self: flex-end;
  padding-left: 12px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 12px;
  color: #223a5f;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ModelCloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 90%;
  @media screen and(min-width:768px) {
    max-width: 1110px;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const RulesImage = styled.img`
  height: 550px;
  width: 750px;
`
