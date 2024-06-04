import React from "react"

function LoginPage() {
    return (
      <div class="grid grid-cols-3 h-[56rem] w-[120rem]">
        <div class="col-span-2 bg-slate-100">
            Esta div ocupa metade da tela
        </div>
        <div class="bg-green-500">
          <div>
              <img src="/logo.png" alt="Logo" className="w-16 h-16"/>
              <main>
                <header>
                  <h1>Prazer em ver você novamente</h1>
                </header>
              </main>
          </div>
        </div>
    </div>
    )
  }
  
  export default LoginPage