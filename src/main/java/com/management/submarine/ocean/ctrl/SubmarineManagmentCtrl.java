package com.management.submarine.ocean.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.management.submarine.ocean.entity.Submarine;
import com.management.submarine.ocean.service.SubmarineManagmentService;

@RestController
@CrossOrigin(origins = "http://localhost:9090")
public class SubmarineManagmentCtrl {

	@Autowired
	SubmarineManagmentService service;

	@PostMapping("/registerSubmarine")
	public boolean registerSubmarine(@RequestBody Submarine submarine) {
		if (submarine != null) {
			boolean isExist = service.checkSubmarineExistOrNot(submarine);
			if (!isExist) {
				return service.registerSubmarine(submarine);
			}
		}
		return false;
	}

	@PostMapping("/hideSubmarine")
	public boolean hideSubmarine(@RequestBody Submarine submarine) {
		return service.hideSubmarine(submarine);
	}

}
