import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsPoints extends Struct.ComponentSchema {
  collectionName: 'components_components_points';
  info: {
    description: '';
    displayName: 'Points';
  };
  attributes: {
    info: Schema.Attribute.Text;
  };
}

export interface LayoutFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    description: '';
    displayName: 'Features Section';
  };
  attributes: {
    feature: Schema.Attribute.Component<'components.feature', true>;
    heading: Schema.Attribute.String;
    information: Schema.Attribute.Text;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    socialLink: Schema.Attribute.Component<'components.link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    about: Schema.Attribute.Component<'components.link', false>;
    blog: Schema.Attribute.Component<'components.link', false>;
    career: Schema.Attribute.Component<'components.link', false>;
    ctaButton: Schema.Attribute.Component<'components.link', false>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    services: Schema.Attribute.Component<'components.link', false>;
    work: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface LayoutSlider extends Struct.ComponentSchema {
  collectionName: 'components_layout_sliders';
  info: {
    description: '';
    displayName: 'Slider';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    link: Schema.Attribute.Component<'components.link', false>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.feature': ComponentsFeature;
      'components.link': ComponentsLink;
      'components.points': ComponentsPoints;
      'layout.features': LayoutFeatures;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.slider': LayoutSlider;
    }
  }
}
