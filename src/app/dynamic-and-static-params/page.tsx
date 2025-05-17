import Link from "next/link";

export default function page() {
    return (
        <div className="container">
            <Link href={"/dynamic-and-static-params/1"}>
                <h1>Here ?</h1>
            </Link>
        </div>
    )
};
