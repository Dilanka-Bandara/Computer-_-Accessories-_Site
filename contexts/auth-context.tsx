"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
  }
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: RegisterData) => Promise<boolean>
  logout: () => void
  updateProfile: (userData: Partial<User>) => Promise<boolean>
}

interface RegisterData {
  email: string
  password: string
  firstName: string
  lastName: string
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  })

  useEffect(() => {
    // Check for existing session on mount
    const savedUser = localStorage.getItem("techparts-user")
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        setState({
          user,
          isLoading: false,
          isAuthenticated: true,
        })
      } catch (error) {
        console.error("Failed to load user from localStorage:", error)
        setState((prev) => ({ ...prev, isLoading: false }))
      }
    } else {
      setState((prev) => ({ ...prev, isLoading: false }))
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data - in a real app, this would come from your API
      const user: User = {
        id: "user_123",
        email,
        firstName: "John",
        lastName: "Doe",
        phone: "(555) 123-4567",
        address: {
          street: "123 Main St",
          city: "San Francisco",
          state: "CA",
          zipCode: "94105",
        },
      }

      localStorage.setItem("techparts-user", JSON.stringify(user))
      setState({
        user,
        isLoading: false,
        isAuthenticated: true,
      })
      return true
    } catch (error) {
      console.error("Login failed:", error)
      return false
    }
  }

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const user: User = {
        id: `user_${Date.now()}`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      }

      localStorage.setItem("techparts-user", JSON.stringify(user))
      setState({
        user,
        isLoading: false,
        isAuthenticated: true,
      })
      return true
    } catch (error) {
      console.error("Registration failed:", error)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("techparts-user")
    setState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    })
  }

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      const updatedUser = { ...state.user, ...userData } as User
      localStorage.setItem("techparts-user", JSON.stringify(updatedUser))
      setState((prev) => ({
        ...prev,
        user: updatedUser,
      }))
      return true
    } catch (error) {
      console.error("Profile update failed:", error)
      return false
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout, updateProfile }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
