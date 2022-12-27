import React from "react";
import { FiMapPin, FiUser, FiUsers } from "react-icons/fi";
import { UserInfo } from "../../App";

import styles from './UserCard.module.scss'

function Input({login, avatar_url, bio, followers, following, location, name}: UserInfo) {
  return (
    <div className={styles.main__info}>
      <aside className={styles.main__aside}>
        <img src={avatar_url} alt={`avatar do ${name}`} />

        <p className={styles.aside__userName}>{name}</p>
      </aside>

      <div className={styles.main__text}>
        <div>
          <label htmlFor="login">
            <FiUser /> Usuário:
          </label>
          <input type="text" readOnly value={login} name="login" />
        </div>

        <div>
          <label htmlFor="site">
            <FiMapPin color="#fff" size={20} /> Local:
          </label>
          <input
            type="text"
            readOnly
            value={location ? location : "Não informado."}
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
            value={followers}
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
            value={following}
            name="following"
          />
        </div>

        <textarea readOnly cols={30} rows={10}>
          {bio ? bio : "Não informada."}
        </textarea>
      </div>
    </div>
  );
}

export default Input;
