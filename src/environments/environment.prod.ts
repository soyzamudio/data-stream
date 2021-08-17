import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const environment = {
  production: true,
  pubKey: 'pub-c-83634a09-b64e-41cf-8b58-b694d32b8781',
  subKey: 'sub-c-d078711c-fbef-11eb-bf4c-22908b043f7e',
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
