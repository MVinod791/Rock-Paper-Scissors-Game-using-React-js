import {Component} from 'react'

import Popup from 'reactjs-popup'

import {
  AppContainer,
  ResponseContainer,
  ListImages,
  ButtonContainer,
  RulesButton,
  ModelCloseContainer,
  CloseButton,
  RulesImage,
  TopImage,
} from './styledComponents'

import GameResult from '../GameResult'
import NavBar from '../Navbar'
import './index.css'

class PlayingView extends Component {
  onClickImage = event => {
    console.log(event.target.value)
  }

  render() {
    const {choicesList} = this.props
    const rock = choicesList.filter(
      eachImageItem => eachImageItem.id === 'ROCK',
    )
    const paper = choicesList.filter(
      eachImageItem => eachImageItem.id === 'PAPER',
    )
    const scissors = choicesList.filter(
      eachImageItem => eachImageItem.id === 'SCISSORS',
    )
    return (
      <AppContainer>
        <ResponseContainer>
          <NavBar />
          <ListImages>
            <TopImage>
              <button type="button" onClick={this.onClickImage}>
                <GameResult imageDetails={rock} />
              </button>
              <GameResult imageDetails={paper} />
            </TopImage>
            <GameResult imageDetails={scissors} />
          </ListImages>

          <ButtonContainer>
            <Popup
              modal
              trigger={<RulesButton type="button">Rules</RulesButton>}
              className="popup-content"
            >
              {close => (
                <ModelCloseContainer>
                  <CloseButton
                    type="button"
                    onClick={() => close()}
                    data-testid="closeButton"
                  >
                    X
                  </CloseButton>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ModelCloseContainer>
              )}
            </Popup>
          </ButtonContainer>
        </ResponseContainer>
      </AppContainer>
    )
  }
}

export default PlayingView
