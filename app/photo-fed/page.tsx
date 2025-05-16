import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function PhotoHomie() {
  return (
    <main className="container mx-auto flex-col">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-fed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}