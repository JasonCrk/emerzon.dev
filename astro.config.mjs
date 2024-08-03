import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
    },
    integrations: [
        icon({
            include: {
                hugeicons: ['*'],
                mdi: ['*'],
            },
        }),
    ],
})
