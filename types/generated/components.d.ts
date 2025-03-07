import type { Schema, Struct } from '@strapi/strapi';

export interface AttributesAttributes extends Struct.ComponentSchema {
  collectionName: 'components_attributes_attributes';
  info: {
    description: '';
    displayName: 'Attributes';
    icon: 'bulletList';
  };
  attributes: {
    Col_m2: Schema.Attribute.Decimal;
    Construkciya: Schema.Attribute.String;
    Dlinna_doski: Schema.Attribute.Integer;
    Dosok_v_upakovke: Schema.Attribute.Integer;
    Material_vorsa: Schema.Attribute.String;
    Osnova: Schema.Attribute.String;
    Ottenok: Schema.Attribute.String;
    Overlock: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Pazmer_mm: Schema.Attribute.String;
    Poverhnost: Schema.Attribute.String;
    Price_m2: Schema.Attribute.Decimal;
    Shirina_doski: Schema.Attribute.String;
    Shirina_v2: Schema.Attribute.String;
    Step_type: Schema.Attribute.String;
    Tip_risunka: Schema.Attribute.String;
  };
}

export interface CartSamovivoz extends Struct.ComponentSchema {
  collectionName: 'components_cart_samovivozs';
  info: {
    displayName: 'samovivoz';
  };
  attributes: {
    Active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Adress: Schema.Attribute.String;
  };
}

export interface CategoryFilter extends Struct.ComponentSchema {
  collectionName: 'components_category_filters';
  info: {
    description: '';
    displayName: 'Filter';
    icon: 'bulletList';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface CategoryFilterItem extends Struct.ComponentSchema {
  collectionName: 'components_category_filter_items';
  info: {
    displayName: 'Filter-item';
  };
  attributes: {
    brands: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    class_hs: Schema.Attribute.Relation<'oneToMany', 'api::class-h.class-h'>;
    class_ps: Schema.Attribute.Relation<'oneToMany', 'api::class-p.class-p'>;
    collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::collection.collection'
    >;
    countries: Schema.Attribute.Relation<'oneToMany', 'api::country.country'>;
    Name: Schema.Attribute.String;
  };
}

export interface OrderProductOrderProduct extends Struct.ComponentSchema {
  collectionName: 'components_order_product_order_products';
  info: {
    displayName: 'Order_product';
  };
  attributes: {
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    Value: Schema.Attribute.Integer;
  };
}

export interface ProductProductVariables extends Struct.ComponentSchema {
  collectionName: 'components_product_product_variables';
  info: {
    description: '';
    displayName: 'Product_variables';
  };
  attributes: {
    cut: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    drawing: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images', true>;
    length: Schema.Attribute.Integer;
    price: Schema.Attribute.Integer;
    rulon_length: Schema.Attribute.Relation<
      'oneToOne',
      'api::rulon-length.rulon-length'
    >;
    rulon_width: Schema.Attribute.Relation<
      'oneToOne',
      'api::rulon-width.rulon-width'
    >;
    width: Schema.Attribute.Decimal;
  };
}

export interface ProductSlicing extends Struct.ComponentSchema {
  collectionName: 'components_product_slicings';
  info: {
    displayName: 'Slicing';
  };
  attributes: {
    Price: Schema.Attribute.Decimal;
    rulon_slicing: Schema.Attribute.Relation<
      'oneToOne',
      'api::rulon-slicing.rulon-slicing'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'attributes.attributes': AttributesAttributes;
      'cart.samovivoz': CartSamovivoz;
      'category.filter': CategoryFilter;
      'category.filter-item': CategoryFilterItem;
      'order-product.order-product': OrderProductOrderProduct;
      'product.product-variables': ProductProductVariables;
      'product.slicing': ProductSlicing;
    }
  }
}
