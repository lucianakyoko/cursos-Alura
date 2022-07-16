import './Footer.css';

const Footer = () => {
  return(
    <footer className='rodape'>
      <ul>
        <li><img src="/images/fb.png" alt="Ícone do Facebook" /></li>
        <li><img src="/images/tw.png" alt="Ícone do Twitter" /></li>
        <li><img src="/images/ig.png" alt="Ícone do Instagram" /></li>
      </ul>
      <img src={"/images/logo.png"} alt="Logo Organo" />
      <span>Desenvolvido por Alura.</span>
    </footer>
  )
};

export default Footer;