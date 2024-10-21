package com.dietideals.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass
public class Auction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Long auctionId;

    @ManyToOne(cascade = CascadeType.ALL)
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

    @Column(name = "start_time")
    protected LocalDateTime startTime;

    protected String status;

    @Column(name = "auction_images")
    protected String auctionImages;
}


