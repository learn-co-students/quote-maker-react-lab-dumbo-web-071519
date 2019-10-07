import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  displayQuotes = () => {
    return this.props.quotes.map(quote => (
      <QuoteCard
        quote={quote}
        key={quote.id}
        remove={removeQuote}
        upvote={upvoteQuote}
        downvote={downvoteQuote}
      />
    ));
  };
  render() {
    console.log("quotes:", this.props);
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">{this.displayQuotes()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};

//add arguments to connect as needed
export default connect(
  mapStateToProps,
  { removeQuote, upvoteQuote, downvoteQuote }
)(Quotes);
