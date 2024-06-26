import {FC} from "react";
import styles from './DaysColumn.module.css'

const DaysColumn: FC = () => {
    return <div className={styles.daysColumn}>
        {['Mon', 'Wed', 'Fri'].map(d => <p key={d}>{d}</p>)}
    </div>
}

export default DaysColumn