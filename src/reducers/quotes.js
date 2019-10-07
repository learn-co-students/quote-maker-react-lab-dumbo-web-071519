import { stat } from "fs";

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [action.quote, ...state];

    case "REMOVE_QUOTE":
      const remaingQuotes = state.filter(quote => quote.id !== action.quoteId);
      return [remaingQuotes];

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx]
      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, { votes: quote.votes + 1 }),
        ...state.slice(idx + 1)
      ];
    case "DOWNVOTE_QUOTE":
      let idx = state.findIndex(quote => quote.id === action.quoteId);
      let quote =state[idx]
      if (quote.votes > 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, { votes: quote.votes - 1 }),
          ...state.slice(idx + 1)
        ];
      } else {
        return state;
      }
    default:
      return state;
  }

  return state;
};
