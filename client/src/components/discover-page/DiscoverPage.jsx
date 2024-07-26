import styles from './DiscoverPage.module.css';
import Catalog from "../catalog/Catalog"

import { useGetAllEntries, useGetAllEntriesWithOwner } from '../../hooks/useTravelEntries';

export default function DiscoverPage() {
    // const travelEntries = useGetAllEntries();
    const travelEntriesWithOwner = useGetAllEntriesWithOwner();
    // console.log(travelEntriesWithOwner, "Owner Discover");

    return (
        <>
            <div className={styles.container}>
                <div className={styles.textCenter}>
                    <h1 className={styles.mainTitle}>Discover new horizons</h1>
                    <p className={styles.subtitle}>
                        Find hidden gems and new adventures. Get inspired by fellow travelers and start your next journey today!
                    </p>
                </div>
            </div>

            <Catalog travelEntries={travelEntriesWithOwner} />
        </>
    )
}