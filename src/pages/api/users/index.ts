import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, nome: "Fausto" },
        { id: 2, nome: "John" },
        { id: 3, nome: "Doe" }
    ]

    return response.json(users)
}