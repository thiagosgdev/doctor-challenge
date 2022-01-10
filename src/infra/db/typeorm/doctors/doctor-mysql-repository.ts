import { Doctor } from "@/domain/entities/doctor";
import { DoctorModel } from "@/domain/models/doctor";
import { AddDoctor, AddDoctorParams } from "@/domain/usecases/add-doctor";
import { getRepository, Repository } from "typeorm";


export class DoctorMysqlRepository implements AddDoctor{

    private readonly repository: Repository<Doctor>
    constructor(){
        this.repository = getRepository(Doctor);
    }

    async add(data: AddDoctorParams): Promise<DoctorModel> {
        const doctor = this.repository.create(data);
        if(doctor){
            await this.repository.save(doctor);
            return doctor;
        }
        return null;
    }

}