package com.dietideals.repository;

import com.dietideals.model.impl.DutchBidEntityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DutchBidRepository extends JpaRepository<DutchBidEntityEntity, Long> {
}
