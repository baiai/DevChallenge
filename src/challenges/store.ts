import { observable, action } from 'mobx';

export default class ChallengesStore {
  @observable firstChallengeVisible = false;

  @action.bound
  toggleNavigationVisible = (bool: boolean): void => {
    this.firstChallengeVisible = bool;
  }
}
