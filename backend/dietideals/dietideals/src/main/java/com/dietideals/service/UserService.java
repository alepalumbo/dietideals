package com.dietideals.service;

import com.dietideals.model.UserEntity;

import java.util.Optional;

public interface UserService {

      UserEntity save(UserEntity userEntity);

      Optional<UserEntity> findOne(Long userId);

      UserEntity partialUpdate(Long userId, UserEntity userEntity);

//    public User updateUser(Long userId, User updatedUser) {
//        Optional<User> userOptional = userRepository.findById(userId);
//        if (userOptional.isPresent()) {
//            User user = userOptional.get();
//            user.setEmail(updatedUser.getEmail());
//            user.setFullname(updatedUser.getFullname());
//            user.setDateOfBirth(updatedUser.getDateOfBirth());
//            user.setBio(updatedUser.getBio());
//            user.setLocation(updatedUser.getLocation());
//            user.setPhoneNumber(updatedUser.getPhoneNumber());
//            user.setZipCode(updatedUser.getZipCode());
//            user.setAddress(updatedUser.getAddress());
//            user.setProfilePictureUrl(updatedUser.getProfilePictureUrl());
//            user.setUpdatedAt(LocalDate.now());
//            return userRepository.save(user);
//        } else {
//            return null;
//        }
//    }
}
