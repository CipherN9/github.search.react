import React, {useCallback, useState} from "react";
import styles from './UserCard.module.css';
import {User} from "../../../api-client";

interface UserCardProps {
    cardData: User
}

const UserCard: React.FC<UserCardProps> = ({cardData}) => {
    return (
        <div className={styles['card-wrapper']}>
            <div className={styles['profile-card']}>
                <div className={styles['big-row']}>
                    <div className={styles["col"]}>
                        <img
                            src={cardData.avatar_url}
                            alt="User avatar" className={styles['image-pic']}/>
                        <div className={styles["data"]}>
                            <h2>{cardData.title}</h2>
                            <span>{`location: ${cardData.location ? cardData.location : "Unknown"}`}</span>
                        </div>
                    </div>
                    <div className={styles["col-right"]}>
                        <dl className={styles["info-list"]}>
                            <div>
                                <dt>Login:</dt>
                                <dd>ilteo</dd>
                            </div>
                            <div>
                                <dt>Location:</dt>
                                <dd>Unknown</dd>
                            </div>
                            <div>
                                <dt>Created at:</dt>
                                <dd>11.06.2025</dd>
                            </div>
                            <div>
                                <dt>Email:</dt>
                                <dd>ilteo@gmail.com</dd>
                            </div>
                            <div>
                                <dt>Company:</dt>
                                <dd>Unknown</dd>
                            </div>
                            <div className={styles["bio-text"]}>
                                <dt>Bio:</dt>
                                <dd>A friendly GitHub mascot yes he is alright… A friendly GitHub mascot yes he is alright… A friendly GitHub mascot yes he is alright… A friendly GitHub mascot yes he is alright… A friendly GitHub mascot yes he is alright…</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className={styles["row"]}>
                    <div className={styles["info"]}>
                        <h3>Following</h3>
                        <span>200</span>
                    </div>
                    <div className={styles["info"]}>
                        <h3>Followers</h3>
                        <span>5000</span>
                    </div>
                    <div className={styles["info"]}>
                        <h3>Repositories</h3>
                        <span>200</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;

