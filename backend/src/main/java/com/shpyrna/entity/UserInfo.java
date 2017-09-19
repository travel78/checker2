package com.shpyrna.entity;

import lombok.*;

import javax.persistence.*;

/**
 * Created by Юра on 12.09.2017.
 */

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String city;
    private int phoneNumber;
    private String sendingInfo;
    @OneToOne
    private User user;


    public UserInfo(String firstName, String lastName, String city, int phoneNumber, String sendingInfo,User user) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.sendingInfo = sendingInfo;
        this.user = user;
    }
}
