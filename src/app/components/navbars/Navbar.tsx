import style from './navbar.module.css';

interface Props {
  setShowSidebar: (showSidebar: boolean) => void;
}

// TODO: hide menu button if the width of all the menu items is wide enough to fit in the screen
// TODO: pull locations out into a seperate variable called LOCATIONS taht can be used here and in the sidebar

export default function Navbar({ setShowSidebar }: Props) {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="#">
            日本<i>GO</i>
          </a>
        </li>
        <li className={style.hideOnMobile}>
          <a href="#">Tokyo</a>
        </li>
        <li className={style.hideOnMobile}>
          <a href="#">Akihabara</a>
        </li>
        <li className={style.hideOnMobile}>
          <a href="#">Kyoto</a>
        </li>
        <li className={style.hideOnMobile}>
          <a href="#">Osaka</a>
        </li>
        <li onClick={() => setShowSidebar(true)}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
