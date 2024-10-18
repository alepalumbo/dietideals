//package com.dietideals;
//
//import com.dietideals.model.User;
//import com.dietideals.repository.UserRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDate;
//import java.util.Optional;
//
//@Component
//public class DatabaseTestRunner implements CommandLineRunner {
//
//    private final UserRepository userRepository;
//
//    public DatabaseTestRunner(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//
//        userRepository.findAll().forEach(user -> System.out.println("Fullname: " + user.getFullname()));
//
//        Optional<User> user = userRepository.findByEmail("jane.smith@example.com");
//        if (user != null) {
//            System.out.println("Found user: " + user);
//        } else {
//            System.out.println("User not found");
//        }
//    }
//}
