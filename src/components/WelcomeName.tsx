import { useMsal } from '@azure/msal-react';
import { useState, useEffect } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
// import { useSession } from "next-auth/react"

export const WelcomeName = () => {
    const { instance } = useMsal();
    const isAuth: any = useIsAuthenticated();
    const [ name, setUserName ] = useState('');
    // const { data: session } = useSession();// For auth with NextAuth

    useEffect(() => {
        const currentAccount = instance.getActiveAccount();

        if (currentAccount && currentAccount.name) {
            setUserName(currentAccount.name);
        }
    }, [ instance, isAuth ]);

    return (<p className='my-2'>Welcome {name}</p>);
    // return (<p className='my-2'>Welcome {session?.user?.name}</p>) // For auth with NextAuth
};