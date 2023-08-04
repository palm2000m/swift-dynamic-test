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
      </div>
    </div>
  );
}
