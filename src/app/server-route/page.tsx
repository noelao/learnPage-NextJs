import { serverSideFunction } from "@/src/utils/server-utils"

export default function ServerRoutePage() {
    const result = serverSideFunction()
    return (
        <div className="container flex-col">
            <h1>Server Route</h1>
            {result}
        </div>
    )
};
