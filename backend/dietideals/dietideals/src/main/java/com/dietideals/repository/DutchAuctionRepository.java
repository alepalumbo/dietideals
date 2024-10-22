package com.dietideals.repository;

import com.dietideals.model.impl.DutchAuctionEntityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DutchAuctionRepository extends JpaRepository<DutchAuctionEntityEntity, Long> {
}
