@app
begin-app

@http
get /
get /api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL