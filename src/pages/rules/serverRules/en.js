import React from "react"
import styles from "../rules.module.css"

const ServerRulesEn = () => {
  return (
    <section>
      <h2>Server Rules</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem
        sequi, quo tempore in eum obcaecati atque quibusdam officiis est dolorum
        minima deleniti ratione molestias numquam. Voluptas voluptates quibusdam
        cum?
      </p>
      <h3>Server joining requirements</h3>
      <ol className={styles.rules}>
        <li>The minimum age to join the server is 18 years.</li>
        <li>You must speak and understand Arabic well.</li>
        <li>
          You must have a quality headset to communicate with other players.
        </li>
        <li>
          You cannot insult the players for any reason, don't take the roleplay
          personally.
        </li>
        <li>You cannot talk about politics or religion.</li>
        <li>
          You must choose a real name (consisting of a name and a nickname) for
          your character (IC) and it is forbidden to use numbers in writing
          names.
        </li>
        <li>
          You cannot use real world currency to buy in-game money or assets. We
          are an economy server and do not facilitate pay-to-play.
        </li>
        <li>
          Do not go AFK whilst in-game, anything that happens whilst you're gone
          is your own responsibility. If you come across an AFK player, do not
          mess with them.
        </li>
        <li>
          Treat staff with respect. Staff are there to ensure everyone's
          experience in DzCrew is fun, fair and enjoyable. Their decision is
          final.
        </li>
        <li>
          You cannot stop the scenario, whatever the reason, if you find a
          person who disagrees, complete the scenario and then complain to the
          administration
        </li>
        <li>
          You should always value your life when operating a vehicle. This means
          you should not drive through the city at excessive speed as this would
          be severely endangering your life for no real purpose.
        </li>
      </ol>
    </section>
  )
}

export default ServerRulesEn
