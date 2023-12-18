import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./card";
import { Separator } from "./separator";

export default function CountryCard({
    name,
    fullName,
    population,
    flag,
    area,
    capital,
    subRegion,
    languages,
    currencies,
    continents,
}: {
    name: string;
    fullName: string;
    population: number;
    flag: string;
    area: number;
    capital: string;
    subRegion: string;
    languages: string[];
    currencies: string;
    continents: string[];
}) {
    console.log(languages);
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="flex flex-col shadow-2xl w-[760px] h-[760px]">
                <img
                    src={flag}
                    width={250}
                    className="mx-auto mt-10 rounded-md"
                ></img>
                <CardHeader>
                    <CardTitle className="text-center">{name}</CardTitle>
                    <CardDescription className="text-center">
                        {fullName}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-center justify-evenly gap-5 md:gap-0">
                        <p className="p-4 bg-[#282B30] rounded-lg">
                            Population | {population.toLocaleString()}
                        </p>
                        <p className="p-4 bg-[#282B30] rounded-lg">
                            Area(km<sup>2</sup>) | {area.toLocaleString()}
                        </p>
                    </div>
                    <div className="mt-10 flex flex-col gap-5 md:gap-6">
                        <div className="flex items-center justify-between">
                            <p className="text-muted-foreground">Capital</p>
                            <p>{capital}</p>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <p className="text-muted-foreground">Subregion</p>
                            <p>{subRegion}</p>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <p className="text-muted-foreground">Languages</p>
                            <p>{languages.join(", ")}</p>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <p className="text-muted-foreground">Currencies</p>
                            <p>{currencies}</p>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <p className="text-muted-foreground">Continents</p>
                            <p>{continents.join(", ")}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
