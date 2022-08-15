export namespace ModuleDto {
    export type StatusEnum = 'NEW' | 'TO_DO' | 'IN_PROGRESS' | 'COMPLETED';
    export const StatusEnum = {
        New: 'NEW' as StatusEnum,
        ToDo: 'TO_DO' as StatusEnum,
        InProgress: 'IN_PROGRESS' as StatusEnum,
        Completed: 'COMPLETED' as StatusEnum,
    };
}