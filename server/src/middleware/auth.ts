import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import User from "../models/User.model"

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}

export const authenticate = async (req : Request, res : Response, next : NextFunction) => {
  const bearer = req.headers.authorization
  if(!bearer) {
    const error = new Error('No Autorizado')
    res.status(401).json({error: error.message})
    return
  }
  const [, token] = bearer.split(' ')
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if(typeof decoded === 'object' && decoded.id){
      const user = await User.findByPk(decoded.id)
      if(user) {
        req.user = user.dataValues
      } else {
        res.status(500).json({error: 'Token no Valido'})
      }
    }
  } catch (error) {
    res.status(500).json({error: 'Token no Valido'})
  }

  next()
}