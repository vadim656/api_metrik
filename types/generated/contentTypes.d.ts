import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
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
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
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
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
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
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
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
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
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
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginTodoTask extends Schema.CollectionType {
  collectionName: 'todo_task';
  info: {
    tableName: 'task';
    singularName: 'task';
    pluralName: 'tasks';
    displayName: 'Task';
    description: 'A task in Strapi';
    kind: 'collectionType';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
    isDone: Attribute.Boolean & Attribute.DefaultTo<false>;
    related: Attribute.Relation<'plugin::todo.task', 'morphToOne'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::todo.task',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::todo.task',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAbrasionAbrasion extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::abrasion.abrasion',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::abrasion.abrasion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::abrasion.abrasion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAppointmentAppointment extends Schema.CollectionType {
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
    Name: Attribute.String;
    tovaries: Attribute.Relation<
      'api::appointment.appointment',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::appointment.appointment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::appointment.appointment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBasisBasis extends Schema.CollectionType {
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
    Name: Attribute.String;
    prtoducts: Attribute.Relation<
      'api::basis.basis',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::basis.basis',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::basis.basis',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandBrand extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::brand.brand',
      'oneToMany',
      'api::product.product'
    >;
    collections: Attribute.Relation<
      'api::brand.brand',
      'oneToMany',
      'api::collection.collection'
    >;
    id_parser: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCalcTypeCalcType extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::calc-type.calc-type',
      'oneToMany',
      'api::product.product'
    >;
    faskas: Attribute.Relation<
      'api::calc-type.calc-type',
      'manyToMany',
      'api::faska.faska'
    >;
    shirinas: Attribute.Relation<
      'api::calc-type.calc-type',
      'manyToMany',
      'api::shirina.shirina'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::calc-type.calc-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::calc-type.calc-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::product.product'
    >;
    Img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    parent: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'api::category.category'
    >;
    id_parser: Attribute.String;
    minprice: Attribute.Integer;
    maxprice: Attribute.Integer;
    child: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >;
    top_category: Attribute.Relation<
      'api::category.category',
      'manyToOne',
      'api::category.category'
    >;
    filter: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'api::filter.filter'
    >;
    filter_cat: Attribute.JSON;
    tovaries: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::product.product'
    >;
    Position: Attribute.Integer & Attribute.DefaultTo<0>;
    Enable_start_page: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClassHClassH extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::class-h.class-h',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::class-h.class-h',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::class-h.class-h',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClassPClassP extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::class-p.class-p',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::class-p.class-p',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::class-p.class-p',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClassPozharClassPozhar extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::class-pozhar.class-pozhar',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::class-pozhar.class-pozhar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::class-pozhar.class-pozhar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollectionCollection extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::collection.collection',
      'oneToMany',
      'api::product.product'
    >;
    brand: Attribute.Relation<
      'api::collection.collection',
      'manyToOne',
      'api::brand.brand'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColorColor extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::color.color',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::color.color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::color.color',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiColorSpectrumColorSpectrum extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::color-spectrum.color-spectrum',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::color-spectrum.color-spectrum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::color-spectrum.color-spectrum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiComponentialityComponentiality
  extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::componentiality.componentiality',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::componentiality.componentiality',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::componentiality.componentiality',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConnectionTypeConnectionType extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::connection-type.connection-type',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::connection-type.connection-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::connection-type.connection-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCountryCountry extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDestinationMaterialDestinationMaterial
  extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::destination-material.destination-material',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::destination-material.destination-material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::destination-material.destination-material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDimensionDimension extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::dimension.dimension',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dimension.dimension',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dimension.dimension',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaskaFaska extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::faska.faska',
      'oneToMany',
      'api::product.product'
    >;
    calc_types: Attribute.Relation<
      'api::faska.faska',
      'manyToMany',
      'api::calc-type.calc-type'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faska.faska',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faska.faska',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFilterFilter extends Schema.CollectionType {
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
    UUID: Attribute.UID;
    kategorii: Attribute.Relation<
      'api::filter.filter',
      'oneToOne',
      'api::category.category'
    >;
    brands: Attribute.Boolean;
    classHs: Attribute.Boolean;
    classPozhars: Attribute.Boolean;
    classPs: Attribute.Boolean;
    colors: Attribute.Boolean;
    countries: Attribute.Boolean;
    vlagostojkosts: Attribute.Boolean;
    namotkaNs: Attribute.Boolean;
    obToshinas: Attribute.Boolean;
    Name: Attribute.String;
    proizvoditels: Attribute.Boolean;
    shirinas: Attribute.Boolean;
    vysota_vorsas: Attribute.Boolean;
    zamoks: Attribute.Boolean;
    zashhitnyj_slojs: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::filter.filter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::filter.filter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFormForm extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::form.form',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::form.form', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFormatFormat extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::format.format',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::format.format',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::format.format',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlossLevelGlossLevel extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::gloss-level.gloss-level',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gloss-level.gloss-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gloss-level.gloss-level',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvoiceInvoice extends Schema.CollectionType {
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
    Name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLengthLength extends Schema.CollectionType {
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
    Name: Attribute.Decimal;
    products: Attribute.Relation<
      'api::length.length',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::length.length',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::length.length',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLockConnectionLockConnection extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::lock-connection.lock-connection',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lock-connection.lock-connection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lock-connection.lock-connection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiManufacturerManufacturer extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::manufacturer.manufacturer',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::manufacturer.manufacturer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::manufacturer.manufacturer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMaterialMaterial extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::material.material',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::material.material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::material.material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNamotkaNNamotkaN extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::namotka-n.namotka-n',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::namotka-n.namotka-n',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::namotka-n.namotka-n',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiObToshinaObToshina extends Schema.CollectionType {
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
    products: Attribute.Relation<
      'api::ob-toshina.ob-toshina',
      'oneToMany',
      'api::product.product'
    >;
    Name: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ob-toshina.ob-toshina',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ob-toshina.ob-toshina',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderOrder extends Schema.CollectionType {
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
    UID: Attribute.UID;
    Summ: Attribute.Decimal;
    Order_product: Attribute.Component<'order-product.order-product', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPackagePackage extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::package.package',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
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
    Name: Attribute.String;
    Desc: Attribute.RichText;
    Price: Attribute.Decimal;
    Price_Sale: Attribute.Decimal;
    categories: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::category.category'
    >;
    Attr: Attribute.Component<'attributes.attributes'>;
    IMG: Attribute.Media<'images', true>;
    Cat__s: Attribute.String;
    brand: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::brand.brand'
    >;
    collection: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::collection.collection'
    >;
    class_h: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::class-h.class-h'
    >;
    class_p: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::class-p.class-p'
    >;
    country: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::country.country'
    >;
    Connected_P: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >;
    Rulon: Attribute.Component<'product.product-variables', true>;
    calc_type: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::calc-type.calc-type'
    >;
    klass_pozharnoj: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::class-pozhar.class-pozhar'
    >;
    namotka: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::namotka-n.namotka-n'
    >;
    obshhaya_tolshhina: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::ob-toshina.ob-toshina'
    >;
    proizvoditel: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::manufacturer.manufacturer'
    >;
    faska: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::faska.faska'
    >;
    czveta: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::color.color'
    >;
    shirina: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::shirina.shirina'
    >;
    zashitniy_sloy: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::zashitniy-sloy.zashitniy-sloy'
    >;
    vlagostoikost: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::vlagostoikost.vlagostoikost'
    >;
    visota_vorsa: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::visota-vorsa.visota-vorsa'
    >;
    Slicing: Attribute.Component<'product.slicing', true>;
    type_designs: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::type-design.type-design'
    >;
    views: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::view.view'
    >;
    types: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::type.type'
    >;
    length: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::length.length'
    >;
    surfaces: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::surface.surface'
    >;
    properties: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::propertie.propertie'
    >;
    appointments: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::appointment.appointment'
    >;
    abrasions: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::abrasion.abrasion'
    >;
    forms: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::form.form'
    >;
    formats: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::format.format'
    >;
    rooms: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::room.room'
    >;
    dimensions: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::dimension.dimension'
    >;
    color_spectrums: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::color-spectrum.color-spectrum'
    >;
    connection_types: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::connection-type.connection-type'
    >;
    lock_connections: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::lock-connection.lock-connection'
    >;
    bases: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::basis.basis'
    >;
    wood_types: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::wood-type.wood-type'
    >;
    gloss_levels: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::gloss-level.gloss-level'
    >;
    type_processings: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::type-processing.type-processing'
    >;
    materials: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::material.material'
    >;
    weight: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::weight.weight'
    >;
    packages: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::package.package'
    >;
    destination_materials: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::destination-material.destination-material'
    >;
    componentialities: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::componentiality.componentiality'
    >;
    ART: Attribute.String;
    id_parser: Attribute.String;
    parent_category: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::category.category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPropertiePropertie extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::propertie.propertie',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::propertie.propertie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::propertie.propertie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRoomRoom extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::room.room',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::room.room', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::room.room', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiRulonLengthRulonLength extends Schema.CollectionType {
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
    Value: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rulon-length.rulon-length',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rulon-length.rulon-length',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRulonSlicingRulonSlicing extends Schema.CollectionType {
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
    Value: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rulon-slicing.rulon-slicing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rulon-slicing.rulon-slicing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRulonWidthRulonWidth extends Schema.CollectionType {
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
    Value: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rulon-width.rulon-width',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rulon-width.rulon-width',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSettingRulonSettingRulon extends Schema.SingleType {
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
    Step: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0.1;
        },
        number
      > &
      Attribute.DefaultTo<0.1>;
    Enable: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::setting-rulon.setting-rulon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::setting-rulon.setting-rulon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSettingsCartSettingsCart extends Schema.SingleType {
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
    samovivoz: Attribute.Component<'cart.samovivoz', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::settings-cart.settings-cart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::settings-cart.settings-cart',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSettingsProductSettingsProduct extends Schema.SingleType {
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
    dostavka: Attribute.RichText;
    uslugi: Attribute.RichText;
    oplata: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::settings-product.settings-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::settings-product.settings-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShirinaShirina extends Schema.CollectionType {
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
    Name: Attribute.Decimal;
    products: Attribute.Relation<
      'api::shirina.shirina',
      'oneToMany',
      'api::product.product'
    >;
    calc_types: Attribute.Relation<
      'api::shirina.shirina',
      'manyToMany',
      'api::calc-type.calc-type'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shirina.shirina',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shirina.shirina',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSurfaceSurface extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::surface.surface',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::surface.surface',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::surface.surface',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTypeType extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::type.type',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::type.type', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::type.type', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTypeDesignTypeDesign extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::type-design.type-design',
      'manyToOne',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::type-design.type-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::type-design.type-design',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTypeProcessingTypeProcessing extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::type-processing.type-processing',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::type-processing.type-processing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::type-processing.type-processing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiViewView extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::view.view',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::view.view', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::view.view', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiVisotaVorsaVisotaVorsa extends Schema.CollectionType {
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
    Name: Attribute.String;
    tovaries: Attribute.Relation<
      'api::visota-vorsa.visota-vorsa',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::visota-vorsa.visota-vorsa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::visota-vorsa.visota-vorsa',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVlagostoikostVlagostoikost extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::vlagostoikost.vlagostoikost',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vlagostoikost.vlagostoikost',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vlagostoikost.vlagostoikost',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWeightWeight extends Schema.CollectionType {
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
    Name: Attribute.Decimal;
    products: Attribute.Relation<
      'api::weight.weight',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::weight.weight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::weight.weight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWoodTypeWoodType extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::wood-type.wood-type',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::wood-type.wood-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::wood-type.wood-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiZamokZamok extends Schema.CollectionType {
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
    Name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::zamok.zamok',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::zamok.zamok',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiZashitniySloyZashitniySloy extends Schema.CollectionType {
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
    Name: Attribute.String;
    products: Attribute.Relation<
      'api::zashitniy-sloy.zashitniy-sloy',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::zashitniy-sloy.zashitniy-sloy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::zashitniy-sloy.zashitniy-sloy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::todo.task': PluginTodoTask;
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
    }
  }
}
