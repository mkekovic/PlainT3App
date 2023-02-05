export default function handler(req: any, res: any) {
    switch (req.method) {
        case 'GET':
            res.status(200).json("Hello World")
          break
        case 'POST':
            res.status(200).json("Hello World")
          break
        case 'PUT':
          //...
          break
        case 'DELETE':
          console.log(req)
          break
        default:
          res.status(405).end() // Method not allowed
          break
      }
    
}