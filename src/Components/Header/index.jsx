import  logo  from '../../Assets/logo-apiki.webp'
import './index.css'

function Header() {

  return (
	<div>
		<header>
			<img src={logo} alt="logo" className='header-logo'/>
		</header>
		<div> 
			<section className='header-section'></section>
		</div>
	</div>
  );
}

export default Header;
