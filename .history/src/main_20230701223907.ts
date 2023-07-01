import { createApp } from 'vue'
import './style.css'
import PluginRoot from './views/PluginRoot.vue'
import ToolsRoot from './views/ToolsRoot.vue'
import { init } from '@talex-touch/utils/plugin/preload'

const { ipcRenderer } = require('electron')

ipcRenderer.on('@loaded', (event, data) => {
  console.log( data )

    init(window)

    createApp(data.type === 'init' ? PluginRoot : ToolsRoot).mount('#app')
})
