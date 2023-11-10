import logo from './logo.svg';
import './Cadastro.css';

function CadastroClientes() {
  return (
    <div className='container'>
      <h1>Cadastro de Clientes</h1>
        <form className="cadastro-clientes">

          <div className='cadastro-esquerda'>
            <fieldset className='cadastro-identificacao'>
            <legend>Dados de identificação:</legend>
              <label>
                Nome Completo:
                <input type="text" placeholder='Nome completo' className='grande' name='nome' required></input>
              </label>

              <label>
                CPF:
                <input type="text" placeholder='CPF' className='medio' name='cpf' required></input>
              </label>

              <label>
                Data de Nascimento:
                <input type="date" placeholder='Data de nascimento' className='data' name='nascimento' required></input>
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
          </fieldset>
          
          <fieldset className='cadastro-contato'>
            <legend>Dados de contato: </legend>
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

        </fieldset>

      </div>

      <div className='cadastro-direita'>
        <fieldset className='cadastro-endereco'>
          <legend>Dados de endereço:</legend>:
            <label>
                  CEP:
                  <input type="text" placeholder='CEP' className='medio' name='cep' required></input>
            </label>

            <label>
                  Estado:
                  <input type="text" placeholder='Estado' className='medio' name='estado' required></input>
            </label>

            <label>
                  Endereço:
                  <input type="text" placeholder='Endereço' className='grande' name='endereco' required></input>
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

          <label>
            Informações adicionais:
          <textarea name="informacoes-adicionais" className='infos'></textarea>
          </label>

          <button type="submit">Cadastrar</button>
        </fieldset>
      </div>


      </form>

    </div>

  );
}

export default CadastroClientes;
