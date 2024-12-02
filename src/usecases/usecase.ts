export interface Usecase<InputDto, OutpuDto>{
    execute(input: InputDto): Promise<OutpuDto>;
}