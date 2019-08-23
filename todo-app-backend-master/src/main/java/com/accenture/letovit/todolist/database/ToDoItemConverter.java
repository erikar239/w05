package com.accenture.letovit.todolist.database;

import com.accenture.letovit.todolist.ToDoItem;

/**
 * Converter class that is mapping data between our JSON objects and Database objects
 */
public class ToDoItemConverter {
	
	/**
	 * Map data from JSON object to Database object with specified identifier
	 */
	public static DbToDoItem jsonToDbEntity(ToDoItem source, String identifier) {
		DbToDoItem target = new DbToDoItem();
		
		target.setCreatedAt(source.getCreatedAt());
		target.setState(source.getState());
		target.setText(source.getText());
		target.setTitle(source.getTitle());
		target.setImportance(source.getImportance());
		
		target.setIdentifier(identifier);
		
		return target;
	}
	
	/**
	 * Map data from Database object to JSON object
	 */
	public static ToDoItem dbEntityToJson(DbToDoItem source) {
		ToDoItem target = new ToDoItem();
		
		target.setCreatedAt(source.getCreatedAt());
		target.setState(source.getState());
		target.setText(source.getText());
		target.setTitle(source.getTitle());
		target.setImportance(source.getImportance());
		
		target.setId(source.getIdentifier());
		
		return target;
	}
}
