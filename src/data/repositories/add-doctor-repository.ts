import { DoctorModel } from "../../domain/models/doctor";
import { AddDoctorParams } from "../../domain/usecases/add-doctor";

export interface AddDoctorRepository {
    execute(data: AddDoctorParams): Promise<DoctorModel>
}