package com.dietideals.repository;

import com.dietideals.model.AuctionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FixedTimeAuctionRepository extends JpaRepository<AuctionEntity, Long> {

}
