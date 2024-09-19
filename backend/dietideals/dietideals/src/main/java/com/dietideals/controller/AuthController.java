// src/main/java/com/dietideals/controller/AuthController.java
/*package com.dietideals.controller;

import com.dietideals.dto.LoginRequest;
import com.dietideals.model.User;
import com.dietideals.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOpt = userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            String jwtToken = userService.generateJwtToken(user);

            Map<String, Object> response = new HashMap<>();
            response.put("userId", user.getId());
            response.put("token", jwtToken);

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

} */

