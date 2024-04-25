package com.ey.CartBackend.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ey.CartBackend.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, String>{

}

@Transactional
@Query("update Products h set h.CustQty = :CustQty where h.id = :id")
void updateCustQty(@Param("id") String id, @Param("CustQty") String CustQty);