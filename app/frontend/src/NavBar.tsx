import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface ClientPrincipal {
  userDetails: string;
  identityProvider: string;
}

export default function NavBar(){
  const providers = ['twitter', 'github', 'aad'];
  const redirect = window.location.pathname;
  const [userInfo, setUserInfo] = useState<ClientPrincipal | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  async function getUserInfo(): Promise<ClientPrincipal | undefined> {
    try {
      const response = await fetch('/.auth/me');
      console.log("#####")
      console.log(response)
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }

  return (
<>
     
      {userInfo && (
        <div>
            <p>{userInfo && userInfo.userDetails}</p>
            <p>{userInfo && userInfo.identityProvider}</p>
        </div>
      )}
        <p> AAA </p>   
</>  
  );
};
