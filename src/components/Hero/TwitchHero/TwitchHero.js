import React from 'react';
import { Container } from '../..';

import classes from './TwitchHero.module.css';

const TwitchHero = () => (
  <div className={classes.liveCoding}>
    <header>
      <Container>
        <h2>Live Coding</h2>
        <dl className={classes.byline}>
          <dt>
            <b>with Mike Bifulco</b>
          </dt>
          <dd>
            Gymnasium’s Director of Technology tears up the devstack with a
            weekly off-the-cuff stream of code challenges, experiments, and
            integrations.
          </dd>
        </dl>
      </Container>
    </header>
    <div className={classes.twitchEmbed}>
      <div className={classes.twitchStream}>
        <iframe
          id="stream_embed"
          src="https://player.twitch.tv/?channel=irreverentmike"
          title="Twitch Stream"
        />
      </div>
      <div className={classes.twitchChat}>
        <iframe
          id="chat_embed"
          src="https://www.twitch.tv/embed/irreverentmike/chat"
          title="Twitch Chat"
          frameBorder="0"
        />
      </div>
    </div>
  </div>
);

export default TwitchHero;
