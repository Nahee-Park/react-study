import React from "react";
import queryString from "query-string";

function Login({ match, location }) {
  const params = match.params.id ? match.params.id : "익명";
  console.log("match", match);
  console.log("location", location);
  const query = queryString.parse(location.search);
  console.log(query);
  return (
    <>
      <div>{params} login page</div>
    </>
  );
}

export default Login;
