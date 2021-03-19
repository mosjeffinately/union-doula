import { post } from 'axios';

export default async (req, res) => {
    try {
        const templateParams = req.body;

        const data = {
            // accessToken: process.env.EMAILJS_ACCESS_TOKEN,
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            template_params: templateParams,
            user_id: process.env.EMAILJS_USER_ID
        };

        const result = await post(process.env.EMAILJS_API_URL, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.status(200).json('Successfully sent email!');
    } catch (e) {
        console.log(e);
        return res.status(400).json(e.message);
    }
};
