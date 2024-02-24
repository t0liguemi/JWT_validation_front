import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/context";
function SinginView(){
  const {store,actions}=useContext(Context)
  const navigate = useNavigate()
  function handleSubmit(e){  
    e.preventDefault()
    console.log(e)
    if (e.target[0].value==""||e.target[1].value==""){
      alert("Invalid credentials")
    }else{
    actions.signinAttempt(e, navigate)}
  }
  return (
  <div className="d-flex align-items-center py-4 ">
    <div className="form-signin w-25 m-auto bg-body-tertiary p-4 rounded">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Username"
          />
          <label htmlFor="floatingInput">Username</label>
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
        <button className="btn btn-primary w-100 py-2 my-2 mt-3" type="submit">
          Sign in
        </button>
        <Link to="/signup">
        <button className="btn btn-secondary w-100 py-2 my-2" type="button">
          No account? Create one here
        </button></Link>
      </form>
    </div>
    </div>
  );
};

export default SinginView