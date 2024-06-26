import {Week} from "@/interfaces/Week";

export const findMax = (array: Week[]) => {
    let max = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].days.length; j++) {
            if (array[i].days[j] > max) {
                max = array[i].days[j]
            }
        }
    }

    return max
}

