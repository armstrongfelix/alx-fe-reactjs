import React from "react";

function UserProfile(props) {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </>
  );
}

export default UserProfile;
