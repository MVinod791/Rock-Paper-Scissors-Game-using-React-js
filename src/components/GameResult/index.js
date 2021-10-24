import {Image} from './styledComponents'

const GameResult = props => {
  const {imageDetails} = props

  return (
    <>
      <ul>
        {imageDetails.map(eachImage => (
          <Image
            src={eachImage.imageUrl}
            key={eachImage.id}
            alt="your choice"
          />
        ))}
      </ul>
    </>
  )
}

export default GameResult
