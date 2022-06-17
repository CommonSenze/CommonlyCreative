package net.commonlycreative.models;

import lombok.Getter;

@Getter
public class Discord {

	private String name;
	private int tag;
	
	public Discord(String name, int tag) {
		this.name = name;
		this.tag = tag;
	}
	
	@Override
	public String toString() {
		return name+"#"+tag;
	}
	
	@Override
	public boolean equals(Object obj) {
		return this.toString().equals(obj.toString());
	}
	
	public static Discord parseDiscord(String discordTag) {
		String[] words = discordTag.split("#");
		Discord discord = new Discord(words[0], Integer.parseInt(words[1]));
		return discord;
	}
}
