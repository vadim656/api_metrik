import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    timestamps: true;
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiAbrasionAbrasion extends Struct.CollectionTypeSchema {
  collectionName: 'abrasions';
  info: {
    singularName: 'abrasion';
    pluralName: 'abrasions';
    displayName: 'Abrasion';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::abrasion.abrasion'
    >;
  };
}

export interface ApiAppointmentAppointment extends Struct.CollectionTypeSchema {
  collectionName: 'appointments';
  info: {
    singularName: 'appointment';
    pluralName: 'appointments';
    displayName: 'Appointment';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    tovaries: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::appointment.appointment'
    >;
  };
}

export interface ApiBasisBasis extends Struct.CollectionTypeSchema {
  collectionName: 'bases';
  info: {
    singularName: 'basis';
    pluralName: 'bases';
    displayName: 'Basis';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    prtoducts: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::basis.basis'>;
  };
}

export interface ApiBrandBrand extends Struct.CollectionTypeSchema {
  collectionName: 'brands';
  info: {
    singularName: 'brand';
    pluralName: 'brands';
    displayName: '\u0411\u0440\u0435\u043D\u0434\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::collection.collection'
    >;
    id_parser: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
  };
}

export interface ApiCalcTypeCalcType extends Struct.CollectionTypeSchema {
  collectionName: 'calc_types';
  info: {
    singularName: 'calc-type';
    pluralName: 'calc-types';
    displayName: 'Calc_type';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    faskas: Schema.Attribute.Relation<'manyToMany', 'api::faska.faska'>;
    shirinas: Schema.Attribute.Relation<'manyToMany', 'api::shirina.shirina'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::calc-type.calc-type'
    >;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    Img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    parent: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    id_parser: Schema.Attribute.String;
    minprice: Schema.Attribute.Integer;
    maxprice: Schema.Attribute.Integer;
    child: Schema.Attribute.Relation<'oneToMany', 'api::category.category'>;
    top_category: Schema.Attribute.Relation<
      'manyToOne',
      'api::category.category'
    >;
    filter: Schema.Attribute.Relation<'oneToOne', 'api::filter.filter'>;
    filter_cat: Schema.Attribute.JSON;
    tovaries: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    Position: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    Enable_start_page: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ApiClassHClassH extends Struct.CollectionTypeSchema {
  collectionName: 'class_hs';
  info: {
    singularName: 'class-h';
    pluralName: 'class-hs';
    displayName: 'Class_H';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::class-h.class-h'
    >;
  };
}

export interface ApiClassPClassP extends Struct.CollectionTypeSchema {
  collectionName: 'class_ps';
  info: {
    singularName: 'class-p';
    pluralName: 'class-ps';
    displayName: 'Class_P';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::class-p.class-p'
    >;
  };
}

export interface ApiClassPozharClassPozhar extends Struct.CollectionTypeSchema {
  collectionName: 'class_pozhars';
  info: {
    singularName: 'class-pozhar';
    pluralName: 'class-pozhars';
    displayName: '\u041A\u043B\u0430\u0441\u0441 \u043F\u043E\u0436\u0430\u0440\u043D\u043E\u0439';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::class-pozhar.class-pozhar'
    >;
  };
}

export interface ApiCollectionCollection extends Struct.CollectionTypeSchema {
  collectionName: 'collections';
  info: {
    singularName: 'collection';
    pluralName: 'collections';
    displayName: '\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::collection.collection'
    >;
  };
}

export interface ApiColorColor extends Struct.CollectionTypeSchema {
  collectionName: 'colors';
  info: {
    singularName: 'color';
    pluralName: 'colors';
    displayName: '\u0426\u0432\u0435\u0442\u0430';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::color.color'>;
  };
}

export interface ApiColorSpectrumColorSpectrum
  extends Struct.CollectionTypeSchema {
  collectionName: 'color_spectrums';
  info: {
    singularName: 'color-spectrum';
    pluralName: 'color-spectrums';
    displayName: 'Color-spectrum';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::color-spectrum.color-spectrum'
    >;
  };
}

export interface ApiComponentialityComponentiality
  extends Struct.CollectionTypeSchema {
  collectionName: 'componentialities';
  info: {
    singularName: 'componentiality';
    pluralName: 'componentialities';
    displayName: 'Componentiality';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::componentiality.componentiality'
    >;
  };
}

export interface ApiConnectionTypeConnectionType
  extends Struct.CollectionTypeSchema {
  collectionName: 'connection_types';
  info: {
    singularName: 'connection-type';
    pluralName: 'connection-types';
    displayName: 'Connection-type';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::connection-type.connection-type'
    >;
  };
}

export interface ApiCountryCountry extends Struct.CollectionTypeSchema {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: '\u0421\u0442\u0440\u0430\u043D\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::country.country'
    >;
  };
}

export interface ApiDestinationMaterialDestinationMaterial
  extends Struct.CollectionTypeSchema {
  collectionName: 'destination_materials';
  info: {
    singularName: 'destination-material';
    pluralName: 'destination-materials';
    displayName: 'Destination-material';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::destination-material.destination-material'
    >;
  };
}

export interface ApiDimensionDimension extends Struct.CollectionTypeSchema {
  collectionName: 'dimensions';
  info: {
    singularName: 'dimension';
    pluralName: 'dimensions';
    displayName: 'Dimension';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dimension.dimension'
    >;
  };
}

export interface ApiFaskaFaska extends Struct.CollectionTypeSchema {
  collectionName: 'faskas';
  info: {
    singularName: 'faska';
    pluralName: 'faskas';
    displayName: '\u0424\u0430\u0441\u043A\u0430';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    calc_types: Schema.Attribute.Relation<
      'manyToMany',
      'api::calc-type.calc-type'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faska.faska'>;
  };
}

export interface ApiFilterFilter extends Struct.CollectionTypeSchema {
  collectionName: 'filters';
  info: {
    singularName: 'filter';
    pluralName: 'filters';
    displayName: 'Filter';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    UUID: Schema.Attribute.UID;
    kategorii: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    brands: Schema.Attribute.Boolean;
    classHs: Schema.Attribute.Boolean;
    classPozhars: Schema.Attribute.Boolean;
    classPs: Schema.Attribute.Boolean;
    colors: Schema.Attribute.Boolean;
    countries: Schema.Attribute.Boolean;
    vlagostojkosts: Schema.Attribute.Boolean;
    namotkaNs: Schema.Attribute.Boolean;
    obToshinas: Schema.Attribute.Boolean;
    Name: Schema.Attribute.String;
    proizvoditels: Schema.Attribute.Boolean;
    shirinas: Schema.Attribute.Boolean;
    vysota_vorsas: Schema.Attribute.Boolean;
    zamoks: Schema.Attribute.Boolean;
    zashhitnyj_slojs: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::filter.filter'>;
  };
}

export interface ApiFormForm extends Struct.CollectionTypeSchema {
  collectionName: 'forms';
  info: {
    singularName: 'form';
    pluralName: 'forms';
    displayName: 'Form';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::form.form'>;
  };
}

export interface ApiFormatFormat extends Struct.CollectionTypeSchema {
  collectionName: 'formats';
  info: {
    singularName: 'format';
    pluralName: 'formats';
    displayName: 'Format';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::format.format'>;
  };
}

export interface ApiGlossLevelGlossLevel extends Struct.CollectionTypeSchema {
  collectionName: 'gloss_levels';
  info: {
    singularName: 'gloss-level';
    pluralName: 'gloss-levels';
    displayName: 'Gloss-level';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::gloss-level.gloss-level'
    >;
  };
}

export interface ApiInvoiceInvoice extends Struct.CollectionTypeSchema {
  collectionName: 'invoices';
  info: {
    singularName: 'invoice';
    pluralName: 'invoices';
    displayName: '\u0421\u0447\u0435\u0442\u0430';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::invoice.invoice'
    >;
  };
}

export interface ApiLengthLength extends Struct.CollectionTypeSchema {
  collectionName: 'lengths';
  info: {
    singularName: 'length';
    pluralName: 'lengths';
    displayName: 'Length';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.Decimal;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::length.length'>;
  };
}

export interface ApiLockConnectionLockConnection
  extends Struct.CollectionTypeSchema {
  collectionName: 'lock_connections';
  info: {
    singularName: 'lock-connection';
    pluralName: 'lock-connections';
    displayName: 'Lock connection';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lock-connection.lock-connection'
    >;
  };
}

export interface ApiManufacturerManufacturer
  extends Struct.CollectionTypeSchema {
  collectionName: 'manufacturers';
  info: {
    singularName: 'manufacturer';
    pluralName: 'manufacturers';
    displayName: '\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::manufacturer.manufacturer'
    >;
  };
}

export interface ApiMaterialMaterial extends Struct.CollectionTypeSchema {
  collectionName: 'materials';
  info: {
    singularName: 'material';
    pluralName: 'materials';
    displayName: 'Material';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::material.material'
    >;
  };
}

export interface ApiNamotkaNNamotkaN extends Struct.CollectionTypeSchema {
  collectionName: 'namotka_ns';
  info: {
    singularName: 'namotka-n';
    pluralName: 'namotka-ns';
    displayName: '\u041D\u0430\u043C\u043E\u0442\u043A\u0430';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::namotka-n.namotka-n'
    >;
  };
}

export interface ApiObToshinaObToshina extends Struct.CollectionTypeSchema {
  collectionName: 'ob_toshinas';
  info: {
    singularName: 'ob-toshina';
    pluralName: 'ob-toshinas';
    displayName: '\u041E\u0431\u0449\u0430\u044F \u0442\u043E\u043B\u0449\u0438\u043D\u0430';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    Name: Schema.Attribute.Decimal;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ob-toshina.ob-toshina'
    >;
  };
}

export interface ApiOrderOrder extends Struct.CollectionTypeSchema {
  collectionName: 'orders';
  info: {
    singularName: 'order';
    pluralName: 'orders';
    displayName: 'Order';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    UID: Schema.Attribute.UID;
    Summ: Schema.Attribute.Decimal;
    Order_product: Schema.Attribute.Component<
      'order-product.order-product',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::order.order'>;
  };
}

export interface ApiPackagePackage extends Struct.CollectionTypeSchema {
  collectionName: 'packages';
  info: {
    singularName: 'package';
    pluralName: 'packages';
    displayName: 'Package';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::package.package'
    >;
  };
}

export interface ApiProductProduct extends Struct.CollectionTypeSchema {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: '\u0422\u043E\u0432\u0430\u0440\u044B';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    Desc: Schema.Attribute.RichText;
    Price: Schema.Attribute.Decimal;
    Price_Sale: Schema.Attribute.Decimal;
    categories: Schema.Attribute.Relation<
      'manyToMany',
      'api::category.category'
    >;
    Attr: Schema.Attribute.Component<'attributes.attributes', false>;
    IMG: Schema.Attribute.Media<'images', true>;
    Cat__s: Schema.Attribute.String;
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    collection: Schema.Attribute.Relation<
      'manyToOne',
      'api::collection.collection'
    >;
    class_h: Schema.Attribute.Relation<'manyToOne', 'api::class-h.class-h'>;
    class_p: Schema.Attribute.Relation<'manyToOne', 'api::class-p.class-p'>;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    Connected_P: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    Rulon: Schema.Attribute.Component<'product.product-variables', true>;
    calc_type: Schema.Attribute.Relation<
      'manyToOne',
      'api::calc-type.calc-type'
    >;
    klass_pozharnoj: Schema.Attribute.Relation<
      'manyToOne',
      'api::class-pozhar.class-pozhar'
    >;
    namotka: Schema.Attribute.Relation<'manyToOne', 'api::namotka-n.namotka-n'>;
    obshhaya_tolshhina: Schema.Attribute.Relation<
      'manyToOne',
      'api::ob-toshina.ob-toshina'
    >;
    proizvoditel: Schema.Attribute.Relation<
      'manyToOne',
      'api::manufacturer.manufacturer'
    >;
    faska: Schema.Attribute.Relation<'manyToOne', 'api::faska.faska'>;
    czveta: Schema.Attribute.Relation<'manyToOne', 'api::color.color'>;
    shirina: Schema.Attribute.Relation<'manyToOne', 'api::shirina.shirina'>;
    zashitniy_sloy: Schema.Attribute.Relation<
      'manyToOne',
      'api::zashitniy-sloy.zashitniy-sloy'
    >;
    vlagostoikost: Schema.Attribute.Relation<
      'manyToOne',
      'api::vlagostoikost.vlagostoikost'
    >;
    visota_vorsa: Schema.Attribute.Relation<
      'manyToOne',
      'api::visota-vorsa.visota-vorsa'
    >;
    Slicing: Schema.Attribute.Component<'product.slicing', true>;
    type_designs: Schema.Attribute.Relation<
      'oneToMany',
      'api::type-design.type-design'
    >;
    views: Schema.Attribute.Relation<'manyToMany', 'api::view.view'>;
    types: Schema.Attribute.Relation<'manyToMany', 'api::type.type'>;
    length: Schema.Attribute.Relation<'manyToOne', 'api::length.length'>;
    surfaces: Schema.Attribute.Relation<'manyToMany', 'api::surface.surface'>;
    properties: Schema.Attribute.Relation<
      'manyToMany',
      'api::propertie.propertie'
    >;
    appointments: Schema.Attribute.Relation<
      'manyToMany',
      'api::appointment.appointment'
    >;
    abrasions: Schema.Attribute.Relation<
      'manyToMany',
      'api::abrasion.abrasion'
    >;
    forms: Schema.Attribute.Relation<'manyToMany', 'api::form.form'>;
    formats: Schema.Attribute.Relation<'manyToMany', 'api::format.format'>;
    rooms: Schema.Attribute.Relation<'manyToMany', 'api::room.room'>;
    dimensions: Schema.Attribute.Relation<
      'manyToMany',
      'api::dimension.dimension'
    >;
    color_spectrums: Schema.Attribute.Relation<
      'manyToMany',
      'api::color-spectrum.color-spectrum'
    >;
    connection_types: Schema.Attribute.Relation<
      'manyToMany',
      'api::connection-type.connection-type'
    >;
    lock_connections: Schema.Attribute.Relation<
      'manyToMany',
      'api::lock-connection.lock-connection'
    >;
    bases: Schema.Attribute.Relation<'manyToMany', 'api::basis.basis'>;
    wood_types: Schema.Attribute.Relation<
      'manyToMany',
      'api::wood-type.wood-type'
    >;
    gloss_levels: Schema.Attribute.Relation<
      'manyToMany',
      'api::gloss-level.gloss-level'
    >;
    type_processings: Schema.Attribute.Relation<
      'manyToMany',
      'api::type-processing.type-processing'
    >;
    materials: Schema.Attribute.Relation<
      'manyToMany',
      'api::material.material'
    >;
    weight: Schema.Attribute.Relation<'manyToOne', 'api::weight.weight'>;
    packages: Schema.Attribute.Relation<'manyToMany', 'api::package.package'>;
    destination_materials: Schema.Attribute.Relation<
      'manyToMany',
      'api::destination-material.destination-material'
    >;
    componentialities: Schema.Attribute.Relation<
      'manyToMany',
      'api::componentiality.componentiality'
    >;
    ART: Schema.Attribute.String;
    id_parser: Schema.Attribute.String;
    parent_category: Schema.Attribute.Relation<
      'manyToOne',
      'api::category.category'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface ApiPropertiePropertie extends Struct.CollectionTypeSchema {
  collectionName: 'properties';
  info: {
    singularName: 'propertie';
    pluralName: 'properties';
    displayName: 'Propertie';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::propertie.propertie'
    >;
  };
}

export interface ApiRoomRoom extends Struct.CollectionTypeSchema {
  collectionName: 'rooms';
  info: {
    singularName: 'room';
    pluralName: 'rooms';
    displayName: 'Room';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::room.room'>;
  };
}

export interface ApiRulonLengthRulonLength extends Struct.CollectionTypeSchema {
  collectionName: 'rulon_lengths';
  info: {
    singularName: 'rulon-length';
    pluralName: 'rulon-lengths';
    displayName: 'Rulon_length';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::rulon-length.rulon-length'
    >;
  };
}

export interface ApiRulonSlicingRulonSlicing
  extends Struct.CollectionTypeSchema {
  collectionName: 'rulon_slicings';
  info: {
    singularName: 'rulon-slicing';
    pluralName: 'rulon-slicings';
    displayName: 'Rulon_slicing';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Schema.Attribute.Decimal;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::rulon-slicing.rulon-slicing'
    >;
  };
}

export interface ApiRulonWidthRulonWidth extends Struct.CollectionTypeSchema {
  collectionName: 'rulon_widths';
  info: {
    singularName: 'rulon-width';
    pluralName: 'rulon-widths';
    displayName: 'Rulon_width';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Value: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::rulon-width.rulon-width'
    >;
  };
}

export interface ApiSettingRulonSettingRulon extends Struct.SingleTypeSchema {
  collectionName: 'setting_rulons';
  info: {
    singularName: 'setting-rulon';
    pluralName: 'setting-rulons';
    displayName: 'SettingRulon';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Step: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0.1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.1>;
    Enable: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::setting-rulon.setting-rulon'
    >;
  };
}

export interface ApiSettingsCartSettingsCart extends Struct.SingleTypeSchema {
  collectionName: 'settings_carts';
  info: {
    singularName: 'settings-cart';
    pluralName: 'settings-carts';
    displayName: 'SettingsCart';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    samovivoz: Schema.Attribute.Component<'cart.samovivoz', true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::settings-cart.settings-cart'
    >;
  };
}

export interface ApiSettingsProductSettingsProduct
  extends Struct.SingleTypeSchema {
  collectionName: 'settings_products';
  info: {
    singularName: 'settings-product';
    pluralName: 'settings-products';
    displayName: 'SettingsProduct';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    dostavka: Schema.Attribute.RichText;
    uslugi: Schema.Attribute.RichText;
    oplata: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::settings-product.settings-product'
    >;
  };
}

export interface ApiShirinaShirina extends Struct.CollectionTypeSchema {
  collectionName: 'shirinas';
  info: {
    singularName: 'shirina';
    pluralName: 'shirinas';
    displayName: '\u0428\u0438\u0440\u0438\u043D\u0430';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.Decimal;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    calc_types: Schema.Attribute.Relation<
      'manyToMany',
      'api::calc-type.calc-type'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::shirina.shirina'
    >;
  };
}

export interface ApiSurfaceSurface extends Struct.CollectionTypeSchema {
  collectionName: 'surfaces';
  info: {
    singularName: 'surface';
    pluralName: 'surfaces';
    displayName: 'Surface';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::surface.surface'
    >;
  };
}

export interface ApiTypeType extends Struct.CollectionTypeSchema {
  collectionName: 'types';
  info: {
    singularName: 'type';
    pluralName: 'types';
    displayName: 'Type';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::type.type'>;
  };
}

export interface ApiTypeDesignTypeDesign extends Struct.CollectionTypeSchema {
  collectionName: 'type_designs';
  info: {
    singularName: 'type-design';
    pluralName: 'type-designs';
    displayName: 'Type_design';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToOne', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::type-design.type-design'
    >;
  };
}

export interface ApiTypeProcessingTypeProcessing
  extends Struct.CollectionTypeSchema {
  collectionName: 'type_processings';
  info: {
    singularName: 'type-processing';
    pluralName: 'type-processings';
    displayName: 'Type-processing';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::type-processing.type-processing'
    >;
  };
}

export interface ApiViewView extends Struct.CollectionTypeSchema {
  collectionName: 'views';
  info: {
    singularName: 'view';
    pluralName: 'views';
    displayName: 'View';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::view.view'>;
  };
}

export interface ApiVisotaVorsaVisotaVorsa extends Struct.CollectionTypeSchema {
  collectionName: 'visota_vorsas';
  info: {
    singularName: 'visota-vorsa';
    pluralName: 'visota-vorsas';
    displayName: '\u0412\u044B\u0441\u043E\u0442\u0430 \u0432\u043E\u0440\u0441\u0430';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    tovaries: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::visota-vorsa.visota-vorsa'
    >;
  };
}

export interface ApiVlagostoikostVlagostoikost
  extends Struct.CollectionTypeSchema {
  collectionName: 'vlagostoikosts';
  info: {
    singularName: 'vlagostoikost';
    pluralName: 'vlagostoikosts';
    displayName: '\u0412\u043B\u0430\u0433\u043E\u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::vlagostoikost.vlagostoikost'
    >;
  };
}

export interface ApiWeightWeight extends Struct.CollectionTypeSchema {
  collectionName: 'weights';
  info: {
    singularName: 'weight';
    pluralName: 'weights';
    displayName: 'Weight';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.Decimal;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::weight.weight'>;
  };
}

export interface ApiWoodTypeWoodType extends Struct.CollectionTypeSchema {
  collectionName: 'wood_types';
  info: {
    singularName: 'wood-type';
    pluralName: 'wood-types';
    displayName: 'Wood-type';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::wood-type.wood-type'
    >;
  };
}

export interface ApiZamokZamok extends Struct.CollectionTypeSchema {
  collectionName: 'zamoks';
  info: {
    singularName: 'zamok';
    pluralName: 'zamoks';
    displayName: '\u0417\u0430\u043C\u043E\u043A';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::zamok.zamok'>;
  };
}

export interface ApiZashitniySloyZashitniySloy
  extends Struct.CollectionTypeSchema {
  collectionName: 'zashitniy_sloys';
  info: {
    singularName: 'zashitniy-sloy';
    pluralName: 'zashitniy-sloys';
    displayName: '\u0417\u0430\u0449\u0438\u0442\u043D\u044B\u0439 \u0441\u043B\u043E\u0439';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::zashitniy-sloy.zashitniy-sloy'
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'>;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'>;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'>;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::abrasion.abrasion': ApiAbrasionAbrasion;
      'api::appointment.appointment': ApiAppointmentAppointment;
      'api::basis.basis': ApiBasisBasis;
      'api::brand.brand': ApiBrandBrand;
      'api::calc-type.calc-type': ApiCalcTypeCalcType;
      'api::category.category': ApiCategoryCategory;
      'api::class-h.class-h': ApiClassHClassH;
      'api::class-p.class-p': ApiClassPClassP;
      'api::class-pozhar.class-pozhar': ApiClassPozharClassPozhar;
      'api::collection.collection': ApiCollectionCollection;
      'api::color.color': ApiColorColor;
      'api::color-spectrum.color-spectrum': ApiColorSpectrumColorSpectrum;
      'api::componentiality.componentiality': ApiComponentialityComponentiality;
      'api::connection-type.connection-type': ApiConnectionTypeConnectionType;
      'api::country.country': ApiCountryCountry;
      'api::destination-material.destination-material': ApiDestinationMaterialDestinationMaterial;
      'api::dimension.dimension': ApiDimensionDimension;
      'api::faska.faska': ApiFaskaFaska;
      'api::filter.filter': ApiFilterFilter;
      'api::form.form': ApiFormForm;
      'api::format.format': ApiFormatFormat;
      'api::gloss-level.gloss-level': ApiGlossLevelGlossLevel;
      'api::invoice.invoice': ApiInvoiceInvoice;
      'api::length.length': ApiLengthLength;
      'api::lock-connection.lock-connection': ApiLockConnectionLockConnection;
      'api::manufacturer.manufacturer': ApiManufacturerManufacturer;
      'api::material.material': ApiMaterialMaterial;
      'api::namotka-n.namotka-n': ApiNamotkaNNamotkaN;
      'api::ob-toshina.ob-toshina': ApiObToshinaObToshina;
      'api::order.order': ApiOrderOrder;
      'api::package.package': ApiPackagePackage;
      'api::product.product': ApiProductProduct;
      'api::propertie.propertie': ApiPropertiePropertie;
      'api::room.room': ApiRoomRoom;
      'api::rulon-length.rulon-length': ApiRulonLengthRulonLength;
      'api::rulon-slicing.rulon-slicing': ApiRulonSlicingRulonSlicing;
      'api::rulon-width.rulon-width': ApiRulonWidthRulonWidth;
      'api::setting-rulon.setting-rulon': ApiSettingRulonSettingRulon;
      'api::settings-cart.settings-cart': ApiSettingsCartSettingsCart;
      'api::settings-product.settings-product': ApiSettingsProductSettingsProduct;
      'api::shirina.shirina': ApiShirinaShirina;
      'api::surface.surface': ApiSurfaceSurface;
      'api::type.type': ApiTypeType;
      'api::type-design.type-design': ApiTypeDesignTypeDesign;
      'api::type-processing.type-processing': ApiTypeProcessingTypeProcessing;
      'api::view.view': ApiViewView;
      'api::visota-vorsa.visota-vorsa': ApiVisotaVorsaVisotaVorsa;
      'api::vlagostoikost.vlagostoikost': ApiVlagostoikostVlagostoikost;
      'api::weight.weight': ApiWeightWeight;
      'api::wood-type.wood-type': ApiWoodTypeWoodType;
      'api::zamok.zamok': ApiZamokZamok;
      'api::zashitniy-sloy.zashitniy-sloy': ApiZashitniySloyZashitniySloy;
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
