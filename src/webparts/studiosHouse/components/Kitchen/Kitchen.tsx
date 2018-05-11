import * as React from 'react';
import styles from './Kitchen.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Kitchen extends React.Component<any, {}> {
  public render(): React.ReactElement<any> {
    return (
      <div className={styles.kitchen}>
        <div className={styles.title}>Kitchen</div>
        <div className={styles.cabinets}>
          <div className={styles.sink} />
        </div>
      </div>
    );
  }
}