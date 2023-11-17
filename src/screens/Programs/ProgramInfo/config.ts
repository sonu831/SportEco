export interface ProgramRequest {
    program_id: string;
}

export interface ProgramDetail {
    description: string;
    sessions: ProgramRequest[];
    _id: string;
}
