import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    console.log('[nomeDaCategoria]', values.nome);
    console.log('[infosDoEvento]', value);
    setValue(
      getAttribute('name'),
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form style={{ background: values.cor }} onSubmit={function handleSubmit(infoDoEvento) {
        infoDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <FormField
          label="Nome: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

          <FormField
            label="Cor: "
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />


        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;