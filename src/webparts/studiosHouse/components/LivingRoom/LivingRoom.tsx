import * as React from 'react';
import styles from './LivingRoom.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export default class LivingRoom extends React.Component<any, {}> {
  public render(): React.ReactElement<any> {
    return (
      <div className={styles.livingRoom}>
        <div className={styles.furniture}>
          <div className={styles.couch}>
            <div className={styles.pillow} />
          </div>
          <div className={styles.tv} />
        </div>
        <span className={styles.title}>Living Room</span>
      </div>
    );
  }
}