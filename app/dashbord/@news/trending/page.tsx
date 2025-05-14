import { Card } from "@/app/components/card";
import Link from "next/link";

export default function TrendingNews(){
    return (
        <Card>
            <div className="flex flex-col">
                <h2>
                    Trending News
                </h2>
                <div className="text-blue-500 hover:text-blue-950">
                    <Link href={"/dashbord"}>Default</Link>
                </div>
            </div>
        </Card>
    )
}
// ini akan menyebabakna error pada page bila di refresh maka dari itu
// pada dahsbord/trending

// maka dari itu akan ditambahkan file default.tsx pada setiap link di dashbord
