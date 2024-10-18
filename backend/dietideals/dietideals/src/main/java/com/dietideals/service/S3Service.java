//package com.dietideals.service;
//
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import software.amazon.awssdk.services.s3.S3Client;
//import software.amazon.awssdk.services.s3.model.PutObjectRequest;
//
//import java.io.IOException;
//import java.nio.file.Paths;
//
//@Service
//public class S3Service {
//
//    private final S3Client s3Client;
//
//    public S3Service(S3Client s3Client) {
//        this.s3Client = s3Client;
//    }
//
//    public String uploadFile(MultipartFile file, String bucketName) throws IOException {
//        String key = "profile-images/" + file.getOriginalFilename();
//
//        s3Client.putObject(
//                PutObjectRequest.builder()
//                        .bucket(bucketName)
//                        .key(key)
//                        .build(),
//                Paths.get(file.getOriginalFilename())
//        );
//
//        return s3Client.utilities().getUrl(builder -> builder.bucket(bucketName).key(key)).toExternalForm();
//    }
//}
