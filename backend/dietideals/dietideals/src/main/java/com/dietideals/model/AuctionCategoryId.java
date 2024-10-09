package com.dietideals.model;
import jakarta.persistence.*;

import java.io.Serializable;

@Embeddable
public class AuctionCategoryId implements Serializable {

    private Long auctionId;
    private Long categoryId;

    public AuctionCategoryId() {
    }

    public AuctionCategoryId(Long auctionId, Long categoryId) {
        this.auctionId = auctionId;
        this.categoryId = categoryId;
    }

    // Getters e Setters

    public Long getAuctionId() {
        return auctionId;
    }

    public void setAuctionId(Long auctionId) {
        this.auctionId = auctionId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
