import React from 'react'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = { currentUser : null};
  }

  

    render(){
        return(
          <div>
            <button type="button" class="btn btn-success">Login</button>
            <button type="button" class="btn btn-danger">Logout</button>
          </div>
        )
    }

}export default Login;