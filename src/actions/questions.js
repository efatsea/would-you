import { saveQuestionAnswer } from "../utils/api"

export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER"

function addQuestion ( question ) {
	return {
		type: ADD_QUESTION,
      	question,
      	
	};

}

export function receiveQuestions( questions ) {
	return {
    	type: RECEIVE_QUESTIONS,
     	questions,
    };
}

function addAnswer ({id, authedUser, answer}) {
	return {
    	type: ADD_ANSWER,
      	id,
      	authedUser,
      	answer
    }
}

export function handleAddAnswer(info) {
	return(dispatch) => {
    	dispatch(addAnswer(info))
      
      	return saveQuestionAnswer(info)
      		.catch((e) => {
        		console.warn('Error in handleAddAnswer', e)
			    dispatch(addAnswer(info))	
			    alert('There was an error, try again ')
        	})
    }
}