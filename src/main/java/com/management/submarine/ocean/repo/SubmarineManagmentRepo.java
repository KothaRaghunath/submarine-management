package com.management.submarine.ocean.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.management.submarine.ocean.entity.Submarine;

@Repository
public interface SubmarineManagmentRepo extends JpaRepository<Submarine, Integer> {

	int deleteBySubmarineName(String submarineName);

	Submarine findBySubmarineName(String submarineName);

}
