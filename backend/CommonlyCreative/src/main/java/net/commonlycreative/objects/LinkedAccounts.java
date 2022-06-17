package net.commonlycreative.objects;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LinkedAccounts {

	private ValorantAccount valorantAccount;
	private MinecraftAccount minecraftAccount;
	
	public boolean hasMinecraftAccount() {
		return getMinecraftAccount() != null;
	}
	
	public boolean hasValorantAccount() {
		return getValorantAccount() != null;
	}
}
