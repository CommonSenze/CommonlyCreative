package net.commonlycreative.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "events")
public class Event {

	@Id
	private long id;
	private String name, description, imageSrc;
	private int winnings;
	private Date date;
	
	public Event(String name, String description, int winnings, String imageSrc, Date date) {
		this.name = name;
		this.description = description;
		this.winnings = winnings;
		this.imageSrc = imageSrc;
		this.date = date;
	}
}
