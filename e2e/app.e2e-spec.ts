import { LbdProCliTestLayoutsPage } from './app.po';

describe('lbd-pro-cli-test-layouts App', () => {
  let page: LbdProCliTestLayoutsPage;

  beforeEach(() => {
    page = new LbdProCliTestLayoutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
