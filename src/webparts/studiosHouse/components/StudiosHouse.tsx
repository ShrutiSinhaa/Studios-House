import * as React from 'react';
import styles from './StudiosHouse.module.scss';
import { IStudiosHouseProps } from './IStudiosHouseProps';
import { escape } from '@microsoft/sp-lodash-subset';

import LivingRoom from './LivingRoom/LivingRoom';
import Kitchen from './Kitchen/Kitchen';
import Bedroom from './Bedroom/Bedroom';
import Bathroom from './Bathroom/Bathroom';
import Door from './Door/Door';

export default class StudiosHouse extends React.Component<IStudiosHouseProps, {}> {
  public render(): React.ReactElement<IStudiosHouseProps> {
    return (
      <div className={styles.studiosHouse}>
        <div className={styles.container}>
          <div className={styles.doors} >
            <Door classes={styles.living_bath} />
            <Door classes={styles.living_kitchen} />
            <Door classes={styles.kitchen_bed} />
            <Door classes={styles.entrance} />
          </div>
          <LivingRoom />
          <Kitchen />
          <Bedroom />
          <Bathroom />
        </div>
      </div >
    );
  }
}
