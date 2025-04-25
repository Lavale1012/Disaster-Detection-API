const mongoose = require("mongoose");

const disasterSchema = new mongoose.Schema(
  {
    disasterNumber: { type: Number, required: true },
    declarationDate: { type: Date },
    disasterName: { type: String },
    incidentBeginDate: { type: Date },
    incidentEndDate: { type: Date },
    declarationType: { type: String },
    stateCode: { type: String },
    stateName: { type: String },
    incidentType: { type: String },
    entryDate: { type: Date },
    updateDate: { type: Date },
    closeoutDate: { type: Date },
    region: { type: Number },
    ihProgramDeclared: { type: Boolean },
    iaProgramDeclared: { type: Boolean },
    paProgramDeclared: { type: Boolean },
    hmProgramDeclared: { type: Boolean },
    declarationRequestDate: { type: Date },
    disasterPageUrl: { type: String },
    id: { type: String }, // UUID as String
    hash: { type: String },
    lastRefresh: { type: Date },
  },
  {
    collection: "report-db", // 👈 Force Mongoose to use your exact collection name
    timestamps: true,
  }
);

module.exports = mongoose.model("Disaster", disasterSchema);
