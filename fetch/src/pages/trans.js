import React from 'react';
import {useTranslations} from 'fusion-plugin-i18n-react';

export default (props) => {
  const translate = useTranslations();
  return <span>translate(`cities.${props.city}`)</span>;
};