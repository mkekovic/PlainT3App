import NavBar from './NavBar';
import { WelcomeName } from './WelcomeName';
import { useIsAuthenticated } from "@azure/msal-react";
// import { useSession } from "next-auth/react"// For auth with NextAuth

export default function Layout(props: any) {
    const welcomeComponent: any = WelcomeName();
      const isAuthenticated: any = useIsAuthenticated();
    // const { data: session } = useSession()// For auth with NextAuth

    return (
        <div className='w-full'>
            <div className='w-full flex justify-center justify-items-center items-center'>{(isAuthenticated) && welcomeComponent}</div>
            {/* <div className='w-full flex justify-center justify-items-center items-center'>{(session) && welcomeComponent}</div> // For auth with NextAuth */}
            <NavBar />
            <hr />
            {props.children}
            <hr />
            <div className='text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
                ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                dolorem eum fugiat quo voluptas nulla pariatur
            </div>
        </div>
    )
}