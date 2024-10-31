import { InferOutput } from 'valibot'
import type { bookSchema } from '../schema/bookSchema'
import type { createPossessionSchema, getPossessionSchema } from '../schema/possessionSchema'

export type Book = InferOutput<typeof bookSchema>

export type Possession = InferOutput<typeof createPossessionSchema>
export type CreatePossession = Pick<Possession, 'id_book' | 'book' | 'client' | 'idCard' | 'phone' | 'orderDate'>

export type PossessionWithReturnDate = InferOutput<typeof getPossessionSchema>
export type AddReturnDatePossession = Pick<PossessionWithReturnDate, 'book' | 'client' | 'idCard' | 'phone' | 'orderDate' | 'returnDate'>