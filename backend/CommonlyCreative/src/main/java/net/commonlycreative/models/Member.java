package net.commonlycreative.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import net.commonlycreative.objects.LinkedAccounts;

@Data

@Document(collection = "member")
public class Member {

	@Id
	private long id;
	private final Discord discord;
	private final LinkedAccounts accounts;
	private final String password, profilePictureURL;
	private final long timeJoined;
}
