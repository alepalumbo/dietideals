//package com.dietideals.model;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.time.LocalDateTime;
//
//@NoArgsConstructor
//@AllArgsConstructor
//@Setter
//@Getter
//@Entity
//@Table(name = "bid")
//public class Bid {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long bidId;
//
//    @ManyToOne
//    @JoinColumn(name = "auction_id")
//    private Auction auction;
//
//    @JoinColumn(name = "user_id")
//    private User userId;
//
//    @Column(name = "bid_amount")
//    private double bidAmount;
//
//    @Column(name = "bid_time")
//    private LocalDateTime bidTime;
//}
