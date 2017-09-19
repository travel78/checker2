package com.shpyrna.controller;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.shpyrna.entity.User;
import com.shpyrna.entity.UserInfo;
import com.shpyrna.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Created by Юра on 13.09.2017.
 */
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUserInfo")
    public void addUserInfo(@RequestBody Map<String, Object> map) {
        int userId = Integer.parseInt((String) map.get("userId"));
        Gson gson = new Gson();
        JsonElement jsonElement = gson.toJsonTree(map.get("userInfo"));
        UserInfo userInfo = gson.fromJson(jsonElement, UserInfo.class);
        userService.addInfo(userId, userInfo);
    }

    @GetMapping("/getUser{id}")
    public User getUser(@PathVariable String id) {
        return userService.findById(Integer.parseInt(id));
    }


}
