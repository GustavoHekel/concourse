import {Week} from "@/interfaces/Week";

export const groupMonths = (array: Week[]) => {

    const groups: Record<number, number> = {}

    array.forEach(week => {
        const month = new Date(week.week * 1000).getMonth()

        if (groups[month]) {
            groups[month] = groups[month] + 1
        } else {
            groups[month] = 1
        }

    })

    return groups

}