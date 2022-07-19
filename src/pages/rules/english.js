import React from "react";
import styles from "./rules.module.css";

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
                  <span>Situational Rules</span>
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
              <section>
                <h2>Words and Definitions</h2>
                <p>
                  This section will detail some words and terms you may come
                  across whilst partaking in roleplay. Please ensure you
                  understand these terms as none of the following are permitted
                  within Dz-Crew RP.
                </p>
                <ul className={styles.rules}>
                  <h2>Words</h2>
                  <li><strong>Lags: </strong>Headache</li>
                  <li><strong>Microphone: </strong>Vocal Cords</li>
                  <li><strong>Discord: </strong>Radio</li>
                  <li><strong>Disconnect: </strong>Take a break</li>
                  <li><strong>Ban: </strong>Vacation</li>
                  <li><strong>Glitch: </strong>Black Magic</li>
                  <li><strong>Button: </strong>Muscle</li>
                  <li><strong>Server: </strong>City</li>
                  <li><strong>Chat: </strong>Newspaper</li>
                  <li><strong>Server restart: </strong>Storm</li>
                  <li><strong>ID: </strong>CCP</li>
                  <h2>Definitions</h2>
                  <li>
                    <p>
                      <strong>Powergaming: </strong>Your character (IC) is
                      forbidden to do anything that a human cannot do in real
                      life. A role play that does not give other players the
                      opportunity to act freely on their actions is against the
                      law (such as using /me to force an outcome on the victim)
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>FailRP: </strong>A broad term but is generally
                      when a player does something which in the real world
                      wouldn&#39;t be considered by most.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Meta Gaming: </strong>You must differentiate
                      between you (OOC) and the character you play in the game
                      (IC), it is forbidden to use any information that your
                      character didn&#39;t get from the Role Play, which may
                      cause to change the results of current or future
                      role-playing scenarios.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Stream Sniping: </strong>Being in the streamer
                      chat while you are on the server may be used as evidence
                      against you if a complaint is made.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Mass Roleplay: </strong>The population of DzCrew
                      City exceeds 7 million people, and therefore there are a
                      large number of citizens around you, especially in public
                      places, whether they are on foot or commuters, so do not
                      think that you are alone and no one is watching you.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>FearRP: </strong> You must show fear when your
                      character is in danger.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Value of Life: </strong>You should value your life
                      and freedom, as well as the lives of others, for example,
                      you are not allowed to take out your gun with someone
                      pointing their guns at you. If your character&#39;s life
                      is in immediate danger, you must fear and obey the orders
                      given to you If the person attacking you lowers their
                      weapon to write (such as using /me), the victim needs to
                      refer to our FRP rules
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Random Death Matching: </strong>It is forbidden to
                      kill, kidnap, or even imprison people without a compelling
                      reason (RP), or preceded by verbal conflict.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Vehicle Death Matching: </strong>It is forbidden
                      to use cars to kill players.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Combat Logout</strong>: It is forbidden to exit
                      the game while you are in a conflict, or if the scenario
                      in which you are participating has not ended
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>No Scripts stories: </strong> Players are not
                      allowed to narrate and impose events because trying to
                      control the scenario is against the rules of the server
                      and the RP, the goal of the RP in this server is to
                      participate in cooperative scenarios between people,
                      without imposing any result on the players or especially
                      the victims.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>New Life rules: </strong>When you respawn, you
                      must forget the events that led up to your death.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Vehicle Drive-bys: </strong>Shooting from a
                      vehicle is allowed only if there is valid initiation, the
                      driver is not allowed to shoot, only one (1) person is
                      permitted to shoot from a vehicle at a time.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Lootboxing: </strong> Looting any player without
                      much roleplay presented for them is prohibited. It is
                      forbidden to search a player you find on the ground due to
                      a car accident.You may not loot if you or your group were
                      not involved in the initial situation. Repeated looting
                      for the purpose of stealing properties is prohibited
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Role-playing before the bloodshed: </strong>
                      Every conflict must begin verbally or preceded by events
                      or a story related to that attack, the victim in that
                      conflict must be able to understand that their life is in
                      danger, and for what reason, and by whom it is attacking,
                      before it is harmed.
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Non-Roleplay: </strong>Actions that are
                      unrealistic or promote poor quality roleplay are
                      considered as non-roleplay. Players are required to remain
                      In Character (IC) at all times. Roleplay can only be
                      paused or voided by admins. Players should not instigate
                      situations they do not have time to play through. If a
                      player is chased they must wait 15 minutes before they can
                      log out of the game.
                    </p>
                  </li>
                </ul>
              </section>
              <section>
                <h2>Server Rules</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  dolorem sequi, quo tempore in eum obcaecati atque quibusdam
                  officiis est dolorum minima deleniti ratione molestias
                  numquam. Voluptas voluptates quibusdam cum?
                </p>
                <h3>Server joining requirements</h3>
                <ol className={styles.rules}>
                  <li>The minimum age to join the server is 18 years.</li>
                  <li>You must speak and understand Arabic well.</li>
                  <li>
                    You must have a quality headset to communicate with other
                    players.
                  </li>
                  <li>
                    You cannot insult the players for any reason, don't take the
                    roleplay personally.
                  </li>
                  <li>You cannot talk about politics or religion.</li>
                  <li>
                    You must choose a real name (consisting of a name and a
                    nickname) for your character (IC) and it is forbidden to use
                    numbers in writing names.
                  </li>
                  <li>
                    You cannot use real world currency to buy in-game money or
                    assets. We are an economy server and do not facilitate
                    pay-to-play.
                  </li>
                  <li>
                    Do not go AFK whilst in-game, anything that happens whilst
                    you're gone is your own responsibility. If you come across
                    an AFK player, do not mess with them.
                  </li>
                  <li>
                    Treat staff with respect. Staff are there to ensure
                    everyone's experience in DzCrew is fun, fair and enjoyable.
                    Their decision is final.
                  </li>
                  <li>
                    You cannot stop the scenario, whatever the reason, if you
                    find a person who disagrees, complete the scenario and then
                    complain to the administration
                  </li>
                  <li>
                    You should always value your life when operating a vehicle.
                    This means you should not drive through the city at
                    excessive speed as this would be severely endangering your
                    life for no real purpose.
                  </li>
                </ol>
              </section>
              <section>
                <h2>In-Game Rules</h2>
                <p>
                  In-game rules are inteded to protect players, and provide
                  better experience.
                </p>
                <h3>
                  <strong>Players should not:</strong>
                </h3>
                <ol>
                  <li>Ignore Roleplay.</li>
                  <li>
                    Drive up mountains or steep hills with Non-off road
                    vehicles.
                  </li>
                  <li>Bait services (Police, Taxi, Mechanic, EMS...)</li>
                  <li>Ask to be killed or force their own death.</li>
                  <li>Do unrealistic car jumping</li>
                  <li>Misuse expensive vehicles</li>
                  <li>Use work vehicles for other purpose</li>
                  <li>Submerge any vehicle in water intentionally</li>
                  <li>
                    Swim for an unrealistic amount of time in a chase (more than
                    5 minutes)
                  </li>
                </ol>

                <h3>
                  <strong>No Crimes Zones:</strong>
                </h3>
                <p>
                  Inside or very near to a No Crime Zone, players may not commit
                  any crime or disobey law enforcement orders but are allowed to
                  flee, lie, or scam (IC). If a player uses the NCZ for
                  protection the attacker must wait for that player to leave the
                  area. Players may not go to a NCZ within 15 minutes after
                  engaging in criminal activity or a resulting chase, unless
                  they are turning themselves in to law enforcement.
                </p>
                <strong>No Crimes Zones are listed below:</strong>
                <ul>
                  <li>
                    <p>Government and law enforcement offices</p>
                  </li>
                  <li>
                    <p>Hospitals, airport, port and workplaces</p>
                  </li>
                  <li>
                    <p>Cars parking lots.</p>
                  </li>
                  <li>
                    <p>Banks (Unless it is a bank robbery)</p>
                  </li>
                  <li>
                    <p>Jewelry stores (Unless it is a robbery)</p>
                  </li>
                  <li>
                    <p>Supermarket (Unless it is a store robbery)</p>
                  </li>
                </ul>
                <h3>
                  <strong>Character kill; aka MORT RP:</strong>
                </h3>
                <p>
                  The final death of a character and the start of a new
                  character and story, this is an act that accompanies clearing
                  all the data and accounts that are related to that character,
                  for example you can't get back personal properties of a dead
                  character like money and cars ..etc
                </p>
                <p>
                  Before doing the scenario of the final death of your character
                  or any other character , you have to open a ticket and send a
                  file to the administration, then the administration will
                  decide whether to accept it or decline it, there has to be
                  some valid reasons accompanied with evidence you found on the
                  roleplay and not for nonsense reasons.
                </p>
                <p>
                  The term cousin is no longer to be used in any form or shape,
                  any and all characters that you create are separate, and are
                  not affiliated in any form or shape, they do not know each
                  other, they are not family members, they play different
                  storylines, refrain from calling another individual out by the
                  fact that you know one of their other characters, do not hint
                  that you know one or several of their other characters, it
                  ruins their roleplay and storyline, treat them as a new person
                  rather than treating them as someone you know
                </p>
                <h3>
                  <strong>/OOC, /me and /do interactions:</strong>
                </h3>
                <ul>
                  <li>
                    <p>
                      SMS, voice, radio, phone and commands like /me or /do are
                      for IC content only.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>/me</strong> and <strong>/do</strong> are a usage
                      that serves to describe the state of the RP character, an
                      action he performs, a characteristic he has.
                    </p>
                  </li>
                  <li>
                    <p>
                      It shouldn't be used to speak <strong>HRP </strong>or even
                      have a discussion similar to a text chat (gg, ez...)
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>OOC </strong>stands for out-of-character.
                      Out-Of-Character is any required communication between
                      players. Whenever in-game, you should avoid
                      out-of-character chat as much as possible unless it is
                      necessary for roleplay. Acceptable uses of
                      out-of-character would be, for example, you can't respond
                      right away due to an IRL situation
                    </p>
                  </li>
                </ul>
                <h3>
                  <strong>Glitching, Exploiting and Cheat</strong>
                </h3>
                <p>
                  It is is forbidden to use game mechanisms (intended or
                  unintentional) to gain an unfair advantage or to earn money.
                  As a community member, you are required to report any bugs or
                  system flaws as soon as you find them. Tampering with,
                  exploiting, or using a bug will result in a permanent ban.
                </p>
              </section>
              <section>
                <h2>Situational Rules</h2>
                <h3>
                  <strong>
                    <span>Criminal rules</span>
                  </strong>
                  ⛓️ <strong>:</strong>
                </h3>
                <ul>
                  <li>
                    The number of people in one scenario is limited to a maximum
                    of 4 people from the same team in criminal acts.
                  </li>
                  <li>
                    Players are not allowed to assume the character of a serial
                    killer, as this encourages premeditated and indiscriminate
                    killing without pretext.
                  </li>
                  <li>
                    Comitting violent or non-violent criminal and illegal acts
                    highly visible (any crime that cannot be discreetly and
                    realistically kept away from most people in the area) in the
                    NCZ is forbidden.
                  </li>
                  <li>
                    If the RP with someone starts out of the NCZ and leads
                    inside them in order to run away and hide, the RP must stop
                    .
                  </li>
                  <li>
                    There should not be ANY illegal activites 30 min before the
                    restart.
                  </li>
                  <li>
                    You cannot to assault medical personnel or ambulances who
                    are on duty.
                  </li>
                  <li>
                    You cannot use the vehicle provided by your job in a illegal
                    job.
                  </li>
                  <li>
                    Take a half-hour (30 minutes) break between each criminal
                    act and the next.
                  </li>
                  <li>Once in prison, you will lose your job automatically.</li>
                </ul>
                <h3>
                  <strong>
                    <span>House robbery</span>
                  </strong>
                  🏡 <strong>:</strong>
                </h3>
                <ul>
                  <li>
                    The maximum number of members in the house robbery is 3
                    people.
                  </li>
                  <li>All members of the robbery must be inside the house.</li>
                  <li>A hostage can not be taken in the robbery.</li>
                  <li>
                    Spawnkill is stricktly prohibited, you have to wait for the
                    police to come in and get into position since they will have
                    a black screen at the entrance.
                  </li>
                </ul>
                <h3>
                  <strong>
                    <span>Store robbery</span>
                  </strong>
                  🏪 <strong>:</strong>
                </h3>
                <ul>
                  <li>
                    The maximum number of members in the store robbery is 3
                    people.
                  </li>
                  <li>All members of the robbery must be inside the store.</li>
                  <li>Only one hostage can be taken in the robbery.</li>
                  <li>
                    You cannot use a friend as a hostage in any situation.
                  </li>
                </ul>
                <h3>
                  <strong>
                    <span>Jewelry Robbery</span>
                  </strong>
                  💎 <strong>:</strong>
                </h3>

                <ul>
                  <li>
                    The maximum number of members in the house robbery is 4
                    people.
                  </li>
                  <li>
                    All members of the robbery must be inside the jewelry.
                  </li>
                  <li>
                    No more than three hostages can be taken in the robbery.
                  </li>
                  <li>If you start a robbery you must complete it.</li>
                  <li>
                    If you do not have a hostage, prepare to be attacked by
                    police sence there is no one in immediate danger.
                  </li>
                  <li>
                    You cannot use a friend as a hostage in any situation.
                  </li>
                </ul>
                <h3>
                  <strong>
                    <span>Bank Robbery</span>
                  </strong>
                  💵 <strong>:</strong>
                </h3>

                <ul>
                  <li>
                    Fleeca Bank : The maximum number of members in this robbery
                    is 4 people.
                    <ul>
                      <li>✔️ Allowed for Citizens.</li>
                      <li>⚠️ Could only be robbed once per 24 hours.</li>
                      <li>
                        ⚠️ All robbers must be in tha bank before starting the
                        heist.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Paleto Bank : The maximum number of members in this robbery
                    is 5 people.
                    <ul>
                      <li>❌ Not allowed for Citizens.</li>
                      <li>⚠️ Could only be robbed once per 24 hours.</li>
                      <li>
                        ⚠️ All robbers must be in tha bank before starting the
                        heist.
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li>
                    Pacific Bank : The maximum number of members in this robbery
                    is 7 people.
                  </li>
                  <ul>
                    <li>❌ Not allowed for Citizens.</li>
                    <li>⚠️ Could only be robbed once every 72 hours.</li>
                    <li>
                      ⚠️ All robbers must be in tha bank before starting the
                      heist.
                    </li>
                    <li>⚠️ 4 hostages is the maximum number of hostages.</li>
                  </ul>
                </ul>
                <ul>
                  <li>
                    If you do not have a hostage, prepare to be attacked by
                    police since there is no one in immediate danger.
                  </li>
                  <li>
                    You cannot use a friend as a hostage in any situation.
                  </li>
                </ul>
                <h3>
                  <strong>
                    <span>Weapon classes</span>
                  </strong>
                  🔫 <strong>:</strong>
                </h3>

                <ul>
                  <li>
                    <strong>CLASS 1 :</strong> FN .45 - M9 - 1911 - Pistol -
                    Pistol MK2 - Combat Pistol - Heavy Pistol - SNS-Pistol.
                  </li>
                  <li>
                    <strong>CLASS 2 :</strong> Desert Eagle - Mac-10 - Uzi -
                    Mossberg - Remington - AP-Pistol - Desert Eagle - Vintage
                    Pistol- Marksman Pistol - Revolver - Micro-SMG - Machine
                    Pistol - SMG - SMG MK2 - Assault SMG - Combat PDW - Mini SMG
                    - Pumpshotgun - Sawnoff Shotgun - Autoshotgun.
                  </li>
                  <li>
                    <strong>CLASS 3 :</strong> M4 - Hunting Rifle- AK-47 - AR-15
                    - m70 - Scar-H - Assaultrifle - Assaultrifle MK2 -
                    Advancedrifle - Specialcarbine - Bulluprifle - Compactrifle
                    - Bullupshotgun - Assaultshotgun - Musket - Heavyshotgun.
                  </li>
                  <li>
                    <strong>Melee Weapon</strong> : Baseball Bat - Battle
                    Hatchet - Knife - Switch Blade - Wrench - Hammer - Machete -
                    Nightstick.
                  </li>
                </ul>
                <h3>
                  <strong>
                    <span>
                      Limit and function of use of each class of weapon
                    </span>
                  </strong>
                  🔫 <strong>:</strong>
                </h3>
                <ul>
                  <li>
                    <strong>CLASS 1</strong> Free to use but you cannot use it
                    without a valid reason.
                    <ul>
                      <li>
                        🏪 Store robbery - 🏡 House robbery - 💎 Jewelry robbery
                        - 🧑 Hostage taking - ⚔️ Fight in illegal point (Craft,
                        pawnshop...)
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>CLASS 2 and CLASS 3</strong>: Mostly used by
                    gangsters.
                    <ul>
                      <li>
                        💎 Jewelry robbery - 💵 Bank Robbery - 🧑 Hostage taking
                        - ⚔️ Fight in illegal point (Craft, pawnshop...).
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>Melee Weapon</strong> Free to use but you must
                    always make threats before using it.
                  </li>
                </ul>
                <h3>
                  <strong>
                    <span>Kidnapping and Robbing</span>
                  </strong>
                  💀 <strong>:</strong>
                </h3>
                <ul>
                  <li>
                    There must be at least 3 policemen online to kidnap a
                    citizen.
                  </li>
                  <li>You cannot steal more than $1000 from a player.</li>
                  <li>
                    It is forbidden to kidnap everyone you meet for no reason.
                  </li>
                  <li>
                    You cannot take someone to a bank/ATM to withdraw money.
                  </li>
                  <li>
                    It is forbidden to return to the place where you have
                    already kidnapped someone knowing that there are people who
                    may have called the police.
                  </li>
                  <li>
                    You cannot hold a hostage for longer than 30 minutes, this
                    is discouraging and unfair.
                  </li>
                  <li>
                    There must be at least 4 policemen online to kidnap a police
                    officer, you are not allowed to loot their items (set aside
                    handcuffs and ammos)
                  </li>
                  <li>
                    <span>
                      <span>
                        Taking a police officer as a hostage is only permitted
                        as a last resort.
                      </span>
                    </span>
                  </li>
                </ul>
                <h3>
                  <strong>
                    <span>Carry a dead person</span>
                  </strong>
                  💀 <strong>:</strong>
                </h3>
                <ul>
                  <li>
                    It is forbidden to move the body of a dead person for loot.
                  </li>
                  <li>
                    It is forbidden to move the body of a dead person to take it
                    to the hospital on a motorcycle, concerning the car it must
                    have enough space (4 seater car, 3 people + the dead
                    person).
                  </li>
                </ul>
                <h3>
                  <strong>
                    <span>Cop Bait</span>
                  </strong>
                  👮 <strong>:</strong>
                </h3>
                <ul>
                  <li>
                    Baiting cops is not permitted, this includes repeatedly
                    committing crimes in front of cops in order to elicit a
                    vehicle chase.
                  </li>
                </ul>
              </section>
              <section>
                <h2>
                  <strong>Streaming</strong>
                </h2>
                <p>In order to acquire the streamer badge you must :</p>
                <ol>
                  <li>
                    <span>Be +18 years old.</span>
                  </li>
                  <li>
                    Have clean page; which means has no insults, racism,
                    regionalism, nationalism or any inappropriate content in
                    your streaming page/channel.
                  </li>
                  <li>
                    Have no privileges in any other server or streamer badge
                  </li>
                  <li>
                    Have no old videos in other servers in your streaming
                    page/channel
                  </li>
                  <li>
                    You must add Dz-Crew RolePlay Server's Discord link to your
                    bio
                  </li>
                </ol>
                <h2>
                  <strong>Streaming rules</strong>
                </h2>
                <ul>
                  <li>
                    <b>
                      <font color="red">
                        As a streamer, you must never play or stream in another
                        server
                      </font>
                    </b>
                  </li>
                  <li>As a streamer, you have no in-game privileges</li>
                  <li>
                    As a streamer, you must never talk about religion and
                    politics
                  </li>
                  <li>
                    As a streamer, your videos must never contain any swearing,
                    cursing or insulting words
                  </li>
                  <li>
                    As a streamer, you must never talk about other servers,
                    refer to other streamers from other servers.
                  </li>
                  <li>
                    As a streamer, you are not allowed to talk about the server,
                    argue about rules or give a bad image of the server
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnglishRules;
