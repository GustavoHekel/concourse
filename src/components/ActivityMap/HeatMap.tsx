import {FC, useCallback, useRef} from "react";
import {Week} from "@/interfaces/Week";
import ActivityIndicator from "@/components/ActivityIndicator/ActivityIndicator";
import styles from './HeatMap.module.css'

const HeatMap: FC<{ activity: Week[], maxActivityPerDay: number }> = ({activity, maxActivityPerDay}) => {

    const dateRef = useRef(new Date())
    const getColor = useCallback((value: number, max: number) => {

        const colors = [
            '#161b22',
            '#0e4429',
            '#006d32',
            '#26a641',
            '#39d353'
        ]

        if (value === 0) {
            return colors[0]
        }

        return colors[Math.ceil(value / max * 4)]
    }, [])

    return (
        <div className={styles.map}>
            {
                activity.map((week, index) => {
                    const weekAsDate = new Date(week.week * 1000)
                    return <div key={index}>
                        {
                            week.days.map((activity, index) => {
                                if (index !== 0) {
                                    weekAsDate.setDate(weekAsDate.getDate() + 1)
                                }

                                if (weekAsDate >= dateRef.current) {
                                    return null
                                }

                                return <ActivityIndicator
                                    key={`${week}-${index}`}
                                    day={weekAsDate.toLocaleString('en-us', {day: '2-digit', month: 'long'})}
                                    activity={activity}
                                    color={getColor(activity, maxActivityPerDay)}/>
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}

export default HeatMap