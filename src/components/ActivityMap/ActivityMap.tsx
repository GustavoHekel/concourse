import {FC} from "react";
import {ActivityMapInterface} from "@/interfaces/ActivityMapInterface";
import HeatMap from "@/components/ActivityMap/HeatMap";
import DaysColumn from "@/components/ActivityMap/DaysColumn";
import MonthsRow from "@/components/ActivityMap/MonthsRow";
import styles from './ActivityMap.module.css'

const ActivityMap: FC<ActivityMapInterface> = ({
                                                   activity,
                                                   maxActivityPerDay,
                                                   weeksByMonth
                                               }) => {
    return <div className={styles.container}>
        <div className={styles.monthsRowContainer}>
            <MonthsRow week={activity[0]} weeksByMonth={weeksByMonth}/>
        </div>

        <div className={styles.dayAndMapContainer}>
            <DaysColumn/>
            <HeatMap activity={activity} maxActivityPerDay={maxActivityPerDay}/>
        </div>
    </div>
}

export default ActivityMap