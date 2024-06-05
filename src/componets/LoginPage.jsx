import React from "react"
import FormLogin from "./FormLogin"

function LoginPage() {
    return (
      <div className="flex flex-row w-full h-screen">
        <div className="hidden lg:flex lg:basis-3/4 w-full bg-gray-200 bg-sie bg-cover bg-center bg-no-repeat">
        </div>
        <div className="h-full lg:flex lg:basis-1/4 w-full bg-white">
          <div className="w-full px-12 py-12">
              <img src="/logo-sie-2024-png.png" alt="Logo" className="w-24 h-24"/>
              <main>
                <header></header>
                <FormLogin />
              </main>
          </div>
        </div>
    </div>
    )
  }
  
  export default LoginPage