import { Country, columns } from "./columns";
import { DataTable } from "./data-table";

function filterMap(arr: any, fields: any) {
    return arr.map((el: any) =>
        fields.reduce((a: any, c: any) => ({ ...a, [c]: el[c] }), {})
    );
}

async function getData(): Promise<Country[]> {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    const newarr = filterMap(data, [
        "flag",
        "name",
        "population",
        "area",
        "region",
    ]);

    console.log(newarr);
    return newarr;
}

export default async function DemoPage() {
    const data = await getData();

    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
