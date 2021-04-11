import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions'

export default function questions ( state= {}, action ) {
	switch (action.type) {
      case RECEIVE_QUESTIONS :
        return {
        	...state,
          	...action.questions
        }
      case ADD_ANSWER :
        const {authedUser,id,answer} = action.answer
        return {
        	...state,
          [action.id] : {
          	...state[action.id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat([authedUser])
          }
          }
        }
      default :
        return state
    }
}