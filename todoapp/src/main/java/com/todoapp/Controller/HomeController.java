package com.todoapp.Controller;

import java.util.Date;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.view.RedirectView;

import com.todoapp.Dao.TodoDao;
import com.todoapp.Entities.Todo;


@Controller
public class HomeController {

	@Autowired
	ServletContext context;
	
	@Autowired
	TodoDao todoDao;
	@RequestMapping("/home")
	public String home(Model m) {
		m.addAttribute("page", "home");
		List<Todo> list = (List<Todo>)this.todoDao.getAllTodos();
		m.addAttribute("allTodos", list);
		return "home";
	}

	@RequestMapping("/add")
	public String addTodo(Model m) {
		Todo todo = new Todo();
		m.addAttribute("page", "add");
		m.addAttribute("todo", todo);
		return "home";
	}
	
	@RequestMapping(value="/savetodo", method=RequestMethod.POST)
	public String saveTodo(@ModelAttribute("todo") Todo t, Model m){
		System.out.println(t);
		t.setDate(new Date());
		
		this.todoDao.saveTodo(t);
		m.addAttribute("message", "Todo Added!");
		
		return "home";
	}
	
	@RequestMapping("/delete/{tid}")
	public RedirectView deleteTodo(@PathVariable("tid") int tid ,HttpServletRequest req){
		
		this.todoDao.deleteTodo(tid);
		RedirectView rv = new RedirectView();
		rv.setUrl(req.getContextPath());
		
		return rv;
	}
}
