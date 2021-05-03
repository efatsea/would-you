import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api"
import { receiveUsers, saveUserAnswer, addUserQuestion } from "./users"
import { receiveQuestions, addAnswer, addQuestion } from "./questions"
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

export function handleAddQuestion({optionOneText, optionTwoText, authedUser}){
	const question = {
      	optionOneText,
      	optionTwoText,
      	author: authedUser
    }
    return (dispatch) => {
    	return saveQuestion(question)
      	.then((question) => {
        	dispatch(addQuestion(question))
          	dispatch(addUserQuestion(question))
        })
    }
}