package com.management.submarine.ocean.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Table(name = "submarine")

@Entity
public class Submarine {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String submarineName;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSubmarineName() {
		return submarineName;
	}

	public void setSubmarineName(String submarineName) {
		this.submarineName = submarineName;
	}

}
