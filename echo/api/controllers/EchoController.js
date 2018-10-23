/**
 * EchoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    echo: function(req, res) {
        return res.json({
            "message": req.body.message
        });
    }
};

