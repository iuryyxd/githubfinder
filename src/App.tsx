import axios from "axios";
import { useEffect, useState } from "react";
import { FiSearch, FiMapPin, FiUser, FiUsers } from "react-icons/fi";
import styles from "./App.module.scss";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserCard from "./components/UserCard";

export interface UserInfo {
  login: string;
  avatar_url: string;
  repos_url?: string;
  name: string;
  site?: string;
  location: string;
  bio: string;
  public_repos?: number;
  followers: number;
  following: number;
}

function App() {
  const [userName, setUserName] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo| null>(null);

  const handleSearchUser = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const url = `https://api.github.com/users/${userName}`;

    axios
      .get(url)
      .then((res) => {
        let data = res.data;

        let info = {
          login: data.login,
          avatar_url: data.avatar_url,
          repos_url: data.repos_url,
          name: data.name,
          site: data.blog,
          location: data.location,
          bio: data.bio,
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        };

        setUserInfo(info);
        toast.success("Informações obtidas com sucesso!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch(() => {
        setUserInfo(null)
        toast.error("Não foi possível encontrar informações do usuário.", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  useEffect(() => {
    if(userName === "") setUserInfo(null)
  }, [userName])

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>GitHub Finder</h1>

        <div className={styles.header__main}>
          <h2 className={styles.main__title}>Busce por um usuário</h2>
          <span className={styles.main__description}>
            Insira o nome do usuário no campo abaixo
          </span>
          <form className={styles.main__form}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite o nome do usuário"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={(e) => handleSearchUser(e)}>
              <FiSearch />
            </button>
          </form>
        </div>
      </header>

      {userInfo && (
        <main className={styles.main}>
          <UserCard userInfo={userInfo} />
        </main>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
