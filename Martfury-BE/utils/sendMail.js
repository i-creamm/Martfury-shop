const nodemailer = require("nodemailer");
require('dotenv').config();
const {order_detail, Product} = require('../models')

const sendEmail = async (email, subject, html) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: '"Eugo Raviaz" <ntdat3120411046@gmail.com>',
        to: email, 
        subject: subject, 
        html: html
    });

    return info
}

const sendMailOrder = async (email, newOrder) => {
    const listOrderDetail = await order_detail.findOne({ 
        where: { 
            order_id: newOrder.order_id 
        },
        include: {
            model: Product
        }
    })
    for(const item of listOrderDetail){
        const html = `<tr>
                        <td width="25%" align="left" style="font-family: Open sans-serif; font-size: 18px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;text-align: center;\">
					        <img style="width: 85%;" src="${item.product_id.image}">
					    </td>
                    </tr>`
    }

    return await sendEmail(email,'Đặt hàng thành công', html)
}

module.exports = {
    sendEmail,
    sendMailOrder
}