"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"

interface WishlistItem {
  id: number
  name: string
  brand: string
  price: number
  originalPrice: number
  image: string
  inStock: boolean
  category: string
}

interface WishlistState {
  items: WishlistItem[]
  itemCount: number
}

type WishlistAction =
  | { type: "ADD_ITEM"; payload: WishlistItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "CLEAR_WISHLIST" }
  | { type: "LOAD_WISHLIST"; payload: WishlistState }

const WishlistContext = createContext<{
  state: WishlistState
  dispatch: React.Dispatch<WishlistAction>
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: number) => void
  clearWishlist: () => void
  isInWishlist: (id: number) => boolean
} | null>(null)

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return state // Item already in wishlist
      }

      const newItems = [...state.items, action.payload]
      return {
        items: newItems,
        itemCount: newItems.length,
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload.id)
      return {
        items: newItems,
        itemCount: newItems.length,
      }
    }

    case "CLEAR_WISHLIST":
      return { items: [], itemCount: 0 }

    case "LOAD_WISHLIST":
      return action.payload

    default:
      return state
  }
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [], itemCount: 0 })

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("techparts-wishlist")
    if (savedWishlist) {
      try {
        const wishlistData = JSON.parse(savedWishlist)
        dispatch({ type: "LOAD_WISHLIST", payload: wishlistData })
      } catch (error) {
        console.error("Failed to load wishlist from localStorage:", error)
      }
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("techparts-wishlist", JSON.stringify(state))
  }, [state])

  const addToWishlist = (item: WishlistItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeFromWishlist = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } })
  }

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" })
  }

  const isInWishlist = (id: number) => {
    return state.items.some((item) => item.id === id)
  }

  return (
    <WishlistContext.Provider
      value={{ state, dispatch, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
