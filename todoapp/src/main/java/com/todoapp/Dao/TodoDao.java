package com.todoapp.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.todoapp.Entities.Todo;

@Component
public class TodoDao {

	@Autowired
	private HibernateTemplate template;

	@Transactional
	public int saveTodo(Todo t) {
		int i = (Integer) this.template.save(t);
		return i;
	}

	public List<Todo> getAllTodos() {
		List<Todo> todos = this.template.loadAll(Todo.class);
		return todos;
	}

	public Todo getTodo(int id) {
		Todo t = this.template.get(Todo.class, id);
		return t;
	}

	@Transactional
	public void deleteTodo(int tid) {
		Todo t = this.template.load(Todo.class, tid);
		this.template.delete(t);
	}

	public HibernateTemplate getTemplate() {
		return template;
	}

	public void setTemplate(HibernateTemplate template) {
		this.template = template;
	}

}
