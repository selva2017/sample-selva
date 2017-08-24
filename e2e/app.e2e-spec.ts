import { SampleSelvaPage } from './app.po';

describe('sample-selva App', () => {
  let page: SampleSelvaPage;

  beforeEach(() => {
    page = new SampleSelvaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
