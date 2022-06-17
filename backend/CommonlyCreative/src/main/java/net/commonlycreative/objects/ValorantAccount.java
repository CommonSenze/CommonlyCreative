package net.commonlycreative.objects;

import lombok.Getter;

@Getter
public class ValorantAccount {

	private String name, tag;
	
	private ValorantAccount(String name, String tag) {
		this.name = name;
		this.tag = tag;
	}
}
