const pool = require("../../config/db");

const saveContact = async (data) => {

    const {
        name,
        email,
        phone,
        subject,
        message
    } = data;

    const query = `
    
        INSERT INTO cur_contact
        (name,email,phone,subject,message)

        VALUES($1,$2,$3,$4,$5)

    `;

    return await pool.query(query, [

        name,
        email,
        phone,
        subject,
        message

    ]);

};

module.exports = {
    saveContact
};