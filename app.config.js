export default {
  name: 'Inventory',
  slug: 'inventory',
  platforms: [
    'ios',
    'android',
    'web'
  ],
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  backgroundColor: '#fff',
  userInterfaceStyle: 'automatic',
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
