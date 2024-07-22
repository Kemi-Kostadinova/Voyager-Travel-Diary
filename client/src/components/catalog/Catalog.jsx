import Spinner from '../spinner/Spinner';
import styles from './Catalog.module.css'
import CatalogItem from './catalog-item/CatalogItem';

export default function Catalog({ travelEntries }) {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.content}>
                    <div className={styles.grid}>
                        {travelEntries.length > 0
                            ? travelEntries.map(travelEntry => <CatalogItem key={travelEntry._id} {...travelEntry} />)
                            : <Spinner />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
