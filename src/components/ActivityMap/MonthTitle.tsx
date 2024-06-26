import {FC} from "react";

interface MonthTitleInterface {
    month: string
    multiplier: number
}

const MonthTitle: FC<MonthTitleInterface> = ({multiplier, month}) => {

    return (
        <div
            style={{
                width: 14 * multiplier
            }}
        >
            {month}
        </div>
    )
}

export default MonthTitle