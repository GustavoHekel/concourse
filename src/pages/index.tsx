import {NextPage} from "next";
import {ActivityMapInterface} from "@/interfaces/ActivityMapInterface";
import ActivityMap from "@/components/ActivityMap/ActivityMap";
import {findMax, groupMonths} from "@/lib";

interface IndexPageInterface extends ActivityMapInterface {
    error?: string
}

const Index: NextPage<IndexPageInterface> = (props) => {

    const {error, ...rest} = props

    if (error) {
        return <p>{error}</p>
    }

    return (
        <main style={{margin: '16px', overflowX: 'auto'}}>
            <ActivityMap {...rest}/>
        </main>
    );
}

export default Index


export const getStaticProps = async () => {

    const response = await fetch('https://api.github.com/repos/facebook/react/stats/commit_activity')
    const data = await response.json()
    const weeksByMonth = groupMonths(data)
    const maxActivityPerDay = findMax(data)

    if (!data) {
        return {
            props: {
                error: 'Unable to fetch information from server'
            }
        }
    }

    return {
        props: {
            activity: data,
            weeksByMonth,
            maxActivityPerDay
        },
        revalidate: 600
    }

}
