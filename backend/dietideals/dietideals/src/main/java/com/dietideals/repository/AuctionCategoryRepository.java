package com.dietideals.repository;

import com.dietideals.model.AuctionCategory;
import com.dietideals.model.AuctionCategoryId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionCategoryRepository extends JpaRepository<AuctionCategory, AuctionCategoryId> {
}
