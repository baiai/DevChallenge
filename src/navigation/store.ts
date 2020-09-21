import { observable, action } from 'mobx';

export default class NavigationStore {
  matchPath: string

  constructor () {
    this.matchPath = '/';
  }

  @observable navigationVisible = true;

  @action.bound
  toggleNavigationVisible = (bool: boolean): void => {
    this.navigationVisible = bool;
  }
}
