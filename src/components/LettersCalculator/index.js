// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersNumber: '',
  }

  onChangeInputText = event => {
    this.setState({lettersNumber: event.target.value})
  }

  render() {
    const {lettersNumber} = this.state
    const letterCount = lettersNumber.trim().length

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="letter-calculator-image"
          alt="letters calculator"
        />
        <div className="letter-calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="userInput" className="enter-phrase">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            id="userInput"
            placeholder="Enter the phrase"
            className="search-input"
            onChange={this.onChangeInputText}
          />
          <p type="button" className="count-text">
            No.of letters: {letterCount}
          </p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
