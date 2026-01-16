import { type SchemaTypeDefinition } from "sanity";
import { tourType } from "./tourType";
import { destinationType } from "./destinationType";
import { categoryType } from "./categoryType";
import { settingsType } from "./settingsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tourType, destinationType, categoryType, settingsType],
};
