import React, { useEffect } from "react";
import Layout from "../../components/layout";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";

import styles from "./rules.module.css";
// library.add(fab, fas);

const Rules = () => {
  useEffect(() => {

  }, [])

  return (
    <Layout>
      <div className={styles.background}></div>
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
                <li title="Words and Definitions"><label htmlFor="tab1" role="button"><span>Words and Definitions</span></label></li>
                <li title="Server Rules"><label htmlFor="tab2" role="button"><span>Server Rules</span></label></li>
                <li title="In-Game Rules"><label htmlFor="tab3" role="button"><span>In-Game Rules</span></label></li>
                <li title="Situational Rules"><label htmlFor="tab4" role="button"><span>Situational Rules</span></label></li>
                <li title="Streaming Rules"><label htmlFor="tab5" role="button"><span>Streaming Rules</span></label></li>
              </ul>

              <div className={styles.slider}><div className={styles.indicator}></div></div>
              <div className={styles.content}>
                <section>
                  <h2>Words and Definitions</h2>
                  <p>This section will detail some words and terms you may come across whilst partaking in roleplay. Please ensure you understand these terms as none of the following are permitted within Dz-Crew RP.</p>
                  <ul className={styles.rules}>
                    <li><strong>PregnancyRP</strong><span>: Roleplaying that you are pregnant.</span></li>
                    <li><strong>OOC</strong><span>: Out of character. Speaking in a real life context.</span></li>
                    <li><strong>VigilanteRP</strong><span>: You cannot take 'crime fighting' into your own hands.&nbsp;</span></li>
                    <li><strong>Powergaming</strong><span>: Roleplaying with mechanics / abilities that do not exist.</span></li>
                    <li><strong>SuicideRP</strong><span>: Messaging services you're going to kill yourself to initiate RP.</span></li>
                    <li><strong>Cop Baiting</strong><span>: Intentionally enticing law enforcement into any form of RP, i.e a vehicle chase.</span></li>
                    <li><strong>Lootboxing</strong>: Searching and taking the majority of a person's belongings without logical RP reason.</li>
                    <li><strong>FearRP</strong><span>: Fear for your life. You must value your life and RP any fear as you would have it in real-life.</span></li>
                    <li><strong>Value of Life</strong><span>: This rule is similar to FearRP in that you should act in a way that values your life and welfare.</span></li>
                    <li><strong>ShitRP</strong>: Roleplay which is not of a quality to allow others to be able to interact with a person or situation constructively.</li>
                    <li><strong>FailRP</strong><span>: A broad term but is generally when a player does something which in the real world wouldn't be considered by most.</span></li>
                    <li><strong>HitmanRP</strong>: To engage in a transaction in which money, goods, or services are traded in exchange for the death or injury of another player.</li>
                    <li><strong>RDM</strong><span>: Random Deathmatch. Attempting to kill or killing another player with no (or minimal) roleplay, initiation or reason.</span></li>
                    <li><strong>VDM</strong><span>: Vehicle Deathmatch. Using a vehicle as a weapon in an attempt to injure or kill another player with no (or minimal) roleplay, initiation or reason.</span></li>
                    <li><strong>Gunplay over Roleplay</strong>: To resort to shooting / killing with little roleplay reason, rather than attempting to create or continue a meaningful interaction.</li>
                    <li><strong>NLR: </strong><span>New life rule.</span><strong> </strong><span>When you respawn or are admitted to the Intensive Care Unit (ICU) you forget the events that led up to that point.</span></li>
                    <li><strong>GTA Driving</strong><span>: </span>Driving off-road in an unsuitable vehicle / bike, using jumps, driving at ridiculous speeds through the city for no good reason etc.</li>
                    <li><strong>Combat Logging</strong><span>:</span><strong> </strong>Exiting the server in an attempt to avoid combat, player interaction, danger or death. If you involve yourself in a situation, you must see it through entirely. You may not disconnect within 10 minutes of illegal activities.</li>
                    <li><strong>Metagaming</strong><span>: The act of using information obtained outside the bounds of your character in-game to benefit your roleplay / character's knowledge, where otherwise they would have no knowledge of such information.</span></li>
                  </ul>
                </section>
                <section>
                  <h2>Server Rules</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem sequi, quo tempore in eum obcaecati atque quibusdam officiis est dolorum minima deleniti ratione molestias numquam. Voluptas voluptates quibusdam cum?</p>
                  <h3>Server joining requirements</h3>
                  <ol className={styles.rules}>
                    <li>You must be over 18 years and have a working microphone.</li>
                    <li>You <b>cannot</b> have any 3rd party software that assists in the use of aiming weapons.</li>
                    <li>You <b>cannot</b> make your roleplay all about police interaction. Dz-Crew RolePlay is not a Cops vs Robbers server.</li>
                    <li>You <b>cannot</b> roleplay as terrorists or a terrorist organisation.</li>
                    <li>You <b>cannot</b> speak out of character unless communicating with a staff member.</li>
                    <li>You <b>cannot</b> have offensive language / terminology or icons / emojis in your Steam name or character name.</li>
                    <li>You <b>cannot</b> be reminded of the events of your death in order to seek revenge on anyone involved in the situation.</li>
                    <li>You <b>cannot</b> use real world currency to buy in-game money or assets. We are an economy server and do not facilitate pay-to-play.</li>
                    <li>When around other players, anything said through 3rd party communication must also be spoken in-game. This includes being in police custody, taken hostage, robbed etc.</li>
                    <li>Do not go AFK whilst in-game, anything that happens whilst you're gone is your own responsibility. If you come across an AFK player, do not mess with them.</li>
                    <li>You <b>cannot</b> be in a position of influence, aid or actively develop, another server and hold a whitelist role. Failure to respect this rule may result in an unappealable ban.</li>
                    <li>The name you give to your character must make sense and be clearly identifiable as a first and last name. Random strings of characters ('Gjasbkba Husaguaa') or having a first name that could not be considered a real first name (such as 'Mr.' or 'Hello') is not allowed. You cannot have names similar in spelling or speech for alternate RP characters, i.e. Brian and Bryan Smith.</li>
                    <li>You <b>cannot</b> use derogatory remarks, words or references, whether in RP / OOC / Discord, regarding race, gender, religion, sexuality, disabilities, sexual assault / rape, etc. This policy is to conform to the guidelines of various streaming and media platforms, and also to prevent misuse of these terms by players.</li>
                    <li>You <b>cannot</b> exceed a total of 3 whitelisted points. LSPD, EMS, LSLD, Mechanic and Dynasty8 are each one whitelist point. Mechanic Shop Assistant, Weazel News, Vanilla Unicorn, Downtown Cab Co and Diamond Casino are worth 0.5 points. A management position in any job will also be considered as full whitelist point.</li>
                    <li>Do not refer to Jarrrk as the mayor, governor, president or any other similar terminology.</li>
                    <li>Treat durian staff with respect. Staff are there to ensure everyone's experience in Dz-Crew RolePlay is fun, fair and enjoyable. Their decisions are final.</li>
                  </ol>

                </section>
                <section>
                  <h2>In-Game Rules</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.</p></section>
                <section>
                  <h2>Situational Rules</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nemo ducimus eius, magnam error quisquam sunt voluptate labore, excepturi numquam! Alias libero optio sed harum debitis! Veniam, quia in eum.</p></section>
                <section>
                  <h2>Streaming Rules</h2>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dicta vero rerum? Eaque repudiandae architecto libero reprehenderit aliquam magnam ratione quidem? Nobis doloribus molestiae enim deserunt necessitatibus eaque quidem incidunt.</p></section>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};
export default Rules;
