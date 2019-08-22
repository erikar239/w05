package com.accenture.letovit.todolist;

/**
 * This class represent todo json received from front-end. It contains flag about todo item finish state.
 * It is converted from JSON to Java Object when request is received by Spring.
 */
public class UpdateRequest {
	private String todoState;

	public String todoState () {
		return todoState;
	}

	public void setTodoState(String todoState) {
		this.todoState = todoState;
	}
	
	
}
