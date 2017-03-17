import { DemosPage } from './app.po';

describe('demos App', () => {
  let page: DemosPage;

  beforeEach(() => {
    page = new DemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
