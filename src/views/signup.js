import { useContext } from "react";
import { Context } from "../store/context";

function SignupView(){
  const {store,actions}=useContext(Context)

  function handleSubmit(e){
    e.preventDefault()
    if (e.target[0].value==""||e.target[1].value==""||e.target[2].value==""){
      alert("Credenciales inválidas")
    }else{
    actions.signupAttempt(e)}
  }

  return (
  <div className="d-flex align-items-center py-4 ">
    <div className="form-signin w-25 m-auto bg-body-tertiary p-4 rounded">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1 className="h3 mb-3 fw-normal">Create new account</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="myownusername123"
          />
          <label htmlFor="floatingUsername">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2 my-4" type="submit">
          Sign in
        </button>
      </form>
    </div>
    </div>
  );
};

export default SignupView