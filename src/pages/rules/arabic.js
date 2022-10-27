import React from "react"
import styles from "./arabic.module.css"
import InGameAr from "./inGame/ar"
import ServerKeywordsAr from "./serverKeywords/ar"
import ServerRulesAr from "./serverRules/ar"
import StreamingRulesAr from "./streamingRules/ar"
import CriminalRulesAr from "./criminalRules/ar"

const ArabicRules = () => {
  return (
    <section>
      <div className="rt-container">
        <div className="col-rt-12">
          <div className={`${styles.tabs}`}>
            <input type="radio" id="tab1" name="tab-control" defaultChecked />
            <input type="radio" id="tab2" name="tab-control" />
            <input type="radio" id="tab3" name="tab-control" />
            <input type="radio" id="tab4" name="tab-control" />
            <input type="radio" id="tab5" name="tab-control" />

            <ul className={styles.titles} dir="rtl">
              <li title="الكلمات و المصطلحات">
                <label htmlFor="tab1" role="button">
                  <span>الكلمات و المصطلحات</span>
                </label>
              </li>
              <li title="قوانين السيرفر">
                <label htmlFor="tab2" role="button">
                  <span>قوانين السيرفر</span>
                </label>
              </li>
              <li title="القوانين داخل المدينة">
                <label htmlFor="tab3" role="button">
                  <span>القوانين داخل المدينة</span>
                </label>
              </li>
              <li title="قوانين حسب الحالة">
                <label htmlFor="tab4" role="button">
                  <span>قوانين الأعمال الاجرامية</span>
                </label>
              </li>
              <li title="قوانين الستريمرز">
                <label htmlFor="tab5" role="button">
                  <span>قوانين الستريمرز</span>
                </label>
              </li>
            </ul>

            <div className={styles.slider}>
              <div className={styles.indicator}></div>
            </div>
            <center>
              <h3 style={{ color: "#ff0000", direction: "rtl" }}>
                طاقم سيرفر Dz-Crew للحياة الواقعية يحتفظ بالحق الكامل لتغيير هذه
                القوانين بدون سابق إنذار في أي وقت, لا يعطي هذا الحق لأي فرد من
                الطاقم بالمحاكمة بغير هذه القوانين
              </h3>
            </center>
            <div className={styles.content}>
              <ServerKeywordsAr />
              <ServerRulesAr />
              <InGameAr />
              <CriminalRulesAr />
              <StreamingRulesAr />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArabicRules
