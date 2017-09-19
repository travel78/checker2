package com.shpyrna.service.impl;

import com.shpyrna.dao.UserDao;
import com.shpyrna.dao.UserInfoDao;
import com.shpyrna.entity.User;
import com.shpyrna.entity.UserInfo;
import com.shpyrna.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by okten22 on 23.06.17.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private UserInfoDao userInfoDao;

    @Override
    public void save(User user) {
        userDao.save(user);
    }

    @Override
    public User findUserByUsername(String username) {
        System.out.println("call in findUserByUsername");
        return userDao.findByUsername(username);
    }

    @Override
    public void addInfo(int userId, UserInfo userInfo) {
        User user = userDao.findOne(userId);
        userInfoDao.save(userInfo);
        user.setUserInfo(userInfo);
    }

    @Override
    public User findById(Integer id) {
        return userDao.findOne(id);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        System.out.println("call in loadUserByUsername");
        return userDao.findByUsername(s);
    }
}
