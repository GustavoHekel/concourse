import {FC} from "react";
import styles from './ActivityIndicator.module.css'

interface ActivityIndicatorInterface {
    day: string
    activity: number
    color: string
}

const ActivityIndicator: FC<ActivityIndicatorInterface> = ({activity, day, color}) => {

    return <div
        className={styles.tooltip}
        style={{
            backgroundColor: color,
        }}
    >
        <span className={styles.tooltipText}>{activity} contributions on {day}</span>
    </div>
}

export default ActivityIndicator