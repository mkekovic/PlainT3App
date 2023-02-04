// import { useMsal } from '@azure/msal-react';
import { signIn } from "next-auth/react";

export const SignInButton = () => {
    // const { instance }  = useMsal();

    // const handleSignIn = () => {
    //     instance.loginRedirect({
    //         scopes: ['user.read']
    //     });
    // }

    return (
        <button className="btn btn-blue" onClick={() => void signIn()}>
            Sign In
        </button>
    )
}