import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as modalTypes from '../../constants/modalTypes';
import {
  startGamePolling,
  stopGamePolling,
  setPlayers,
} from '../../actions/gameActions/gameActions';
import { showModal } from '../../actions/modalActions/modalActions';
import styles from './Game.module.css';
import GameMap from './GameMap/GameMap';
import GameAction from './GameAction/GameAction';
import GameInfo from './GameInfo/GameInfo';
import GameActivity from './GameActivity/GameActivity';

function Game({ gameData, startGamePolling, stopGamePolling, showModal, setPlayers }) {
  useEffect(() => {
    const start = async () => {
      await startGamePolling();
      setPlayers();
    };
    start();
    return stopGamePolling;
  }, [startGamePolling, stopGamePolling, setPlayers]);

  useEffect(() => {
    if (gameData?.gameStatus?.winner) showModal(modalTypes.WINNER_MODAL);
  });

  if (!gameData) return null;
  return (
    <div className={styles.game}>
      <div className={styles.row}>
        <GameMap />
        <GameActivity />
        <GameAction />
      </div>
      <GameInfo />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gameData: state.game.data,
  };
};

export default connect(mapStateToProps, {
  startGamePolling,
  stopGamePolling,
  showModal,
  setPlayers,
})(Game);
