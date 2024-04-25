package com.ey.CartBackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "products")


public class CustQtyOnly {
	@Column(name = "BookID")
	private String BookID;
	
	@Column(name = "CustQty")
	private String CustQty;

	public CustQtyOnly(String bookID, String custQty) {
		super();
		BookID = bookID;
		CustQty = custQty;
	}

	public String getBookID() {
		return BookID;
	}

	public void setBookID(String bookID) {
		BookID = bookID;
	}

	public String getCustQty() {
		return CustQty;
	}

	public void setCustQty(String custQty) {
		CustQty = custQty;
	}
	
	
	
}
