package com.ey.CartBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ey.CartBackend.model.CustQtyOnly;

public interface CustRepository extends JpaRepository<CustQtyOnly, String>{

}
