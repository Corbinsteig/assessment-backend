let quotes = require('./db.json')

module.exports = {
    getQuotes: (req, res) => {
        res.status(200).send(quotes)
    },
    deleteQuotes: (req, res) => {
        let index = quotes.findIndex(elem => elem.id === +req.params.id)
        quotes.splice(index, 1)
        res.status(200).send(quotes)
    },
    createQuote: (req, res) => {
        const {quote, person} = req.body
        let newQuote = {
            quote,
            person,
        }
        quotes.push(newQuote);
        res.status(200).send(quotes)
    },
}