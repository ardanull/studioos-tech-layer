# StudioOS – Tech Layer Add-on (Feature Isolation + Plugin Core + Orchestration)

Bu repo, StudioOS benzeri bir Next.js/TypeScript projeye **eklenebilir** şekilde hazırlanmış örnek bir “teknoloji katmanı” içerir:

- ✅ **Feature isolation**: `src/features/<feature>/index.ts` ile “public API”
- ✅ **Plugin core**: core’a dokunmadan route/widget takabilen plugin registry
- ✅ **Orchestration**: state/render bildirimlerini frame bazlı batch + priority ile yönetme
- ✅ **Scalable architecture**: Ports & Adapters (DI ile altyapı soyutlama)

> Not: Bu örnek, bağımsız bir “paket” gibi de kullanılabilir. StudioOS içine taşımak için `src/` altındaki klasörleri projenize kopyalamanız yeterli.

## Hızlı Başlangıç

```bash
npm i
npm run typecheck
```

## Yapı

```
src/
  core/
    plugins/
    orchestrator/
    ports/
    adapters/
    di/
  features/
    billing/
    preferences/
  plugins/
    analytics/
```

## StudioOS’a ekleme

- `src/core/**` → core katmanı
- `src/features/**` → feature boundary örnekleri
- `src/plugins/**` → plugin örnekleri

Ardından kendi projenizde `src/core/bootstrap.ts` benzeri bir noktadan plugin’leri yükleyin.

## Lisans

MIT
