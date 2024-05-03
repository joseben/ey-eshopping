package login.eshoppings.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import login.eshoppings.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
   User findByUsername(String username);

	Login findByEmailAndPassword(String mailId, String pass);
}
