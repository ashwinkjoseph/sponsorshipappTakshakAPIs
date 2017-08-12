import * as mongoose from "mongoose";

export type CompanyModel = mongoose.Document & {
  companyName: string,
  latlng: string,
};

const CompanySchema = new mongoose.Schema({
  companyName: String,
  latlng: String,
});
const Company = mongoose.model<CompanyModel>("Task", CompanySchema);
export default Company;
