package login.eshoppings.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import login.eshoppings.entity.User;
import login.eshoppings.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }
}
