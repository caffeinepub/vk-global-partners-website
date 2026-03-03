import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    requirement: string;
    timestamp: Time;
    companyName: string;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getSubmissionById(id: bigint): Promise<ContactSubmission | null>;
    getSubmissionCount(): Promise<bigint>;
    submitContactForm(name: string, companyName: string, email: string, phone: string, requirement: string): Promise<boolean>;
}
