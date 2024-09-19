package com.dietideals.dto;

import java.time.LocalDateTime;
import java.time.Duration;

public class AuctionRequest {
    private String auctionType;
    private Long sellerId;
    private String title;
    private String description;
    private LocalDateTime endTime;
    private double minimumPrice;
    private double initialPrice;
    private Duration decrementInterval;
    private double decrementAmount;

    public String getAuctionType() {
        return auctionType;
    }

    public void setAuctionType(String auctionType) {
        this.auctionType = auctionType;
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

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public double getMinimumPrice() {
        return minimumPrice;
    }

    public void setMinimumPrice(double minimumPrice) {
        this.minimumPrice = minimumPrice;
    }

    public double getInitialPrice() {
        return initialPrice;
    }

    public void setInitialPrice(double initialPrice) {
        this.initialPrice = initialPrice;
    }

    public Duration getDecrementInterval() {
        return decrementInterval;
    }

    public void setDecrementInterval(Duration decrementInterval) {
        this.decrementInterval = decrementInterval;
    }

    public double getDecrementAmount() {
        return decrementAmount;
    }

    public void setDecrementAmount(double decrementAmount) {
        this.decrementAmount = decrementAmount;
    }
}
