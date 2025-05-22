import { ClientComponentOne } from "../components/client-component-one";
import { ServerComponentOne } from "../components/server-component-one";

export default function InterleavingPage(){
    return(
        <>
        <div className="container flex-col">

            <h1>Interleaving Page</h1>
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>

        </div>
        </>
    )
}