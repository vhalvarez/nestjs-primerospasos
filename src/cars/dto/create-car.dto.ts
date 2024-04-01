import { IsString } from 'class-validator'

export class CreateCarDto{

    @IsString({ message: 'The brand be a cool string'})
    readonly brand: string;

    @IsString({ message: 'The model be a cool string'})
    readonly model: string;
}