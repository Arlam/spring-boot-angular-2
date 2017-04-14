import { YsServicePage } from './app.po';

describe('ys-service App', () => {
  let page: YsServicePage;

  beforeEach(() => {
    page = new YsServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
