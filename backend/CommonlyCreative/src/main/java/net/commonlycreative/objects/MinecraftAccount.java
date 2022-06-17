package net.commonlycreative.objects;

import java.util.UUID;

import lombok.Getter;

@Getter
public class MinecraftAccount {

	private UUID uniqueId;
	
	public MinecraftAccount(UUID uniqueId) {
		this.uniqueId = uniqueId;
	}
}
