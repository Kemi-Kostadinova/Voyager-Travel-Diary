import { Link } from 'react-router-dom';

import styles from './CatalogItem.module.css'
export default function CatalogItem({
    _id,
    title,
    imageUrl,
    location,
    author,
    dateOfCreation,
    likes
}) {

    return (
        <article className={styles.card}>
            <Link to={`/details/${_id}`} className={styles.cardLink}></Link>
            <div className={styles.imageContainer}>
                <img
                    src={imageUrl}
                    alt={location}
                    className={styles.cardImage}
                />
                <div className={styles.likes}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={styles.likesIcon}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                    <span className={styles.likesCount}>{likes}</span>
                </div>
                <Link
                    to={`/details/${_id}`}
                    className={styles.readArticle}
                >
                    Read more
                    <svg
                        className={styles.readArticleIcon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.author}>
                    <img
                        src={"author.profileImage"}
                        alt={"author.username"}
                        className={styles.authorImage}
                    />
                    <div className={styles.authorInfo}>
                        <p className={styles.authorName}>{"author.username"}</p>
                        <p className={styles.publishDate}>Published on {dateOfCreation}</p>
                    </div>
                </div>
            </div>
            <h3 className={styles.cardTitle}>
                <Link to={`/details/${_id}`}>{title}</Link>
            </h3>
        </article>
    )
}