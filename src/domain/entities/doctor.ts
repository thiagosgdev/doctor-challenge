import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("doctors")
export class Doctor {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    crm: number;

    @Column()
    phone_home: number;
    
    @Column()
    phone_mobile: number;
    
    @Column()
    zip_code: number;
    
    @Column()
    street: string;
    
    @Column()
    number: number;
    
    @Column()
    complement: string;

    @Column()
    district: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    speciality_codes: string;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}