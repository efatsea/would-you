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

export function addAnswer ({ authedUser, qid, answer }) {
	return {
    	type: ADD_ANSWER,
      	qid,
      	authedUser,
      	answer
    }
}

