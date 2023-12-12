import { IsNotEmpty } from "class-validator";
import { Product } from "src/frameworks";


export class CategoryDTO{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    desc: string;

    products: Product[];
}
