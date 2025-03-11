import style from './sidebar.module.css';

interface Props {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
  lightMode: boolean;
  setLightMode: (lightMode: boolean) => void;
}

export default function Sidebar({ showSidebar, setShowSidebar, lightMode, setLightMode }: Props) {
  return (
    showSidebar && (
      <nav className={style.sidebar}>
        <ul>
          <li onClick={() => setShowSidebar(false)}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">Tokyo</a>
          </li>
          <li>
            <a href="#">Akihabara</a>
          </li>
          <li>
            <a href="#">Kyoto</a>
          </li>
          <li>
            <a href="#">Osaka</a>
          </li>
          <li onClick={() => setLightMode(!lightMode)}>
            <a href="#">Light/Dark Mode</a>
          </li>
        </ul>
      </nav>
    )
  );
}
