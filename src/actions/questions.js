export const SAVE_QUESTION = "SAVE_QUESTION"
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER"


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

export function addQuestion ( question ) {
	return {
		type: SAVE_QUESTION,
      	question,
      	
	};

}


