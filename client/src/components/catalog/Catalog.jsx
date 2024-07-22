import { Link } from 'react-router-dom';
import styles from './Catalog.module.css'
import * as request from '../../api/requester'
import { useEffect } from 'react';

export default function Catalog() {
    const items = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Item 1',
            author: 'Name 1',
            authorImg: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdOn: '21/07/2024'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Item 2',
            author: 'Name 2',
            authorImg: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdOn: '21/07/2024'
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Item 3',
            author: 'Name 3',
            authorImg: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdOn: '21/07/2024'
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Item 4',
            author: 'Name 4',
            authorImg: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdOn: '21/07/2024'
        },
        // Add more items as needed
    ];

    useEffect(() => {
        (async () => {
            const travelEntries = await request.get('http://localhost:3030/jsonstore/travelEntries');
            console.log(travelEntries);
        })();
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.content}>
                    <div className={styles.grid}>
                        {items.map((item) => (
                            <article key={item.id} className={styles.card}>
                                <a href="/blog/slug" className={styles.cardLink}></a>
                                <div className={styles.imageContainer}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
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
                                        <span className={styles.likesCount}>2</span>
                                    </div>
                                    <a
                                        href="/blog/slug"
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
                                    </a>
                                </div>
                                <div className={styles.cardFooter}>
                                    <div className={styles.author}>
                                        <img
                                            src={item.authorImg}
                                            alt=""
                                            className={styles.authorImage}
                                        />
                                        <div className={styles.authorInfo}>
                                            <p className={styles.authorName}>{item.author}</p>
                                            <p className={styles.publishDate}>Published on {item.createdOn}</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className={styles.cardTitle}>
                                    <a href="/blog/slug">{item.title}</a>
                                </h3>
                            </article>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
