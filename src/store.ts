import { NavigationStore } from './navigation';
import { ChallengesStore } from './challenges';

export default class Store {
  navigationStore: NavigationStore;

  challengesStore: ChallengesStore;

  constructor() {
    this.navigationStore = new NavigationStore();
    this.challengesStore = new ChallengesStore();
  }
}
