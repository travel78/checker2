package com.shpyrna.dao;

import com.shpyrna.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Юра on 15.09.2017.
 */
public interface UserInfoDao extends JpaRepository<UserInfo,Integer> {

}
