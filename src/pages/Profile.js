import React, { useState } from "react";

const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(1);

  return (
    <div>
      {loggedIn==1?<h1>User 1</h1>:loggedIn==2?<h1>User 2</h1>:<h1>User 3</h1>} 
    </div>
  );
}

export default Profile;
