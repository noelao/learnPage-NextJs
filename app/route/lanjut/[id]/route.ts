import { data } from "../data"

export async function GET(
    _req: Request,
    { params }: {params : Promise<{ id:string }>}
){
    const {id} = await params;
    const comment = data.find((datak) => datak.id == parseInt(id))
    return Response.json(comment)
}

export async function PATCH(
    req: Request,
    { params }: {params : Promise<{ id:string }>}
) {
    const {id} = await params;
    const body = await req.json();
    const { text } = body;

    const index = data.findIndex((datak) => datak.id === parseInt(id))
    data[index].komentar = text

    return Response.json(data[index].komentar)
}

export async function DELETE(
    _req: Request,
    { params }: {params : Promise<{ id:string }>}
){
    const { id } = await params;
    const index = data.findIndex((datak) => datak.id === parseInt(id));
    const deletedData = data[index];

    data.splice(index, 1)

    return Response.json(deletedData)
}