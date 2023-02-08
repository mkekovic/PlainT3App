import { useMsal } from '@azure/msal-react';
// import { signOut } from "next-auth/react";

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleSignout = () => {
        instance.logoutRedirect();
    }
    return (
        <button onClick={() => handleSignout()}>
            Sign Out
        </button>
    )
};