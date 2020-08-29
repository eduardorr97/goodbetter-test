import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type RouteType = {
  title: string;
  href: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
};
