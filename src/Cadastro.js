import logo from './logo.svg';
import './Cadastro.css';

function CadastroClientes() {
  return (
    <div className='cadastro'>
      <h1>Cadastro de Clientes</h1>
        <form className="cadastro-clientes">

          <div className='cadastro-esquerda'>
          <section className='cadastro-identificacao'>
            <h3>Dados de identificação</h3>

            <label>
              Nome Completo:
              <input type="text" placeholder='Digite o nome completo' className='grande' name='nome' required></input>
            </label>

            <label>
              CPF:
              <input type="text" placeholder='Digite o CPF' className='medio' name='cpf' required></input>
            </label>

            <label>
              Data de Nascimento:
              <input type="date" placeholder='Digite a data de nascimento' className='medio' name='nascimento' required></input>
            </label>

            <label>
              Gênero:
              <select>
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="não-binário">Não-binário</option>
                <option value="agênero">Agênero</option>
              </select>
          </label>
        </section>

        <section className='cadastro-contato'>
          <h3>Dados de contato</h3>

          <label>
              Telefone:
              <input type="text" placeholder='Telefone' className='medio' name='telefone' required></input>
          </label>
          <label>
              Celular:
              <input type="text" placeholder='Celular' className='medio' name='celular' required></input>
          </label>

          <label>
              E-mail:
              <input type="email" placeholder='Email' className='medio-email' name='email' required></input>
          </label>

          <label>
              Senha:
              <input type="password" placeholder='Senha' className='medio' name='senha' required></input>
          </label>

          <button type="submit">Cadastrar</button>
      </section>

      </div>

      <div className='cadastro-direita'>
        <section className='cadastro-endereco'>
        <h3>Dados de endereço</h3>

          <label>
                CEP:
                <input type="text" placeholder='Digite o CEP' className='medio' name='cep' required></input>
          </label>

          <label>
                Estado:
                <input type="text" placeholder='Digite o estado' className='medio' name='estado' required></input>
          </label>

          <label>
                Endereço:
                <input type="text" placeholder='Digite o endereço' className='grande' name='endereco' required></input>
          </label>

          
          <label>
                Complemento:
                <input type="text" placeholder='Complemento' className='medio' name='complemento'></input>
          </label>

          
          <label>
                Número:
                <input type="text" placeholder='Número' className='pequeno' name='numero' required></input>
          </label>

        
          <label>
                Bairro:
                <input type="text" placeholder='Bairro' className='medio' name='bairro' required></input>
          </label>


        
          <label>
                Cidade:
                <input type="text" placeholder='Cidade' className='medio' name='cidade' required></input>
          </label>

        <h3>Informações adicionais</h3>
        <textarea name="informacoes-adicionais" className='infos'></textarea>
      </section>
      </div>

      </form>

    </div>

  );
}

export default CadastroClientes;
