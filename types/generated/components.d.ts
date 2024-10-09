import type { Struct, Schema } from '@strapi/strapi';

export interface ProductSlicing extends Struct.ComponentSchema {
  collectionName: 'components_product_slicings';
  info: {
    displayName: 'Slicing';
  };
  attributes: {
    rulon_slicing: Schema.Attribute.Relation<
      'oneToOne',
      'api::rulon-slicing.rulon-slicing'
    >;
    Price: Schema.Attribute.Decimal;
  };
}

export interface ProductProductVariables extends Struct.ComponentSchema {
  collectionName: 'components_product_product_variables';
  info: {
    displayName: 'Product_variables';
    description: '';
  };
  attributes: {
    width: Schema.Attribute.Decimal;
    price: Schema.Attribute.Integer;
    drawing: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images', true>;
    length: Schema.Attribute.Integer;
    cut: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    rulon_width: Schema.Attribute.Relation<
      'oneToOne',
      'api::rulon-width.rulon-width'
    >;
    rulon_length: Schema.Attribute.Relation<
      'oneToOne',
      'api::rulon-length.rulon-length'
    >;
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

export interface CategoryFilter extends Struct.ComponentSchema {
  collectionName: 'components_category_filters';
  info: {
    displayName: 'Filter';
    icon: 'bulletList';
    description: '';
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
    Name: Schema.Attribute.String;
    brands: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    class_hs: Schema.Attribute.Relation<'oneToMany', 'api::class-h.class-h'>;
    class_ps: Schema.Attribute.Relation<'oneToMany', 'api::class-p.class-p'>;
    collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::collection.collection'
    >;
    countries: Schema.Attribute.Relation<'oneToMany', 'api::country.country'>;
  };
}

export interface CartSamovivoz extends Struct.ComponentSchema {
  collectionName: 'components_cart_samovivozs';
  info: {
    displayName: 'samovivoz';
  };
  attributes: {
    Adress: Schema.Attribute.String;
    Active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface AttributesAttributes extends Struct.ComponentSchema {
  collectionName: 'components_attributes_attributes';
  info: {
    displayName: 'Attributes';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Overlock: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Price_m2: Schema.Attribute.Decimal;
    Shirina_v2: Schema.Attribute.String;
    Step_type: Schema.Attribute.String;
    Dlinna_doski: Schema.Attribute.Integer;
    Dosok_v_upakovke: Schema.Attribute.Integer;
    Construkciya: Schema.Attribute.String;
    Material_vorsa: Schema.Attribute.String;
    Osnova: Schema.Attribute.String;
    Ottenok: Schema.Attribute.String;
    Poverhnost: Schema.Attribute.String;
    Tip_risunka: Schema.Attribute.String;
    Col_m2: Schema.Attribute.Decimal;
    Pazmer_mm: Schema.Attribute.String;
    Shirina_doski: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.slicing': ProductSlicing;
      'product.product-variables': ProductProductVariables;
      'order-product.order-product': OrderProductOrderProduct;
      'category.filter': CategoryFilter;
      'category.filter-item': CategoryFilterItem;
      'cart.samovivoz': CartSamovivoz;
      'attributes.attributes': AttributesAttributes;
    }
  }
}
