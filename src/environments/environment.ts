// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTH_API: 'https://thegodshand.org/api',
  // AUTH_API: 'http://127.0.0.1:5000/api',
  web_site: 'https://thegodshand.org/',
  stripe_key: 'pk_test_51Kxx8qSDCcD8USttu1zp7YxMiCD4cE0SvFv4Q6mhpdV8BBJOjnY520Sxd6DuKo1IuhaUReqpfyWfZeIemXRD3VD700ThbUEDEd',
  stripe_pay_url: '/stripe'
  // stripe_pay_url: 'http://localhost:55080/stripe'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
