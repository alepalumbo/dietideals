package com.dietideals.service.impl;

import com.dietideals.model.UserEntity;
import com.dietideals.repository.UserRepository;
import com.dietideals.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserEntity save(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }

    @Override
    public Optional<UserEntity> findOne(Long userId) {
        return userRepository.findById(userId);
    }

    @Override
    public UserEntity partialUpdate(Long userId, UserEntity userEntity) {
        userEntity.setUserId(userId);
        return userRepository.findById(userId).map(existingUser -> {
            Optional.ofNullable(userEntity.getEmail()).ifPresent(existingUser::setEmail);
            Optional.ofNullable(userEntity.getPassword()).ifPresent(existingUser::setPassword);
            Optional.ofNullable(userEntity.getFullname()).ifPresent(existingUser::setFullname);
            Optional.ofNullable(userEntity.getDateOfBirth()).ifPresent(existingUser::setDateOfBirth);
            Optional.ofNullable(userEntity.getBio()).ifPresent(existingUser::setBio);
            Optional.ofNullable(userEntity.getLocation()).ifPresent(existingUser::setLocation);
            Optional.ofNullable(userEntity.getPhoneNumber()).ifPresent(existingUser::setPhoneNumber);
            Optional.ofNullable(userEntity.getZipCode()).ifPresent(existingUser::setZipCode);
            Optional.ofNullable(userEntity.getAddress()).ifPresent(existingUser::setAddress);
            Optional.ofNullable(userEntity.getProfilePictureUrl()).ifPresent(existingUser::setProfilePictureUrl);
            Optional.ofNullable(userEntity.getMemberSince()).ifPresent(existingUser::setMemberSince);
            Optional.ofNullable(userEntity.getUrls()).ifPresent(existingUser::setUrls);
            return userRepository.save(existingUser);
        }).orElseThrow(() -> new RuntimeException("User does not exist"));
    }
}
