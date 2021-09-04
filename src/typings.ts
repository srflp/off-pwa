export type ProductResponse = ProductNotFound | ProductFound;

interface ProductNotFound {
  code: string;
  status: 0;
  status_verbose: 'no code or invalid code';
}

interface ProductFound {
  code: string;
  status: 1;
  product: Product;
  status_verbose: 'product found';
}

type ImageType = 'front' | 'ingredients' | 'nutrition';
type ImageSize = 'display' | 'small' | 'thumb';
// type ImageUrls = `image_${ImageType}${ImageUrlTypes}url`;

export interface Product {
  _id: string;
  _keywords: string[];
  added_countries_tags: any[];
  // additives_debug_tags: any[];
  additives_n: number;
  // additives_old_n: number;
  // additives_old_tags: string[];
  // additives_original_tags: string[];
  // additives_prev_original_tags: string[];
  additives_tags: string[];
  additives_tags_n: number;
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: string[];
  allergens_tags: string[];
  // amino_acids_prev_tags: any[];
  // amino_acids_tags: any[];
  brands: string;
  brands_tags: string[];
  categories: string;
  categories_hierarchy: string[];
  categories_lc: string;
  categories_properties: any;
  categories_properties_tags: string[];
  categories_tags: string[];
  checkers_tags: any[];
  cities_tags: any[];
  code: string;
  codes_tags: string[];
  compared_to_category: string;
  complete: 0 | 1;
  completeness: number;
  correctors_tags: string[];
  countries: string;
  countries_hierarchy: string[];
  countries_lc: string;
  countries_tags: string[];
  created_t: number;
  creator: string;
  data_quality_bug_tags: any[];
  data_quality_errors_tags: any[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources: string;
  data_sources_tags: string[];
  debug_param_sorted_langs: string[];
  downgraded: string;
  ecoscore_data: any; // TODO
  ecoscore_grade: string; // narrow this
  ecoscore_score: number;
  ecoscore_tags: string[];
  editors_tags: string[];
  emb_codes: string;
  emb_codes_tags: string[];
  entry_dates_tags: string[];
  expiration_date: string;
  generic_name: string;
  generic_name_de: string;
  id: string;
  // TODO do the 12 following with https://stackoverflow.com/questions/65878880/typescript-template-literal-as-interface-key
  // after TS 4.4 cames out
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_ingredients_small_url: string;
  image_ingredients_thumb_url: string;
  image_ingredients_url: string;
  image_nutrition_small_url: string;
  image_nutrition_thumb_url: string;
  image_nutrition_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Record<number, ProductImageNumbered> & Record<ImageType, ProductImageNamed>; // TODO add langages to ImageType
  informers: string[];
  informers_tags: string[];
  ingredients: Ingredient[];
  ingredients_analysis_tags: string[];
  ingredients_debug: (string | null)[];
  ingredients_from_or_that_may_be_from_palm_oil: number;
  ingredients_from_palm_oil_n: number;
  ingredients_from_palm_oil_tags: any[];
  ingredients_hierarchy: string[];
  ingredients_ids_debug: string[];
  ingredients_n: number;
  ingredients_n_tags: string[];
  ingredients_original_tags: string[];
  ingredients_percent_analysis: number; // number or (0 | 1)?
  ingredients_tags: string[];
  ingredients_text: string;
  ingredients_text_debug: string;
  ingredients_text_with_allergens: string;
  // TODO language ingredients texts
  ingredients_that_may_be_from_palm_oil_n: number;
  ingredients_that_may_be_from_palm_oil_tags: any[];
  interface_version_created: string;
  interface_version_modified: string;
  known_ingredients_n: number;
  labels: string;
  labels_hierarchy: string[];
  labels_lc: string;
  labels_old: string;
  labels_tags: string[];
  lang: string;
  lang_debug_tags: any[];
  languages: Record<string, number>;
  languages_codes: Record<string, number>;
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  lc: string;
  lc_imported: string;
  link: string;
  link_debug_tags: any[];
  main_countries_tags: any[];
  manufacturing_places: string;
  manufacturing_places_debug_tags: any[];
  manufacturing_places_tags: any[];
  max_imgid: string;
  minerals_prev_tags: any[];
  minerals_tags: any[];
  misc_tags: string[];
  new_additives_n: number;
  no_nutrition_data: string;
  nova_group?: 1 | 2 | 3 | 4;
  nova_group_debug: string;
  nova_groups?: '1' | '2' | '3' | '4';
  nova_group_tags?: ['not-applicable'];
  nova_groups_tags?: string[];
  nucleotides_prev_tags: any[];
  nucleotides_tags: any[];
  nutrient_levels: Record<'fat' | 'salt' | 'saturated-fat' | 'sugars', 'low' | 'moderate' | 'high'>;
  nutrient_levels_tags: string[];
  nutriments: Record<string, number>; // TODO exact nutriments
  nutriscore_data: any; // TODO nutriscore
  // source: https://world.openfoodfacts.org/nutrition-grades.json
  nutriscore_grade: 'a' | 'b' | 'c' | 'd' | 'e' | 'not-applicable' | 'unknown';
  nutriscore_score: number;
  nutriscore_score_opposite: number;
  nutrition_data: 'on' | string;
  nutrition_data_per: string;
  nutrition_data_per_debug_tags: any[];
  nutrition_data_per_imported: string;
  nutrition_data_prepared: string;
  nutrition_data_prepared_per: string;
  nutrition_data_prepared_per_debug_tags: any[];
  nutrition_data_prepared_per_imported: string;
  nutrition_grade_fr: string;
  nutrition_grades: string;
  nutrition_grades_tags: string[];
  nutrition_score_beverage: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
  origins: string;
  origins_hierarchy: string[];
  origins_lc: string;
  origins_old: string;
  origins_tags: string[];
  other_nutritional_substances_tags: any[];
  packaging: string;
  packaging_debug_tags: any[];
  packaging_tags: string[];
  packagings: any[];
  photographers: string[];
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  popularity_tags: string[];
  product_name: string;
  // TODO product_name for languages
  product_quantity: number;
  purchase_places: string;
  purchase_places_debug_tags: any[];
  purchase_places_tags: any[];
  quantity: string;
  quantity_debug_tags: any[];
  removed_countries_tags: any[];
  rev: number;
  scans_n: number;
  selected_images: Record<ImageType, Record<ImageSize, Record<string, string>>>;
  serving_quantity: number;
  serving_size: string;
  serving_size_debug_tags: any[];
  serving_size_imported: string;
  sortkey: number;
  sources: Source[];
  sources_fields?: Record<
    string,
    {
      available_date: string;
      fdc_category: string;
      fdc_data_source: string;
      fdc_id: string;
      modified_date: string;
      publication_date: string;
    }
  >;
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  stores: string;
  stores_debug_tags: any[];
  stores_tags: any[];
  traces: string;
  traces_debug_tags: any[];
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy: string[];
  traces_tags: string[];
  unique_scans_n: number;
  unknown_ingredients_n: number;
  unknown_ingredients_tags: any[];
  update_key: string;
  vitamins_prev_tags: any[];
  vitamin_tags: any[];
}

type ImageSizes = Record<
  '100' | '400' | 'full',
  {
    h: number;
    w: number;
  }
>;

interface ProductImageNumbered {
  sizes: ImageSizes;
  uploaded_t: number;
  uploader: string;
}

interface ProductImageNamed {
  geometry: string;
  imgid: string;
  normalize: null | 'checked';
  rev: string;
  sizes: ImageSizes;
  white_magic: any;
}

interface Ingredient {
  has_sub_ingredients?: 'yes';
  id: string;
  percent_estimate: number;
  percent_max: number;
  percent_min: number;
  rank?: number;
  text: string;
  vegan?: 'yes';
  vegetarian?: 'yes';
}

interface Source {
  fields: string[];
  id: string;
  images: any[];
  import_t: number;
  manufacturer?: null;
  name?: string;
  url: string | null;
}
