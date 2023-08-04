import { Link } from "react-router-dom";
import "./ChooseItem.css";

export default function ChooseItem({ t }) {
  return (
    <div className="item-container">
      <Link to="/test1">
        <div className="box">
          {t("Test 1")}
          {/* แบบทดสอบที่ 1  */}
          <p>{t("Layout&Style")}</p>
        </div>
      </Link>
      <div className="box" onClick={(e) => console.log("y")}>
        {t("Test 2")}
        {/* แบบทดสอบที่ 2 */}
        <p>{t("Connect API")}</p>
      </div>
      <Link to="/test3">
        <div className="box">
          {t("Test 3")}
          {/* แบบทดสอบที่ 3 */}
          <p>{t("Form & Table")}</p>
        </div>
      </Link>
    </div>
  );
}
