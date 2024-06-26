import {Week} from "@/interfaces/Week";

export interface ActivityMapInterface {
    activity: Week[]
    weeksByMonth: Record<number, number>
    maxActivityPerDay: number
}