import { getStrapiURL } from '@/lib/utils'

interface RegisterUserProps {
  username: string
  password: string
  email: string
}

interface LoginUserProps {
  identifier: string
  password: string
}

const baseUrl = getStrapiURL()

export async function registerUserService(userData: RegisterUserProps) {
  const url = new URL('/api/auth/local/register', baseUrl)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...userData }),
    })

    return response.json()
  } catch (error) {
    console.error('Registration Service Error:', error)
  }
}

export async function loginUserService(userData: LoginUserProps) {
  const url = new URL('/api/auth/local', baseUrl)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...userData }),
    })

    return response.json()
  } catch (error) {
    console.error('Login Service Error:', error)
    throw error
  }
}

/**
 * Process Kakao authentication callback
 * This function should be called from the server-side
 * @param code - The authorization code returned by Kakao
 * @returns The user data with JWT
 */
export async function processKakaoCallbackService(code: string) {
  const url = new URL('/api/auth/kakao/callback', baseUrl)
  url.searchParams.append('code', code)

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Kakao authentication error:', errorData)
      throw new Error('Failed to authenticate with Kakao')
    }

    return response.json()
  } catch (error) {
    console.error('Kakao Callback Service Error:', error)
    throw error
  }
}
