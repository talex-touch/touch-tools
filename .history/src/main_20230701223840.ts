import { createApp } from 'vue'
import './style.css'
import PluginRoot from './views/PluginRoot.vue'
import ToolsRoot from './views/ToolsRoot.vue'
import { init } from '@talex-touch/utils/plugin/preload'

const { ipcRenderer } = require('electron')

ipcRenderer.on('@loaded', ({ type }) => {
  console.log( type )

    init(window)

    createApp(type === 'init' ? PluginRoot : ToolsRoot).mount('#app')
})
