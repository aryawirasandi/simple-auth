import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
      ],    
      imports: [
        {
          'react':[
            'useEffect',
            'useState'
          ]
        }
      ],
      defaultExportByFilename: true,
      dirs: [
        'src',
        'src/components',
        'src/pages'
      ],
      cache: true,
      reactComponent: true
    })
  ],
})
