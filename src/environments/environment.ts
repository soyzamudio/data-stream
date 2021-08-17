// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const environment = {
  production: false,
  pubKey: 'pub-c-83634a09-b64e-41cf-8b58-b694d32b8781',
  subKey: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe',
  sidemenu: [
    {
      image: 'https://i.ibb.co/6tKFLWG/home.png',
      label: 'Home',
      icon: 'home' as IconProp,
      href: null,
    },
    {
      image: 'https://i.ibb.co/G7jRx4j/hash.png',
      label: 'Github',
      href: 'https://github.com/soyzamudio',
      icon: 'code-branch' as IconProp,
    },
    {
      image: 'https://i.ibb.co/Gsr7qyX/notification.png',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/josezamudio',
      icon: 'user' as IconProp,
    },
    {
      image: 'https://i.ibb.co/b2zRPbZ/email.png',
      label: 'zamudio@outlook.com',
      icon: 'envelope' as IconProp,
      href: null,
    },
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
