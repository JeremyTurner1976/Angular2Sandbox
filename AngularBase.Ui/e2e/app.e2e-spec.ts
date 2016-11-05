import { BaseUiPage } from './app.po';

describe('base-ui App', function() {
  let page: BaseUiPage;

  beforeEach(() => {
    page = new BaseUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
