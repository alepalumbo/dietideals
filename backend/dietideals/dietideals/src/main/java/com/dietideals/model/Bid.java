package com.dietideals.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long bidId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;

    @Column(name = "bid_amount")
    private double bidAmount;

    @Column(name = "bid_time")
    private LocalDateTime bidTime;

}
