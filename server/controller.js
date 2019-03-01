
module.exports = {

    getInventory: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory().then((products) => {
            res.status(200).send(products)
        }).catch((err) => {
            res.status(500).send({errMessage: "Someting went wrong getting the products from the database."});
            console.log(err)
        });
    },

    createProduct: (req, res) => {
        let { name, price, image } = req.body
        const dbInstance = req.app.get('db')

        dbInstance.create_product([name, price, image]).then((dbResponse) => {
            res.status(200).send('created')
        }).catch((err) => {
            console.log(err)
            res.status(500).send('Could not create the product');
        })
    },

    deleteProduct: (req, res) => {
        var { id } = req.params
        const dbInstance = req.app.get('db')

        dbInstance.delete_product([id]).then(() => {
            res.sendStatus(200)
        }).catch((err) => {
            res.status(409).send({errMessage: "For some reason product was not deleted."});
            console.log(err)
        })
    },


}