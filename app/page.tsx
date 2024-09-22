'use client';

import { useEffect, useState } from "react";

// Declare WebApp globally
declare const WebApp: any;

interface Userdata {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<Userdata | null>(null);

  useEffect(() => {
    // Assuming WebApp.initDataUnsafe is defined in the global scope by Telegram WebApp SDK
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as Userdata);
    }
  }, []);

  return (
    <main className="p-4">
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            {userData.last_name && <li>Last Name: {userData.last_name}</li>}
            {userData.username && <li>Username: {userData.username}</li>}
            <li>Language Code: {userData.language_code}</li>
            <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}

