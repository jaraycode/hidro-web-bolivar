import LoginForm from '@/components/customForms/loginForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='loginCard'>
      <Card className='w-[450px]'>
        <CardHeader>
          <CardTitle>Login Page</CardTitle>
          <CardDescription>Buscando siempre ser mejores</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm/>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage