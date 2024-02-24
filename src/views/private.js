import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/context";

const Privateview = () => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context);
  const { viewID } = useParams();
  useEffect(() => {
    actions.authCheck(navigate)
  }, [store.isAuthenticated]);
  return (
    store.isAuthenticated?
    <div className="container my-4">
      <h3>This is the private view {viewID}</h3>
      <h4>You should be logged in to be able to see this</h4>
    </div>:<div className="spinner-border" role="status">
</div>
  );
};
export default Privateview;
