import {FC, useRef} from "react";
import MonthTitle from "@/components/ActivityMap/MonthTitle";
import {ActivityMapInterface} from "@/interfaces/ActivityMapInterface";
import {Week} from "@/interfaces/Week";

type MonthsRowType = Pick<ActivityMapInterface, 'weeksByMonth'> & { week: Week }

const MonthsRow: FC<MonthsRowType> = ({week, weeksByMonth}) => {

    const dateRef = useRef<Date>(new Date(week.week * 1000));

    return <>
        {
            Array(12).fill(true).map((_, index) => {
                const Component = <MonthTitle
                    key={index}
                    month={dateRef.current.toLocaleDateString('en-us', {month: 'short'})}
                    multiplier={weeksByMonth[dateRef.current.getMonth()]}
                />

                dateRef.current.setMonth(dateRef.current.getMonth() + 1)

                return Component
            })
        }
    </>
}

export default MonthsRow