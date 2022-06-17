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

import net.commonlycreative.models.Discord;
import net.commonlycreative.models.LoginCredentials;
import net.commonlycreative.models.Member;
import net.commonlycreative.objects.LinkedAccounts;
import net.commonlycreative.repository.MemberRepository;

@RestController
@RequestMapping("api/member")
public class MemberController {

	@Autowired
	private MemberRepository memberRepository;
	
	@GetMapping("list")
	public List<Member> getMembers(){
		return this.memberRepository.findAll();
	}
	
	@PostMapping("create")
	public ResponseEntity<Member> createMember(@RequestBody LoginCredentials credentials) {
		Member member = new Member(credentials.getDiscord(), new LinkedAccounts(), credentials.getPassword(), "", System.currentTimeMillis());
		
		this.memberRepository.save(member);
		return new ResponseEntity<>(member, HttpStatus.CREATED);
	}
	
	@GetMapping("{discord}")
	public Member getMember(@PathVariable("discord") String discordTag) {
		return this.memberRepository.findByDiscord(Discord.parseDiscord(discordTag));
	}
}
