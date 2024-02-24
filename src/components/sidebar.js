import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
  useEffect(() => {
    actions.authCheck();
  }, []);
  return (
    <div
      className="fixed-top vh-100 container-wrap d-flex flex-column justify-content-between p-3 bg-light-subtle float-start"
      style={{ width: "320px" }}
    >
      <div>
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-3 fw-bold">
            Authentication system with Python Flask and React.js{" "}
          </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto fw-bold">
          <li className="nav-item">
            <Link to="/public/1" className="nav-link text-white">
              Public 1
            </Link>
          </li>
          <li>
            <Link to="/public/2" className="nav-link text-white">
              Public 2
            </Link>
          </li>
          <li>
            <Link to="/private/1" className="nav-link text-white">
              Private 1
            </Link>
          </li>
          <li>
            <Link to="/private/2" className="nav-link text-white">
              Private 2
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <hr />
        {sessionStorage.getItem("currentUser") ? (
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <strong className="fs-3 fw-semibold text-white">{sessionStorage.getItem("currentUser")}</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a className="dropdown-item" onClick={(e)=>{actions.signout()}}>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin" className="fs-4">
            <strong>Sign in</strong>
          </Link>
        )}
        <div>
          <strong>{store.message || "Waiting for the backend..."}</strong>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
