import { Link } from "react-router-dom";

export default function Home({t, languageChange}) {
  return (
    <div>
      <div className="container">
        <header className="App-header">
          {t("Layout & Style")}
          <select className="select-language" onChange={languageChange}>
            <option value="en">{t("EN")}</option>
            <option value="th">{t("TH")}</option>
          </select>
        </header>
        <Link to="/">
          <button className="btn-home">{t("Home page")}</button>
        </Link>
      </div>
    </div>
  );
}
