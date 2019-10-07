

export default (state = [], action) => {

    switch (action.type) {
      case "ADD_QUOTE":
        return [ action.quote, ...state]
        break;
      case "REMOVE_QUOTE":
        const remaingQuotes = state.filter(quote => quote.id !== action.quoteId)
        return [remaingQuotes]
      case "UPVOTE_QUOTE":
       return {
         ...state,
         vote: state.vote + 1
       }
       case "DOWNVOTE_QUOTE":
         let idx =  state.findIndex(quote => quote.id === action.quoteId)
       return {
         
       }
       return state;
      default:
        return state
       
    }





}
