package org.gallery.backend.controller;

import org.gallery.backend.entity.Member;
import org.gallery.backend.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class AccountController {
    @Autowired
    MemberRepository memberRepository;

//    DB에 password 그대로 넣으면 암호 보안 문제 -> spring password encoder

    @PostMapping("/api/account/login")
//    이 주소로 데이터를 요청받는데, params를 인자값을 받고, findBy..에 넘겨서 값 다시 받기
    public int login(@RequestBody Map<String, String> parmas) {
        Member member = memberRepository.findByEmailAndPassword(parmas.get("email"), parmas.get("password"));

        if (member != null) {
            return member.getId();
        }

        return 0;
    }
}









