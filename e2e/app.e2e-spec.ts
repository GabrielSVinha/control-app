import { ControlAppPage } from './app.po';

describe('control-app App', () => {
  let page: ControlAppPage;

  beforeEach(() => {
    page = new ControlAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
