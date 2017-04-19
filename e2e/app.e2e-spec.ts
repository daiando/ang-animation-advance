import { AngAnimationAdvancePage } from './app.po';

describe('ang-animation-advance App', () => {
  let page: AngAnimationAdvancePage;

  beforeEach(() => {
    page = new AngAnimationAdvancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
