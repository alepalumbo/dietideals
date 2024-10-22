package com.dietideals.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Table(name = "notification")
public class NotificationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long notificationId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity userEntityId;

    private String message;

    private Boolean read;

    @Column(name = "created_at")
    protected LocalDateTime createdAt;

}
