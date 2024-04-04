import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    { id: uuid(), createdAt: new Date().getTime(), name: 'BMW' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Mercedes-Benz' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Audi' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Lexus' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Volvo' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Porsche' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Jaguar' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Land Rover' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Tesla' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Ferrari' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Lamborghini' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Maserati' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Bugatti' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'McLaren' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Rolls-Royce' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Bentley' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Aston Martin' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Alfa Romeo' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Mazda' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Toyota' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Honda' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Nissan' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Subaru' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Mitsubishi' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Hyundai' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Kia' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Chevrolet' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Ford' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Dodge' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Jeep' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Chrysler' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Cadillac' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'GMC' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Buick' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Volkswagen' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Renault' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Peugeot' },
    { id: uuid(), createdAt: new Date().getTime(), name: 'Fiat' },
];