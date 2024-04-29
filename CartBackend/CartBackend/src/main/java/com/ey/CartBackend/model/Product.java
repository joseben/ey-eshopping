package com.ey.CartBackend.model;

import javax.persistence.*;
//import jakarta.persistence.*;


@Entity
@Table(name = "products")

public class Product {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	
	@Column(name = "BookID")
	private String BookID;
	
	@Column(name = "BookName")
	private String BookName;

	
	@Column(name = "CustQty")
	private String CustQty;
	
	@Column(name = "TotalQty")
	private String TotalQty;
	
	@Column(name = "Price")
	private String Price;
	
	public Product() {
		
	}

	public Product(String bookID, String bookName, String custQty, String totalQty, String price) {
		super();
		BookID = bookID;
		BookName = bookName;
		CustQty = custQty;
		TotalQty = totalQty;
		Price = price;
	}

	public String getBookID() {
		return BookID;
	}

	public void setBookID(String bookID) {
		BookID = bookID;
	}

	public String getBookName() {
		return BookName;
	}

	public void setBookName(String bookName) {
		BookName = bookName;
	}

	public String getCustQty() {
		return CustQty;
	}

	public void setCustQty(String custQty) {
		CustQty = custQty;
	}

	public String getTotalQty() {
		return TotalQty;
	}

	public void setTotalQty(String totalQty) {
		TotalQty = totalQty;
	}

	public String getPrice() {
		return Price;
	}

	public void setPrice(String price) {
		Price = price;
	}
	
	
	
}
