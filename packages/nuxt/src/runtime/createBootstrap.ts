import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createBootstrap as createBootstrapVue } from 'bootstrap-vue-next/plugins/createBootstrap'

export default defineNuxtPlugin((nuxtApp) => {
  const opts = useRuntimeConfig().public.bootstrapVueNext.plugin

  nuxtApp.vueApp.use(
    createBootstrapVue({
      ...opts,
      components: {
        ...opts?.components,
        global: {
          routerComponentName: 'BLink',
        },
        BLink: {
          routerComponentName: 'RouterLink',
          ...opts?.components?.BLink
        },
        BModal: {
          teleportTo: '#teleports',
          ...opts?.components?.BModal,
        },
        BOffcanvas: {
          teleportTo: '#teleports',
          ...opts?.components?.BOffcanvas,
        },
        BOrchestrator: {
          teleportTo: '#teleports',
          ...opts?.components?.BOrchestrator,
        },
        BApp: {
          teleportTo: '#teleports',
          ...opts?.components?.BApp,
        },
      },
    }),
  )
})
