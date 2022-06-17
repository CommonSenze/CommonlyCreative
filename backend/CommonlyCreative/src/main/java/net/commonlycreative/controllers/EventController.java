package net.commonlycreative.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.commonlycreative.models.Event;
import net.commonlycreative.repository.EventRepository;

@RestController
@RequestMapping("api/event/")
public class EventController {

	@Autowired
	private EventRepository eventRepository;
	
	@GetMapping("list")
	public List<Event> getEvent(){
		return this.eventRepository.findAll();
	}
	
	@PostMapping("create")
	public ResponseEntity<Event> createEvent(@RequestBody Event event) {
		this.eventRepository.save(event);
		return new ResponseEntity<>(event, HttpStatus.CREATED);
	}
	
	@GetMapping("delete/{id}")
	public void deleteEvent(@PathVariable Long id) {
		this.eventRepository.deleteById(id);
	}
	
	@GetMapping("{id}")
	public Event getEvent(@PathVariable("id") Long id) {
		return this.eventRepository.findById(id).orElse(null);
	}
}
