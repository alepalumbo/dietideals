package com.dietideals.model;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;


    private String email;


    private String password;


    private String fullname;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    private String bio;

    private String location;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "zip_code")
    private String zipCode;

    private String address;

    @Column(name = "profile_picture_url")
    private String profilePictureUrl;

    @Column(name = "member_since")
    private LocalDate memberSince;

}
