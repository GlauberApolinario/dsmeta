import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
	return (
		<div className="dsmeta-logo-container">
			<img src={logo} alt="DSMeta" />
			<h1>DSMeta</h1>
			<p>
				Desenvolvido por
				<a href="https://www.instagram.com/devsuperior.ig">
					@devsuperior.ig
				</a>
			</p>
		</div>
	);
}

export default Header;
