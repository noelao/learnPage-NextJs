"use client"
import { useRouter } from "next/navigation";

export default function Order(){
    const router = useRouter();
    const OrderSekarang = () => {
        console.log("Order Sekarang");
        // seperti redirect
        router.push("/");
        // adabanya seperti router.replace(..) router.back()
        // redirect("/");
    }
    return (
        <>
        <div className="flex p-12">
            <button onClick={OrderSekarang} className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <h1>Order Now</h1>
            </button>
        </div>
        </>
    )
}