import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductSlicing extends Schema.Component {
  collectionName: 'components_product_slicings';
  info: {
    displayName: 'Slicing';
  };
  attributes: {
    rulon_slicing: Attribute.Relation<
      'product.slicing',
      'oneToOne',
      'api::rulon-slicing.rulon-slicing'
    >;
    Price: Attribute.Decimal;
  };
}

export interface ProductProductVariables extends Schema.Component {
  collectionName: 'components_product_product_variables';
  info: {
    displayName: 'Product_variables';
    description: '';
  };
  attributes: {
    width: Attribute.Decimal;
    price: Attribute.Integer;
    drawing: Attribute.String;
    img: Attribute.Media<'images', true>;
    length: Attribute.Integer;
    cut: Attribute.Boolean & Attribute.DefaultTo<true>;
    rulon_width: Attribute.Relation<
      'product.product-variables',
      'oneToOne',
      'api::rulon-width.rulon-width'
    >;
    rulon_length: Attribute.Relation<
      'product.product-variables',
      'oneToOne',
      'api::rulon-length.rulon-length'
    >;
  };
}

export interface OrderProductOrderProduct extends Schema.Component {
  collectionName: 'components_order_product_order_products';
  info: {
    displayName: 'Order_product';
  };
  attributes: {
    product: Attribute.Relation<
      'order-product.order-product',
      'oneToOne',
      'api::product.product'
    >;
    Value: Attribute.Integer;
  };
}

export interface CategoryFilter extends Schema.Component {
  collectionName: 'components_category_filters';
  info: {
    displayName: 'Filter';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Visible: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface CategoryFilterItem extends Schema.Component {
  collectionName: 'components_category_filter_items';
  info: {
    displayName: 'Filter-item';
  };
  attributes: {
    Name: Attribute.String;
    brands: Attribute.Relation<
      'category.filter-item',
      'oneToMany',
      'api::brand.brand'
    >;
    class_hs: Attribute.Relation<
      'category.filter-item',
      'oneToMany',
      'api::class-h.class-h'
    >;
    class_ps: Attribute.Relation<
      'category.filter-item',
      'oneToMany',
      'api::class-p.class-p'
    >;
    collections: Attribute.Relation<
      'category.filter-item',
      'oneToMany',
      'api::collection.collection'
    >;
    countries: Attribute.Relation<
      'category.filter-item',
      'oneToMany',
      'api::country.country'
    >;
  };
}

export interface CartSamovivoz extends Schema.Component {
  collectionName: 'components_cart_samovivozs';
  info: {
    displayName: 'samovivoz';
  };
  attributes: {
    Adress: Attribute.String;
    Active: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface AttributesAttributes extends Schema.Component {
  collectionName: 'components_attributes_attributes';
  info: {
    displayName: 'Attributes';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Overlock: Attribute.Boolean & Attribute.DefaultTo<false>;
    Price_m2: Attribute.Decimal;
    Shirina_v2: Attribute.String;
    Step_type: Attribute.String;
    Dlinna_doski: Attribute.Integer;
    Dosok_v_upakovke: Attribute.Integer;
    Construkciya: Attribute.String;
    Material_vorsa: Attribute.String;
    Osnova: Attribute.String;
    Ottenok: Attribute.String;
    Poverhnost: Attribute.String;
    Tip_risunka: Attribute.String;
    Col_m2: Attribute.Decimal;
    Pazmer_mm: Attribute.String;
    Shirina_doski: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
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
