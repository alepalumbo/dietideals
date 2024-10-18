//package com.dietideals.service;
//
//import com.dietideals.model.User;
//import com.dietideals.repository.UserRepository;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDate;
//import java.util.Map;
//import java.util.Optional;
//
//@Service
//public class UserService {
//
//    private final UserRepository userRepository;
//
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    public User getUserById(Long userId) {
//        return userRepository.findById(userId).orElse(null);
//    }
//
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
//
//    public User patchUser(Long userId, Map<String, Object> updates) {
//        Optional<User> userOptional = userRepository.findById(userId);
//        if (userOptional.isPresent()) {
//            User user = userOptional.get();
//
//            updates.forEach((key, value) -> {
//                switch (key) {
//                    case "email": user.setEmail((String) value); break;
//                    case "fullname": user.setFullname((String) value); break;
//                    case "dateOfBirth": user.setDateOfBirth(LocalDate.parse((String) value)); break;
//                    case "bio": user.setBio((String) value); break;
//                    case "location": user.setLocation((String) value); break;
//                    case "phoneNumber": user.setPhoneNumber((String) value); break;
//                    case "zipCode": user.setZipCode((String) value); break;
//                    case "address": user.setAddress((String) value); break;
//                    case "profilePictureUrl": user.setProfilePictureUrl((String) value); break;
//                }
//            });
//
//            user.setUpdatedAt(LocalDate.now());
//            return userRepository.save(user);
//        } else {
//            return null;
//        }
//    }
//}
