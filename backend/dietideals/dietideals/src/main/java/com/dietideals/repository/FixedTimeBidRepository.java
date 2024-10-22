package com.dietideals.repository;


import com.dietideals.model.impl.FixedTimeBidEntityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FixedTimeBidRepository extends JpaRepository<FixedTimeBidEntityEntity, Long> {
}
