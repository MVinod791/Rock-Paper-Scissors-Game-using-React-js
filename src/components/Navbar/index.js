import {
  ScoreContainer,
  ScoreCard,
  CustomList,
  ListItem,
  ScoreText,
  ScoreCount,
} from './styledComponents'

const NavBar = () => (
  <ScoreContainer>
    <CustomList>
      <ListItem>ROCK</ListItem>
      <ListItem>PAPER</ListItem>
      <ListItem>SCISSORS</ListItem>
    </CustomList>
    <ScoreCard>
      <ScoreText>Score</ScoreText>
      <ScoreCount>0</ScoreCount>
    </ScoreCard>
  </ScoreContainer>
)
export default NavBar
