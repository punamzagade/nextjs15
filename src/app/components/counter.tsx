"use client";

import { useState } from "react";
import {
  useAuth,
  // useUser
} from "@clerk/nextjs";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const {
    isLoaded,
    userId,
    // sessionId, getToken
  } = useAuth();
  //   const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !userId) {
    return null;
  }

  //   if (!isLoaded || !isSignedIn) {
  //     return null;
  //   }
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-8">
      <p className="font-bold">Count: {count}</p>
      <button className="border-blue-950 bg-black text-white cursor-pointer px-5 border-2 " onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
