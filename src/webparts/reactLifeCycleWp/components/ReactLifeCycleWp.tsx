import * as React from 'react';
import styles from './ReactLifeCycleWp.module.scss';
import { IReactLifeCycleWpProps } from './IReactLifeCycleWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IReactLifeCycleWpState {
  stageTitle: string;
}

export default class ReactLifeCycleWp extends React.Component<IReactLifeCycleWpProps, IReactLifeCycleWpState> {


  public constructor(props: IReactLifeCycleWpProps, state: IReactLifeCycleWpState) {
    
    super(props);

    this.state = {
      stageTitle: 'Component constructor has been called'
    };

    this.updateState = this.updateState.bind(this);

    console.log('Stage title from Constructor : ', this.state.stageTitle);

  }

  public componentWillMount() {
    console.log('Component will mount has been called');
  }

  public componentDidMount() {
    console.log('Stage title from componentDidmount : ', this.state.stageTitle);
    this.setState({
      stageTitle: 'componentDidMount has been called'
    });
  }

  public updateState() {
    this.setState({
      stageTitle: 'Update state has been called'
    });
  }

  public render(): React.ReactElement<IReactLifeCycleWpProps> {
    return (
      <div>
        <h1>ReactJS component's lifecycle</h1>
        <h3>{ this.state.stageTitle }</h3>
        <button onClick={this.updateState}>Click here to update state data</button>
      </div>
    );
  }

  public componentWillUnmount() {
    console.log('Component will unmount has been called');
  }

 
}
