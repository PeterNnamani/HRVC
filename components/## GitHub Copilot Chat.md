## GitHub Copilot Chat

- Extension: 0.42.2 (prod)
- VS Code: 1.113.0 (cfbea10c5ffb233ea9177d34726e6056e89913dc)
- OS: win32 10.0.26200 x64
- GitHub Account: Signed Out

## Network

User Settings:
```json
  "http.systemCertificatesNode": true,
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.121.6 (46 ms)
- DNS ipv6 Lookup: Error (10 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (2 ms)
- Electron fetch (configured): HTTP 200 (548 ms)
- Node.js https: HTTP 200 (587 ms)
- Node.js fetch: HTTP 200 (622 ms)

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.22 (8 ms)
- DNS ipv6 Lookup: Error (6 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (2 ms)
- Electron fetch (configured): HTTP 200 (729 ms)
- Node.js https: HTTP 200 (776 ms)
- Node.js fetch: HTTP 200 (246 ms)

Connecting to https://copilot-proxy.githubusercontent.com/_ping:
- DNS ipv4 Lookup: 20.199.39.224 (1 ms)
- DNS ipv6 Lookup: Error (5 ms): getaddrinfo ENOTFOUND copilot-proxy.githubusercontent.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): HTTP 200 (522 ms)
- Node.js https: HTTP 200 (782 ms)
- Node.js fetch: HTTP 200 (170 ms)

Connecting to https://mobile.events.data.microsoft.com: HTTP 404 (1733 ms)
Connecting to https://dc.services.visualstudio.com: HTTP 404 (1226 ms)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: HTTP 200 (735 ms)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: HTTP 200 (765 ms)
Connecting to https://default.exp-tas.com: HTTP 400 (778 ms)

Number of system certificates: 89

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).