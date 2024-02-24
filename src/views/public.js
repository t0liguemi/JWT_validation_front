import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/context";

const PublicView = () => {
  const { store, actions } = useContext(Context);
  const { viewID } = useParams();
  useEffect(() => {
  }, []);
  return (
    <div className="container my-4">
      <h3>This is the public view {viewID}</h3>
      <h4>You should be able to visit this whether you are logged in or not</h4>
    </div>
  );
};
export default PublicView;
