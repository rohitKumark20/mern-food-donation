const twilio = require('twilio')
const { Donation, Request } = require('../model/data.js')
const User = require('../model/user.js')

module.exports.postDonation = async (req, res) => {
    const data = req.body;
    const name = data.name;
    console.log(data)
    console.log(name);
    try {
        const donation = await Donation.create(data);
        const user = await User.findOne({ name: name })
        user.posts.push(donation)
        await user.save()
        res.status(200).json('Donation Successful')
    } catch (error) {
        res.status(401).json({ err: error.message });
    }
}

module.exports.getDonation = async (req, res) => {
    try {
        const data = await Donation.find().sort({ date: -1 });
        res.status(200).send(data);
    } catch (error) {
        res.status(401).send({ err: error.message });
    }
}

module.exports.getHomeDonation = async (req, res) => {
    try {
        const data = await Donation.find().sort({ date: -1 }).limit(4);
        res.status(200).send(data);
    } catch (error) {
        res.status(401).send({ err: error.message });
    }
}

module.exports.postRequest = async (req, res) => {
    const data = req.body;
    const { name } = data;
    console.log(data);
    console.log(name);
    try {
        const request = await Request.create(data);
        const user = await User.findOne({ name });
        user.posts.push(request);
        await user.save();
        res.status(200).json('Request posted Successfully');
    } catch (error) {
        res.status(401).json({ err: error.message })
    }
}

module.exports.getRequest = async (req, res) => {
    try {
        const data = await Request.find().sort({ date: -1 });
        res.status(200).send(data);
    } catch (error) {
        res.status(401).json({ err: error.message })
    }
}

module.exports.getHomeRequest = async (req, res) => {
    try {
        const data = await Request.find().sort({ date: -1 }).limit(4);
        res.status(200).send(data);
    } catch (error) {
        res.status(401).json({ err: error.message })
    }
}

module.exports.getdonorDonation = async (req, res) => {
    const { name } = req.query;
    console.log(name)

}

module.exports.sendNotificationPosts = async (req, res) => {
    const { name, phone, postype } = req.body;
    console.log(req.user)

    // const accountSid = 'AC5495a1f12b10fcc42b9db1deeb6337f2';
    // const authToken = 'bc4e33e4843ba339fb10a03615b15a8b';

    const accountSid = 'AC5495a1f12b10fcc42b9db1deeb6337f2';
    const authToken = '5e530bd405e14664f85479eb22339c8a';

    const client = new twilio(accountSid, authToken);

    client.messages
        .create({
            body: `Hey ${name}!, You have a request regarding food donation from ${name}.You can contact on this ${phone} for further details. Thank you!`,
            to: `+918603247778`, // Text your number
            from: '+14302434695', // From a valid Twilio number
        })
        .then((message) => {
            // console.log(message)
            res.status(200).json({ message: 'Sent successfully' })
        })
        .catch(err => {
            console.log(err)
            res.status(401).json({ message: 'Something went wrong' })
        });
}