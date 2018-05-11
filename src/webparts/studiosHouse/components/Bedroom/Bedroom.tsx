import * as React from 'react';
import styles from './Bedroom.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Bedroom extends React.Component<any, {}> {
  public render(): React.ReactElement<any> {
    return (
      <div className={styles.bedroom}>
        <div className={styles.title}>Bedroom</div>
        <div className={styles.bed}>
          <div className={styles.pillow} />
        </div>
      </div>
    );
  }
}