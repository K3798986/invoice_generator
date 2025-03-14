
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/invoice_generator/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/invoice_generator"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 847, hash: 'cdc6d3bcdd7f5277f578551886e982f08283ca4d838915e705db0f2201ef4290', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1133, hash: '2152f14941eca049d1b503fcb59ccd47aaac54f9cdb1f675908eee3209cc1a44', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11823, hash: 'bfeb449618ab19cd19e3f1a88952266dee90cd8e65642688e6cfd220f55e0deb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MIPMNSQC.css': {size: 3114, hash: 'YnK7tNn4EWE', text: () => import('./assets-chunks/styles-MIPMNSQC_css.mjs').then(m => m.default)}
  },
};
