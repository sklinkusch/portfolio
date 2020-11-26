module.exports = {
  dev: {
    "child-src": ["'self'"],
    "connect-src": ["'self'"],
    "font-src": ["'self'"],
    "img-src": ["data:", "https://cdn-1.wp.nginx.com/wp-content/uploads/2016/03/PHP-logo.svg_.png", "https://github.com/sklinkusch/", "https://raw.githubusercontent.com/sklinkusch/", "'self'"],
    "manifest-src": ["'self'"],
    "media-src": ["'self'"],
    "object-src": ["'none'"],
    "script-src": ["'unsafe-inline'", "'self'"],
    "style-src": ["'unsafe-inline'", "'self'"],
    "frame-ancestors": ["'none'"],
    "form-action": ["https://script.google.com/macros/s/AKfycbym7tLzfVpSgrTC8D88lGqh163RMXwfP9m3FGqYZGyY99UrY5M/exec"],
    "base-uri": ["'self'"],
  },
  prod: {
    "child-src": ["'self'"],
    "connect-src": ["'self'"],
    "font-src": ["'self'"],
    "img-src": ["data:", "https://cdn-1.wp.nginx.com/wp-content/uploads/2016/03/PHP-logo.svg_.png", "https://github.com/sklinkusch/", "https://raw.githubusercontent.com/sklinkusch/", "'self'"],
    "manifest-src": ["'self'"],
    "media-src": ["data:", "'self'"],
    "object-src": ["'none'"],
    "script-src": ["'unsafe-inline'", "'self'"],
    "style-src": ["'unsafe-inline'", "'self'"],
    "frame-ancestors": ["'none'"],
    "form-action": ["https://script.google.com/macros/s/AKfycbym7tLzfVpSgrTC8D88lGqh163RMXwfP9m3FGqYZGyY99UrY5M/exec"],
    "base-uri": ["'self'"],
  },
  build: {
    "child-src": ["'self'"],
    "connect-src": ["'self'"],
    "font-src": ["'self'"],
    "img-src": ["data:", "https://cdn-1.wp.nginx.com/wp-content/uploads/2016/03/PHP-logo.svg_.png", "https://github.com/sklinkusch/", "https://raw.githubusercontent.com/sklinkusch/", "'self'"],
    "manifest-src": ["'self'"],
    "media-src": ["data:", "'self'"],
    "object-src": ["'none'"],
    "script-src": ["'unsafe-inline'", "'self'"],
    "style-src": ["'unsafe-inline'", "'self'"],
    "frame-ancestors": ["'none'"],
    "form-action": ["https://script.google.com/macros/s/AKfycbym7tLzfVpSgrTC8D88lGqh163RMXwfP9m3FGqYZGyY99UrY5M/exec"],
    "base-uri": ["'self'"],
  },
}
