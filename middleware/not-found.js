export const notFoundMiddleware = (req, res) => {
    res.status(404).send('Sorry but this route does not exist!')
}