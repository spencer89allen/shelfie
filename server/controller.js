
module.exports = {

    getInventory: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory().then((products) => {
            res.status(200).send(products)
        }).catch((err) => {
            res.status(500).send({errMessage: "Someting went wrong getting the products from the database."});
            console.log(err)
        });
    }
}