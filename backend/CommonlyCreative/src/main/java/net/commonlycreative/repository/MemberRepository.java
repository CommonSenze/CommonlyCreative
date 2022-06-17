package net.commonlycreative.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import net.commonlycreative.models.Discord;
import net.commonlycreative.models.Member;

@Repository
public interface MemberRepository extends MongoRepository<Member, Long> {

	public default Member findByDiscord(Discord discord) {
		return findAll().stream().filter(member -> member.getDiscord().equals(discord)).findAny().orElse(null);
	}
}
