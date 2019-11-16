import React from "react";
import axios from "axios";
import "./QuoteBox.css";
import { AnimateOnChange } from "react-animation";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      text: "",
      author: "",
      play: true
    };
  }

  async componentDidMount() {
    const response = await axios.get("https://api.quotable.io/quotes?limit=50");
    const rndNumber = Math.floor(Math.random() * 50);
    this.setState({ quotes: response.data.results });
    this.setState({
      text: this.state.quotes[rndNumber].content,
      author: this.state.quotes[rndNumber].author
    });
  }

  newQuote = () => {
    const rndNumber = Math.floor(Math.random() * 50);
    this.setState({
      text: this.state.quotes[rndNumber].content,
      author: this.state.quotes[rndNumber].author
    });
  };

  render() {
    return (
      <div id="quote-box">
        <AnimateOnChange className="quote-container">
          <p id="text">{this.state.text}</p>
          <p id="author">{this.state.author}</p>
        </AnimateOnChange>
        <button id="new-quote" onClick={this.newQuote}>
          New Quote
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          id="tweet-quote"
          href="https://www.twitter.com/intent/tweet"
        >
          <FontAwesomeIcon icon={faTwitterSquare} className="twitter" />
        </a>
      </div>
    );
  }
}

export default QuoteBox;
