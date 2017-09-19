package com.shpyrna.service;

import com.shpyrna.entity.User;
import com.shpyrna.entity.UserInfo;
import org.springframework.security.core.userdetails.UserDetailsService;


/**
 * Created by okten22 on 23.06.17.
 */
public interface UserService extends UserDetailsService {

    void save(User user);

    User findUserByUsername(String username);

    void addInfo(int userId, UserInfo userInfo);

    User findById(Integer id);
}
