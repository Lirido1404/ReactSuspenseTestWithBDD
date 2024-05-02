import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;



const infosSchema = new Schema(
  {
    title: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

const Infos = mongoose.models.Infos || mongoose.model("Infos", infosSchema);

export default Infos;
