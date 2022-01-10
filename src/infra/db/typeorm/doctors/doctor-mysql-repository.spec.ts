import { AddDoctorParams } from "@/domain/usecases/add-doctor";
import { connection } from "../../helper/mysql-connection";
import { DoctorMysqlRepository } from "./doctor-mysql-repository";

const mockAddDoctorParams = ():AddDoctorParams => ({
    name: "any_name",
    crm: 111111,
    phone_home: 222222,
    phone_mobile: 333333,
    zip_code: 44444444,
    street: "any_street",
    number: 555,
    complement: "any_complement",
    district: "any_district",
    city: "any_city",
    state: "aa",
    speciality_codes: "1,2,3",
})

const makeSut = () => {
    return new DoctorMysqlRepository();
}

describe("Doctor Mysql Repository", () => {

    beforeAll(async () => {
        let migrations = await connection.create();
        await migrations.runMigrations();
    });

    beforeEach(async () => {
        await connection.clear();
    });
    afterAll(async () => {
        await connection.close();
    });
    
    test("Should return the added doctor on add() success", async() =>{
        const sut = makeSut();
        const doctor = await sut.add(mockAddDoctorParams());
        expect(doctor).toHaveProperty("id");
    })
})