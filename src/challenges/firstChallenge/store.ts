import { observable, action } from 'mobx';

export default class FirstChallngeStore {
  @observable navigationVisible = false;

  @action.bound
  toggleNavigationVisible = (bool: boolean): void => {
    this.navigationVisible = bool;
  }
}
