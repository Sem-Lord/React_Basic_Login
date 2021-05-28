import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center">
                <i
                  className="fa fa-user-circle"
                  style={{ fontSize: "110px" }}
                ></i>
              </h4>
              <div className="image"></div>
              <center>
                <h4>Salut {this.state.value}</h4>
              </center>
            </div>
            <div className="body-form">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="test"
                    className="form-control"
                    placeholder="Username"
                    value={this.state.value}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa fa-envelope-square"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email adress"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    pattern=".{6,}" title="Le mot de passe doit contenir au moins 6 caractères, 1 lettre, 1 chiffre, et 1 caractère spécial."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-secondary btn-block">
                  LOGIN
                </button>
                <div className="message">
                  <div>
                    <input type="checkbox" /> Remember ME
                  </div>
                  <div>
                    <a href="#">Forgot your password</a>
                  </div>
                </div>
              </form>
              <div className="social">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="#">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
