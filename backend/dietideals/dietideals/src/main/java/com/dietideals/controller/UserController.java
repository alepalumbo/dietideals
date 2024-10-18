//package com.dietideals.controller;
//
//import com.dietideals.model.User;
//import com.dietideals.service.UserService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//
//    private final UserService userService;
//
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @GetMapping("/{userId}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<User> getUserProfile(@PathVariable Long userId) {
//        User user = userService.getUserById(userId);
//        if (user != null) {
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @PutMapping("/{userId}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<User> updateUserProfile(@PathVariable Long userId, @RequestBody User updatedUser) {
//        User user = userService.updateUser(userId, updatedUser);
//        if (user != null) {
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @PatchMapping("/{userId}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<User> patchUserProfile(@PathVariable Long userId, @RequestBody Map<String, Object> updates) {
//        User user = userService.patchUser(userId, updates);
//        if (user != null) {
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//}
