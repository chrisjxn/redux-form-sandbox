module.exports = {
    getAllVehicles: (req, res) => {
        let db = req.app.get('db');
        db.get_all_vehicles().then(vehicles => {
            res.status(200).send(vehicles)
        })
    }
};