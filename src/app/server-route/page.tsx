import { serverSideFunction } from "@/src/utils/server-utils"
import { ImageSlider } from "../components/imageSLider"

// will be error
// import { clientSideFunction } from "@/src/utils/client-utils"

export default function ServerRoutePage() {
    const result = serverSideFunction()
    return (
        <div className="container flex-col">
            <h1>Server Route</h1>
            {result}
            <ImageSlider/>
        </div>
    )
};
