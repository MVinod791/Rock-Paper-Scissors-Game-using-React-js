import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 16px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-bottom: 48px;
`

export const CustomList = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
`
export const ListItem = styled.li`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  height: 130px;
  width: 180px;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 24px;
  }
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 22px;
  font-family: 'Bree Serif';
  font-weight: 500;
  padding-bottom: 0px;
  margin-bottom: 0px;
  line-height: 0px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const ScoreCount = styled.p`
  color: #223a5f;
  font-size: 28px;
  font-family: 'Bree Serif';
  font-weight: bold;
  line-height: 0px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
