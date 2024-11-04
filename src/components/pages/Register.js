import React, { useState } from 'react'

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage('Inscrição realizada com sucesso!');
      console.log('Registro realizado com sucesso!', { username, email, password });

      // Limpar os campos do formulário
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box"> {/* Caixa que envolve o formulário */}
        <h2>Inscrição</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nome de Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome de usuário"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirme a Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme sua senha"
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          <button type="submit" className="register-button">Inscrever-se</button>
        </form>
      </div>
    </div>
  );
}
