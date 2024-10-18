package com.dietideals.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass
//@Table(name = "auctions")
public abstract class Auction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long auctionId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    protected User seller;

    protected String title;

    protected String description;

    protected String condition;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    protected Category category;

    @Column(name = "initial_price")
    protected double initialPrice;

    @Column(name = "minimum_price")
    protected double minimumPrice;

//    @Column(name = "decrement_interval")
//    protected String decrementInterval; // Può essere null per "fixed_time" auctions
//
//    @Column(name = "decrement_amount")
//    protected Double decrementAmount; // Può essere null per "fixed_time" auctions

    @Column(name = "start_time")
    protected LocalDateTime startTime;

//    @Column(name = "auction_type")
//    protected String auctionType;

//    @Column(name = "end_time")
//    protected LocalDateTime endTime; // Solo per "fixed_time" auctions

    protected String status;
}


