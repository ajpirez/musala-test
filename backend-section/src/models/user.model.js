const mongoose = require("mongoose");
const {Schema} = mongoose;
const {compareSync, hashSync, genSaltSync} = require("bcryptjs");

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, " name is required"]
    },
    username: {
        type: String,
        required: [true, "username is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    rols: [
        {
            type: Schema.Types.ObjectId,
            ref: "rol",
            required: true,
            autopopulate: true
        }
    ]
});

UserSchema.methods.toJSON = function () {
    let user = this.toObject();
    // delete user.password;
    return user;
};

UserSchema.methods.comparePasswords = function (password) {
    return compareSync(password, this.password);
};

UserSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
});

// UserSchema.pre("findOneAndUpdate", async function (next) {
//     const salt = genSaltSync(10);
//     const hashedPassword = hashSync(this._update.password, salt);
//     this._update.password = hashedPassword;
//     next();
// });

UserSchema.pre('remove', function (next) {

    this.model('rol').deleteMany({UserId: this._id}, next);
    next();
});
UserSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("user", UserSchema);
