import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

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
          'react': [
            'useEffect',
            'useState'
          ]
        }
      ],
      defaultExportByFilename: true,
      dirs: [
        'src/**',
        'src/components',
        'src/pages'
      ],
      cache: false,
      reactComponent: true
    })
  ],
})
