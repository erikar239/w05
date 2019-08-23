package com.accenture.letovit.todolist.database;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * This class represents a table in database (@Entity annotation is marking this class as a table)
 * One object instance of this class represents a single record in database.
 */
@Entity
public class DbToDoItem {
	
	// all tables must have unique ID column marked with @Id annotation
	@Id
	private String identifier;

	private String title;

	private String text;

	private String state;
	
	private String importance;

	private String createdAt;

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
	//public boolean isFinished() {
	//return finished;
	//}

	//public void setFinished(boolean finished) {
	//this.finished = finished;
	//}
	
	public String isStarted() {
		return state;
	}
	
	public String inProgress() {
		return state;
	}
	
	public String isFinished() {
		return state;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public String getImportance() {
		return importance;
	}

	public void setImportance(String importance) {
		this.importance = importance;
	}

}
