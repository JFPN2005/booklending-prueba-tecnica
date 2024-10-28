import { Request, Response } from "express"
import HistoryPossession from "../models/HistoryPossessions.model"

// Funcion para crear una nueva posesion
export const createHistoryPossessions = async (req: Request, res: Response) => {
  try {
    const possession = new HistoryPossession(req.body)
    possession.save()
    res.json({ data: possession })
  } catch (error) {
    console.log(error)
  }
}

// Funcion para obtener todas las posesiones
export const getHistoryPossessions = async (req: Request, res: Response) => {
  try {
    const possessions = await HistoryPossession.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
    res.json({ data: possessions })
  } catch (error) {
    console.log(error)
  }
}

// Funcion para obtener una posesion
export const getPossession = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const possession = await HistoryPossession.findByPk(id)

    if (!possession) {
      res.status(404).json({ error: "Posesion no Encontrada" })
      return
    } else {
      res.json({data: possession})
    }
  } catch (error) {
    console.log(error)
  }
}

// Funcion para agregar una fecha de devolucion
export const addReturnDate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const possession = await HistoryPossession.findByPk(id) 

    if(!possession) {
      res.status(404).json({ error: "Posesion no Encontrada" })
      return
    } else {
      await possession.update(req.body)
      await possession.save()
      res.json({data: possession})
    }
  } catch (error) {
    console.log(error)
  }
}