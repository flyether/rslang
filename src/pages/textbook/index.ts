import './textbook.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

const TextbookPage = {
  classname: 'textbook',
  render(): string {
    return `
    ${Header.render()}
    <div class = '${this.classname}'></div>
    ${Footer.render()}`;
  },
};

export default TextbookPage;