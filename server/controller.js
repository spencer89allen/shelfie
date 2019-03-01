
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
        const dbInstance = req.app.get('db')
        let { name, price, image } = req.body
        if(name == null || price == null || image == null) {
            res.sendStatus(400)
        }
        else {
            dbInstance.create_product([name, price, image]).then(() => {
                res.status(200)
            }).catch((err) => {
                res.status(500).send({errMessage: "Something went wrong adding a new product."});
                console.log(err)
            });
        }
    },


}