package net.commonlycreative.models;

import lombok.Getter;

@Getter
public class LoginCredentials {

	private String discordTag;
	private String password;
	
	public LoginCredentials(String discordTag, String password) {
		this.discordTag = discordTag;
		this.password = password;
	}
	
	public Discord getDiscord() {
		return Discord.parseDiscord(discordTag);
	}
}
