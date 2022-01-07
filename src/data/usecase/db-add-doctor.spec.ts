import { DoctorModel } from "../../domain/models/doctor";
import { AddDoctorParams } from "../../domain/usecases/add-doctor";
import { AddDoctorRepository } from "../repositories/add-doctor-repository";
import { DbAddDoctor } from "./db-add-doctor";

const mockAddDoctorParams = ():AddDoctorParams => ({
    name: "any_name",
    crm: 111111,
    phone_home: 222222,
    phone_mobile: 333333,
    cep: 44444444,
    street: "any_street",
    number: 555,
    speciality_codes: "1,2,3",
})
const mockDoctorModel = (): DoctorModel => ({
    id: "any_id",
    name: "any_name",
    crm: 111111,
    phone_home: 222222,
    phone_mobile: 333333,
    cep: 44444444,
    street: "any_street",
    number: 555,
    speciality_codes: "1,2,3",
    created_at: new Date,
    updated_at: new Date,
});

const mockAddDoctorRepository = (): AddDoctorRepository => {
    class AddDoctorRepositoryStub implements AddDoctorRepository {
        execute(data: AddDoctorParams): Promise<DoctorModel>{
            return Promise.resolve(mockDoctorModel());
        }
    }
    return new AddDoctorRepositoryStub;
}

type SutTypes = {
    sut: DbAddDoctor,
    addDoctorRepositoryStub: AddDoctorRepository
}

const makeSut = (): SutTypes => {
    const addDoctorRepositoryStub = mockAddDoctorRepository();
    const sut = new DbAddDoctor(addDoctorRepositoryStub);
    return {
        sut,
        addDoctorRepositoryStub
    }
}

describe("Db Add Doctor", () => {
    test("Should call AddDoctorRepository with the correct values", async() => {
        const { sut, addDoctorRepositoryStub } = makeSut();
        const executeSpy = jest.spyOn(addDoctorRepositoryStub, "execute");
        await sut.execute(mockAddDoctorParams());
        expect(executeSpy).toHaveBeenCalledWith(mockAddDoctorParams());
    })

    test("Should return the added doctor on AddDoctorRepository success", async() => {
        const { sut } = makeSut();
        const doctor = await sut.execute(mockAddDoctorParams());
        expect(doctor).toHaveProperty("id");
    })
})