package login.eshoppings.controller;

import login.eshoppings.entity.User;
import login.eshoppings.payload.LoginRequest; // Assuming you have created this class to hold login credentials
import login.eshoppings.service.UserService;
import login.eshoppings.payload.UserDTO; // Assuming you have created this class to transfer user data safely

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.blog.exception.ResourceNotFoundException; // Make sure this import is correct
import com.springboot.blog.repository.UserRepository;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository; 

    @Autowired
    private UserService userService;

    @PostMapping("/login")	
    public ResponseEntity<UserDTO> checkValidation(@RequestBody LoginRequest loginRequest) {
        String mailId = loginRequest.getEmail();
        String pass = loginRequest.getPassword();
        User user = userRepository.findByEmailAndPassword(mailId, pass)
            .orElseThrow(() -> new ResourceNotFoundException("No User registered :("));

        
        UserDTO userDTO = userService.convertToUserDTO(user);

        return ResponseEntity.ok(userDTO);
    }
}
