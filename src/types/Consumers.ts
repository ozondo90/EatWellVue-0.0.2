import type { EnumDeclaration } from "typescript";

export type Consumers = {
  file? : File,
  firstName? : string,
  lastName? : string,
  phone? : string,
  country? : string,
  town? : string,
  residentialAddress? : string,
  professionnalAddress : string,
  foodPreferences : [],
  createAt : Date,
  profilPicture? : any,
  userId? : any 
}