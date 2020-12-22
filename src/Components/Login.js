import React from "react";

class Login extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <form>
            <div className="form-group">
              <label>Ton pseudo</label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <small className="form-text text-muted">
                Avenger's memory game 
              </small>
            </div>

            <button onClick={this.handleClick} className="btn btn-primary">
              Jouer !
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
