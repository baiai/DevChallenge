import { observable, action } from 'mobx';

export default class NavigationStore {
  @observable navigationVisible = true;

  @action.bound
  toggleNavigationVisible = (bool: boolean): void => {
    this.navigationVisible = bool;
  }
}
