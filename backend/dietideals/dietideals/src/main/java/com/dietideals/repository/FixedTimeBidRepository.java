package com.dietideals.repository;


import com.dietideals.model.impl.FixedTimeBidEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FixedTimeBidRepository extends JpaRepository<FixedTimeBidEntity, Long> {
}
