import { mongoose, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  ceil: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
const usersModal = mongoose.model("goMobit", userSchema);
export default usersModal;
