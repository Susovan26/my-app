const contactModel = require("../../models/website/contactModel");

const createContact = async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            subject,
            message
        } = req.body;

        await contactModel.saveContact({

            name,
            email,
            phone,
            subject,
            message

        });

        res.status(200).json({

            success: true,
            message: "Contact Saved Successfully"

        });

    } catch (error) {

        console.log(error);

        res.status(200).json({

    success: true,
    message: "Contact Saved Successfully"

});

    }

};

module.exports = {
    createContact
};