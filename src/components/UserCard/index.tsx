import React from "react";
import { FiMapPin, FiUser, FiUsers } from "react-icons/fi";
import { UserInfo } from "../../App";

import styles from './UserCard.module.scss'

interface UserCardProps {
    userInfo: UserInfo;
}

function UserCard({userInfo}: UserCardProps) {
  return (
    <div className={styles.main__info}>
      <aside className={styles.main__aside}>
        <img src={userInfo.avatar_url} alt={`avatar do ${userInfo.name}`} />

        <p className={styles.aside__userName}>{userInfo.name}</p>
      </aside>

      <div className={styles.main__text}>
        <div>
          <label htmlFor="login">
            <FiUser /> Usuário:
          </label>
          <input type="text" readOnly value={userInfo.login} name="login" />
        </div>

        <div>
          <label htmlFor="site">
            <FiMapPin color="#fff" size={20} /> Local:
          </label>
          <input
            type="text"
            readOnly
            value={userInfo.location ? userInfo.location : "Não informado."}
            name="site"
          />
        </div>

        <div>
          <label htmlFor="followers">
            <FiUsers /> Seguidores:{" "}
          </label>
          <input
            type="text"
            readOnly
            value={userInfo.followers}
            name="followers"
          />
        </div>

        <div>
          <label htmlFor="following">
            <FiUsers /> Seguindo:
          </label>
          <input
            type="text"
            readOnly
            value={userInfo.following}
            name="following"
          />
        </div>

        <textarea readOnly cols={30} rows={10}>
          {userInfo.bio ? userInfo.bio : "Não informada."}
        </textarea>
      </div>
    </div>
  );
}

export default UserCard;
