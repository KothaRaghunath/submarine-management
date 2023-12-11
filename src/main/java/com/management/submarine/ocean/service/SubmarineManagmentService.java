package com.management.submarine.ocean.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.management.submarine.ocean.entity.Submarine;
import com.management.submarine.ocean.repo.SubmarineManagmentRepo;

@Service
public class SubmarineManagmentService {
	@Autowired
	SubmarineManagmentRepo submarineRepo;

	public boolean registerSubmarine(Submarine submarine) {
		Submarine res =  submarineRepo.save(submarine);
		if(res != null) {
			return true;
		}
		return false;
	}
	@Transactional
	public boolean hideSubmarine(Submarine submarine) {
		int result = submarineRepo.deleteBySubmarineName(submarine.getSubmarineName());
		System.out.println("result===="+result);
		if(result ==1 ) {
			return true;
		}
		return false;
	}

	public boolean checkSubmarineExistOrNot(Submarine submarine) {
		Submarine res =  submarineRepo.findBySubmarineName(submarine.getSubmarineName());
		if(res != null) {
			return true;
		}
		return false;
	}

}
