package com.dietideals.model;
import jakarta.persistence.*;

@Entity
public class AuctionCategory {

    @EmbeddedId
    private AuctionCategoryId id;

    public AuctionCategory() {
    }

    public AuctionCategory(Long auctionId, Long categoryId) {
        this.id = new AuctionCategoryId(auctionId, categoryId);
    }

    // Getters e Setters

    public AuctionCategoryId getId() {
        return id;
    }

    public void setId(AuctionCategoryId id) {
        this.id = id;
    }
}
