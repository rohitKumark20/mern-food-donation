const User = require('../model/user.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const handleErrors = (err) => {

}

const generateToken = (id) => {
    return token = jwt.sign({ id }, '6f83a2d5f6bc72ae45c43711d4a51f87')
}

module.exports.registerUser = async (req, res) => {
    const data = req.body;
    try {
        const user = await User.create(data);
        const token = generateToken(user._id);
        res.cookie('jwt', token)
        res.status(200).json({ user: user._id,message:'SignUp Successful' });
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }
}

module.exports.getUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById({ _id: userId })
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports.getDonorList = async (req, res) => {
    try {
        const user = await User.find({ usertype: 'donor' });
        res.status(200).send(user);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

module.exports.getNgo = async (req, res) => {
    try {
        const ngo = await User.find().where({ usertype: 'ngo' });
        res.status(200).send(ngo);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if (auth) {
                const token = generateToken(user._id);
                res.cookie('jwt', token)
                res.status(200).json(user);
            } else {
                res.status(401).send("Password doesn't match");
            }
        } else {
            res.status(401).send("User dosnt't exist")
        }
    } catch (error) {
        res.status(401).json({ err: error.message });
    }
}

module.exports.logoutUser = (req,res)=>{
    try {
        res.clearCookie('jwt');
        res.status(200).json('Logout successful')
    } catch (error) {
        res.status(401).json(error.message)
    }
}

module.exports.postComment = async (req, res) => {
    const { name, score } = req.body;

    try {
        const user = await User.updateOne({ name }, { $inc: { count: 1, totalScore: score } })
        const updatedUser = await User.findOne({ name });

        // Calculate the average rating
        const rating = updatedUser.totalScore / updatedUser.count;

        // Update the rating field in the User model
        await User.updateOne({ name }, { rating });
        res.status(200).json('Comment posted')
    } catch (error) {
        res.status(400).json(error.message)
    }
}