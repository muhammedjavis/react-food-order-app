import titleLogo from '../assets/logo.jpg';
import Button from './UI/Button';

export default function Header() {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={titleLogo} alt='REACT FOOD' />
        <h1>ORDER NOW</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
