// next.config.js
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');
const withImages = require('next-images')

module.exports = withImages(withFonts(
    withSass(
        {
            webpack(config, options) {
                config.resolve.modules = [...config.resolve.modules, './'];
                return config
            }
        }
    )
))