package login.eshoppings.entity;

@jakarta.persistence.Entity
public class User {
    
    @jakarta.persistence.Id
    private Long id;
    private String username;
    private String password; 
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}
    
    
}

