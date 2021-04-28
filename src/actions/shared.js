import { getInitialData, saveQuestionAnswer } from "../utils/api"
import { receiveUsers, saveUserAnswer } from "./users"
import { receiveQuestions, addAnswer } from "./questions"
import { setAuthedUser } from "./authedUser"

const AUTHED_ID = ""

export function handleInitialData() {
	return (dispatch) => {
    	return getInitialData()
      	.then(({users, questions}) => {
        	dispatch(receiveUsers(users))
          	dispatch(receiveQuestions(questions))
          	dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}

export function handleUserAnswer({authedUser, qid, answer}) {
	return (dispatch) => {
    	
        return saveQuestionAnswer({
        	authedUser ,
          	qid ,
          	answer
        })
      	.then(()=>{
        	dispatch(addAnswer({authedUser, qid, answer}))
        	dispatch(saveUserAnswer({authedUser, qid, answer}))
        })
    }
} 