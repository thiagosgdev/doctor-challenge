import { DoctorModel } from "../models/doctor";

export type AddDoctorParams = {
    name: string;
    crm: number;
    phone_home: number;
    phone_mobile: number;
    zip_code: number;
    street: string;
    number: number;
    district: string;
    complement: string;
    city: string;
    state: string;
    speciality_codes: string;
}

export interface AddDoctor {
    add(data: AddDoctorParams): Promise<DoctorModel>
}