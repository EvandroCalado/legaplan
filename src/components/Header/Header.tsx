import { Logo } from "../Logo";
import "./Header.scss";

export const Header = () => {
  const date = new Date();

  return (
    <header className="header">
      <div className="header-container">
        <Logo />

        <h2 className="header-container-title">Bem-vindo de volta, Evandro</h2>

        <p className="header-container-date">
          {date.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </header>
  );
};
