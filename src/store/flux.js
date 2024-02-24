const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: { isAuthenticated: false },
    actions: {
      authCheck: (navigate) => {
        fetch("http://localhost:5000/api/auth", {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json().then((data) => {
                sessionStorage.setItem("currentUser", data.username);
                let isAuthenticated = true;
                setStore({ isAuthenticated });
              });
            } else if (resp.status == 401 || resp.status == 422) {
              sessionStorage.removeItem("currentUser");
              sessionStorage.removeItem("token");
              setStore({ isAuthenticated: false });
              if (navigate) {
                navigate("/signin");
              }
            }
          })
          .catch((error) => {});
      },
      signout: () => {
        setStore({isAuthenticated:false})
        sessionStorage.removeItem("currentUser");
        sessionStorage.removeItem("token");
      },
      signinAttempt: (e, navigate) => {
        fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username: e.target[0].value,
            password: e.target[1].value,
          }),
        })
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json().then((data) => {
                alert("Welcome, " + e.target[0].value + "!");
                sessionStorage.setItem("currentUser", e.target[0].value);
                sessionStorage.setItem("token", data.token);
                navigate("/private/1");
              });
            } else {
              alert("Wrong credentials");
            }
          })

          .catch((error) => {});
      },
      signupAttempt: (e) => {
        fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
          }),
        })
          .then((resp) => {
            if (resp.status == 201) {
              alert("Account created succesfully");
              return resp.json();
            } else {
              alert("Unable to create account");
            }
          })
          .then((data) => {})
          .catch((error) => {});
      },
      testMessage: () => {
        fetch("http://localhost:5000/api/test", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json();
            }
          })
          .then((data) => {
            setStore({ message: data.msg });
          })
          .catch((error) => {});
      },
    },
  };
};
export default getState;
