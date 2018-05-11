import * as React from 'react';
import styles from './Door.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Bedroom extends React.Component<any, {}> {
    constructor(props){
        super(props);
    }
  public render(): JSX.Element {
    return (
      <div className={styles.door + ' ' + this.props.classes}/>
    );
  }
}