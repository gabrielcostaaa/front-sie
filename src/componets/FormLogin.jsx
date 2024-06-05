import React from 'react'

function FormLogin() {
    return (
        <div className=''>
            <h1 className='font-bold text-xl mt-10'>Prazer em ver você novamente</h1>
            <div className='mt-8'>
                <div>
                    <label className="ml-3 text-sm font-light">Login</label>
                    <input
                        className='mt-1 w-full bg-gray-100 border border-gray-200 placeholder-gray-400 text-gray-700
                        rounded-lg p-3'
                        placeholder='Nome de Usuário'
                    />
                </div>
                <div className='mt-2'>
                    <label className="ml-3 text-sm font-light">Senha</label>
                    <input
                        className='mt-2 w-full bg-gray-100 border border-gray-200 placeholder-gray-400 text-gray-700
                        rounded-lg p-3'
                        placeholder='Sua Senha'
                        type='password'
                    />
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
                    <button className='mb-2 text-blue-400'>Esqueceu sua senha?</button>
                </div>
                <div className='mt-8 flex flex-col'>
                <button type="button" className='active:scale-[0.98] active:duration-75 hover:scale-[1.01] transition-all text-white text-base bg-blue-600 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default FormLogin