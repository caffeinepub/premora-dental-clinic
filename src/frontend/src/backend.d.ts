import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    brand: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    submitInquiry(name: string, email: string, brand: string, message: string): Promise<void>;
}
