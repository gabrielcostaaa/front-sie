import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import PasswordToggle from './PasswordToggle';

function FormLogin() {
  const [saida, setSaida] = useState('');

  const validaFormLoginSchema = zod.object({
    login: zod.string().min(1, "Login é obrigatório"),
    senha: zod.string().min(1, "Senha é obrigatória"),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(validaFormLoginSchema),
  });

  function criarUsuario(data) {
    setSaida(JSON.stringify(data, null, 2));
    reset();
  }

  return (
    <div className=''>
      <h1 className='font-bold text-xl mt-10'>Prazer em ver você novamente</h1>
      <form onSubmit={handleSubmit(criarUsuario)} className='mt-8'>
        <div>
          <label className="ml-3 text-sm font-light">Login</label>
          <input
            {...register('login')}
            className='mt-1 w-full bg-gray-100 border border-gray-200 placeholder-gray-400 text-gray-700
            rounded-lg p-3 focus:outline-none focus:border-blue-100 focus:ring-1'
            placeholder='Nome de Usuário'
          />
          {errors.login && <span className='text-red-500 text-xs pl-3'>{errors.login.message}</span>}
        </div>
        <div className="mt-2">
          <label className="ml-3 text-sm font-light">Senha</label>
          <div className="relative w-full">
            <input
              {...register('senha')}
              id="password-input"
              className="mt-2 w-full bg-gray-100 border border-gray-200 placeholder-gray-400 text-gray-700 
              rounded-lg p-3 pr-10 focus:outline-none focus:border-blue-100 focus:ring-1"
              placeholder="Sua Senha"
              type="password"
            />
            <PasswordToggle inputId="password-input" />
          </div>
          {errors.senha && <span className='text-red-500 text-xs pl-3'>{errors.senha.message}</span>}
        </div>
        <div className='mt-5 flex justify-between items-center'>
          <div>
            <label className='inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                className='sr-only peer'
              />
              <div className='relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600'></div>
              <span className='ml-2 font-light'>Lembrar-me</span>
            </label>
          </div>
          <button type="button" className='mb-2 text-blue-400'>Esqueceu sua senha?</button>
        </div>
        <div className='mt-8 flex flex-col'>
          <button type="submit" className='active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-white text-base bg-blue-600 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            Entrar
          </button>
        </div>
      </form>
      <pre>{saida}</pre>
    </div>
  );
}

export default FormLogin;
