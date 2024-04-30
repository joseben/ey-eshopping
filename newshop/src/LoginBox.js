import React from 'react';
import './LoginBox.css';

class LoginBox extends React.Component {
    state = {
        rememberMe: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    handleRegister = () => {
        
    }

    handleRememberMe = (event) => {
        this.setState({ rememberMe: event.target.checked });
    }

    render() {
        return (
            <div className="container">
                <div className="text-box">
                    <h1>Welcome to GrabOn Book Store</h1>
                    <h3>GrabOn's book section provides an extensive selection of books, including new releases, bestsellers, and gift-worthy titles.You can explore different genres and formats here.</h3>
                </div>

                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name="email" placeholder="Email Address" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <div className="remember-me">
                            <input type="checkbox" id="rememberMe" name="rememberMe" checked={this.state.rememberMe} onChange={this.handleRememberMe} />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <input type="submit" value="Login" />
                        <button type="button" className="register-button" onClick={this.handleRegister}>Register</button>
                    </form>
                    <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>
                </div>
            </div>
        );
    }
}

export default LoginBox;