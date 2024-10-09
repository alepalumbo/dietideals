package com.dietideals.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "auctions")
public class Auction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long auctionId;

    @Column(name = "seller_id")
    private Long sellerId;

    private String title;

    private String description;

    private String condition;

    @Column(name = "initial_price")
    private double initialPrice;

    @Column(name = "minimum_price")
    private double minimumPrice;

    @Column(name = "decrement_interval")
    private String decrementInterval; // Può essere null per "fixed_time" auctions

    @Column(name = "decrement_amount")
    private Double decrementAmount; // Può essere null per "fixed_time" auctions

    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Column(name = "auction_type")
    private String auctionType;

    @Column(name = "end_time")
    private LocalDateTime endTime; // Solo per "fixed_time" auctions

    private String status;

    // Getter e setter
    public Long getAuctionId() {
        return auctionId;
    }

    public void setAuctionId(Long auctionId) {
        this.auctionId = auctionId;
    }

    public Long getSellerId() {
        return sellerId;
    }

    public void setSellerId(Long sellerId) {
        this.sellerId = sellerId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getInitialPrice() {
        return initialPrice;
    }

    public void setInitialPrice(double initialPrice) {
        this.initialPrice = initialPrice;
    }

    public double getMinimumPrice() {
        return minimumPrice;
    }

    public void setMinimumPrice(double minimumPrice) {
        this.minimumPrice = minimumPrice;
    }

    public String getDecrementInterval() {
        return decrementInterval;
    }

    public void setDecrementInterval(String decrementInterval) {
        this.decrementInterval = decrementInterval;
    }

    public Double getDecrementAmount() {
        return decrementAmount;
    }

    public void setDecrementAmount(Double decrementAmount) {
        this.decrementAmount = decrementAmount;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public String getAuctionType() {
        return auctionType;
    }

    public void setAuctionType(String auctionType) {
        this.auctionType = auctionType;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }
}


