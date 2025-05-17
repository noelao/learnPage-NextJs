import { Card } from "@/src/app/components/card";
import Link from "next/link";

export default function BeritaNew(){
    return (
        <Card>
            <div className="flex flex-col">
                <h1>Berita</h1>
                <div className="text-blue-500 hover:text-blue-950">
                    <Link href={"/dashbord/trending"}>trending</Link>
                </div>
            </div>
        </Card>
    )
}