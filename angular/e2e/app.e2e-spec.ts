import { LykkePage } from './app.po';

describe('lykke App', () => {
  let page: LykkePage;

  beforeEach(() => {
    page = new LykkePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
