export type { IHabitCheckin };

interface IHabitCheckin {
    id: string;
    habitId: string;
    stamp?: number;
    checkinStamp?: number;
    checkinTime?: string;
    opTime: string;
    value?: number;
    goal?: number;
    status?: number;
    content?: string;
    emoji?: number;
}