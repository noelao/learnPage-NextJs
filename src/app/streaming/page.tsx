import { Suspense } from "react";
import { Product } from "../components/straming1";
import { Product2 } from "../components/straming2";

export default function Streamm(){
    return (
        <div>
            <h1>Product Review</h1>
            <Suspense fallback={<h1>Loading ...</h1>}>
                <Product/>
            </Suspense>
            <Suspense fallback={<h1>Loading ...</h1>}>
                <Product2/>
            </Suspense>
        </div>
    )
}