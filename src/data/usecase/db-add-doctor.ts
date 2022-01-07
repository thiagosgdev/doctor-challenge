import { DoctorModel } from "../../domain/models/doctor";
import { AddDoctorParams } from "../../domain/usecases/add-doctor";
import { AddDoctorRepository } from "../repositories/add-doctor-repository";


export class DbAddDoctor implements AddDoctorRepository{

    constructor(
        private readonly addDoctorRepository: AddDoctorRepository
    ){}
    async execute(data: AddDoctorParams): Promise<DoctorModel> {
        const doctor = await this.addDoctorRepository.execute(data)
        if(doctor){
            return doctor;
        }
        return null;
    }

}