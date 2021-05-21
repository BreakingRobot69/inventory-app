export default {
  name: 'Inventory',
  slug: 'inventory-app',
  platforms: [
    'ios',
    'android',
    'web'
  ],
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  backgroundColor: '#000000',
  userInterfaceStyle: 'auto',
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    'src/assets/**/*',
    '**/*'
  ],
  ios: {
    requireFullScreen: true,
    bundleIdentifier: 'fr.unkwownrobot.inventory',
    buildNumber: '1.0.0'
  },
  android: {
    package: 'fr.unkwownrobot.inventory',
    versionCode: 1
  }
}
