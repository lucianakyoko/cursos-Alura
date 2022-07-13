import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  const aoSalvar = event => {
    event.preventDefault();
    console.log('Form foi submetido')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Digite o endenreço da imagem"/>
        <ListaSuspensa obrigatorio={true} itens={times} label="Time"/>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}

export default Formulario;