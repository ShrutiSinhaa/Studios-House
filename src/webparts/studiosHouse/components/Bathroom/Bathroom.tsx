import * as React from 'react';
import styles from './Bathroom.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Bathroom extends React.Component<any, {}> {
    public render(): React.ReactElement<any> {
      return (
        <div className={ styles.bathroom }>
        <div className={ styles.title} >Bathroom</div>
        </div>
      );
    }
  }