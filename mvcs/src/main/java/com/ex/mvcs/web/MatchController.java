package com.ex.mvcs.web;

import com.ex.mvcs.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 *
 * @Author:AgustinVasquez
 *
 */
@RestController
@RequestMapping("match-api")
public class MatchController {
    MatchService service;

    @Autowired
    MatchController(MatchService service){this.service = service;}


    @GetMapping(value = "/Matches/{id}")
    public ArrayList<String> getMatches(@PathVariable String id){
        return service.getMatches(id).getMatchArray();
    }

    @GetMapping(value="/myertypes")
    public ArrayList<String> getAllMatch(){
        ArrayList<String> ret = new ArrayList<String>();
        ret.add("ENTP");
        ret.add("ENTJ");
        ret.add("ENFP");
        ret.add("ENFJ");
        ret.add("ESTP");
        ret.add("ESTJ");
        ret.add("ESFP");
        ret.add("ESFJ");
        ret.add("INTP");
        ret.add("INTJ");
        ret.add("INFP");
        ret.add("INFJ");
        ret.add("ISTP");
        ret.add("ISTJ");
        ret.add("ISFP");
        ret.add("ISFJ");
        return ret;
    }
}
