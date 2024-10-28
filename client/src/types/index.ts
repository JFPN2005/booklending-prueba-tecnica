import { InferOutput } from 'valibot'
import type { bookSchema } from '../schema/bookSchema'
import type { createPossessionSchema } from '../schema/possessionSchema'

export type Book = InferOutput<typeof bookSchema>

export type Possession = InferOutput<typeof createPossessionSchema>
export type CreatePossession = Pick<Possession, 'book' | 'client' | 'idCard' | 'phone' | 'orderDate'>