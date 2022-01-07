import { DoctorModel } from "../models/doctor";

export type AddDoctorParams = {
    name: string;
    crm: number;
    phone_home: number;
    phone_mobile: number;
    cep: number;
    street: string;
    number: number;
    speciality_codes: string;
}

export interface AddDoctor {
    add(data: AddDoctorParams): Promise<DoctorModel>
}