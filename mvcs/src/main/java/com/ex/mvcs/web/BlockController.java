package com.ex.mvcs.web;

import com.ex.mvcs.entities.Blocked;
import com.ex.mvcs.service.BlockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 *
 * @Author:AgustinVasquez
 *
 */
@RestController
@RequestMapping("block-api")
public class BlockController {
    BlockService service;

    @Autowired
    BlockController(BlockService service){this.service = service;}


    @GetMapping(value="/blocked/{blocked_id}")
    public ArrayList<Integer> getBlockedList(@PathVariable int blocked_id){
        return service.getBlocked(blocked_id).getBlockedArray();
    }

    @GetMapping(value= "/block/{user}/{blocked}")
    public void addBlocked(@PathVariable int user,@PathVariable int blocked){
        Blocked block = service.getBlocked(user);
        block.appendBlockedArray(blocked);
        service.addBlocked(block);
    }
}
