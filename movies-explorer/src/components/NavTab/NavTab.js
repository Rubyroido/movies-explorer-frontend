import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li>
          <a className="navtab__link">О проекте</a>
        </li>
        <li>
          <a className="navtab__link">Технологии</a>
        </li>
        <li>
          <a className="navtab__link">Студент</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;
