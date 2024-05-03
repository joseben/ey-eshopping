package login.eshoppings.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")

public class Login{
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long loginId;

private String userName;

private String password;

public Login() {
	super();
}

public Login(long loginId, String userName, String password) {
	super();
	this.loginId = loginId;
	this.userName = userName;
	this.password = password;
}

public long getLoginId() {
	return loginId;
}

public void setLoginId(long loginId) {
	this.loginId = loginId;
}

public String getUserName() {
	return userName;
}

public void setUserName(String userName) {
	this.userName = userName;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

@Override
public String toString() {
	return "Login [loginId=" + loginId + ", userName=" + userName + ", password=" + password + "]";
}


	
	
}