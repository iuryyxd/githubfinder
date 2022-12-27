import { FiMapPin, FiUser, FiUsers } from "react-icons/fi";
import { UserInfo } from "../../App";
import Input from "../Input";

import styles from "./UserCard.module.scss";

interface UserCardProps {
  userInfo: UserInfo;
}

function UserCard({ userInfo }: UserCardProps) {
  return (
    <div className={styles.main__info}>
      <aside className={styles.main__aside}>
        <img src={userInfo.avatar_url} alt={`avatar do ${userInfo.name}`} />

        <p className={styles.aside__userName}>{userInfo.name}</p>
      </aside>

      <div className={styles.main__text}>
        <Input name="login" inputValue={userInfo.login}>
          <FiUser /> Usuário:
        </Input>

        <Input name="site" inputValue={userInfo.site}>
          <FiMapPin color="#fff" size={20} /> Local:
        </Input>

        <Input name="followers" inputValue={userInfo.followers}>
          <FiUsers /> Seguidores:
        </Input>

        <Input name="following" inputValue={userInfo.following}>
          <FiUsers /> Seguindo:
        </Input>

        <textarea readOnly cols={30} rows={10}>
          {userInfo.bio ? userInfo.bio : "Biografia não informada."}
        </textarea>
      </div>
    </div>
  );
}

export default UserCard;
