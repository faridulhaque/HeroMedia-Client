import React, { useState } from "react";
import { auth } from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useRegisterUserMutation } from "../../api/queries/registerApi";

const SignIN = ({ setRegisterPage }) => {

  const [register, { isLoading: registering }] = useRegisterUserMutation();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const handleLogin = () => {
    if (!email || !password) {
      return setErr("All fields are required");
    } else if (password.length <= 7) {
      return setErr("Password must be at least 7 characters");
    }

    signInWithEmailAndPassword(email, password);


  };


  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result?.user?.uid) {
     const data = await register({
        email: result?.user?.email,
        displayName: result?.user?.displayName,
      });

      if(data?.data?.acknowledged || data?.data?.msg === "Already Exists"){
        window.location.reload()
      }
    }
  
  };


  if(user){
    window.location.reload()
  }
  return (
    <>
      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="email"
          placeholder="Enter your email"
          required
          name="email"
          onBlur={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="password"
          placeholder="Enter your password"
          required
          name="password"
          onBlur={(e) => setPassword(e.target.value)}
        />
      </div>

      {err && (
        <div className="w-11/12 mx-auto mb-5">
          <small className="text-red-500">{err}</small>
        </div>
      )}

      <button
        onClick={() => handleLogin()}
        type="button"
        className="w-11/12 mt-2 block mx-auto bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] hover:from-[#ADD8E6] hover:to-[#87CEEB] text-white font-bold py-2 px-4 rounded"
      >
        Sign In
      </button>

      <div className="divider">OR</div>

      <button
        type="button"
        onClick={() => handleGoogleSignIn()}
        className="w-11/12 mt-2 block mx-auto btn bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
      >
        Sign In with Google
      </button>

      <div className="w-11/12 mx-auto mb-5">
        <small className="text-black">
          Don't have an account?{" "}
          <button
            onClick={() => setRegisterPage(true)}
            className="text-blue-400"
          >
            Sign up now
          </button>
        </small>
      </div>
    </>
  );
};

export default SignIN;
