import CountryCard from "@/components/ui/CountryCard";

function filterMap(arr: any, fields: any) {
    return arr.map((el: any) =>
        fields.reduce((a: any, c: any) => ({ ...a, [c]: el[c] }), {})
    );
}

export default async function Page({ params }: { params: { id: string } }) {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    const newarr = filterMap(data, [
        "flags",
        "name",
        "population",
        "area",
        "subregion",
        "capital",
        "languages",
        "currencies",
        "continents",
    ]);

    const country = newarr[params.id];
    //@ts-ignore
    const countryCurrency = Object.values(country.currencies)[0].name;

    return (
        <div>
            <CountryCard
                name={country.name.common}
                fullName={country.name.official}
                population={country.population}
                flag={country.flags.png}
                area={country.area}
                capital={country.capital}
                subRegion={country.subregion}
                languages={Object.values(country.languages)}
                currencies={countryCurrency}
                continents={country.continents}
            />
        </div>
    );
}
