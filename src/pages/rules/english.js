import React from "react"
import CriminalRulesEn from "./criminalRules/en"
import InGameEn from "./inGame/en"
import styles from "./rules.module.css"
import ServerKeywordsEn from "./serverKeywords/en"
import ServerRulesEn from "./serverRules/en"
import StreamingRulesEn from "./streamingRules/en"

const EnglishRules = () => {
  return (
    <section>
      <div className="rt-container">
        <div className="col-rt-12">
          <div className={styles.tabs}>
            <input type="radio" id="tab1" name="tab-control" defaultChecked />
            <input type="radio" id="tab2" name="tab-control" />
            <input type="radio" id="tab3" name="tab-control" />
            <input type="radio" id="tab4" name="tab-control" />
            <input type="radio" id="tab5" name="tab-control" />
            <ul className={styles.titles}>
              <li title="Words and Definitions">
                <label htmlFor="tab1" role="button">
                  <span>Words and Definitions</span>
                </label>
              </li>
              <li title="Server Rules">
                <label htmlFor="tab2" role="button">
                  <span>Server Rules</span>
                </label>
              </li>
              <li title="In-Game Rules">
                <label htmlFor="tab3" role="button">
                  <span>In-Game Rules</span>
                </label>
              </li>
              <li title="Situational Rules">
                <label htmlFor="tab4" role="button">
                  <span>Criminal Rules</span>
                </label>
              </li>
              <li title="Streaming Rules">
                <label htmlFor="tab5" role="button">
                  <span>Streaming Rules</span>
                </label>
              </li>
            </ul>

            <div className={styles.slider}>
              <div className={styles.indicator}></div>
            </div>
            <center>
              <h3 style={{ color: "#ff0000" }}>
                Dz-Crew RolePlay Staff reserves the right to edit these rules at
                any time with no prior notification; nevertheless, the staff is
                not allowed to judge with other rules than the ones available in
                this page.
              </h3>
            </center>
            <div className={styles.content}>
              <ServerKeywordsEn />
              <ServerRulesEn />
              <InGameEn />
              <CriminalRulesEn />
              <StreamingRulesEn />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnglishRules
