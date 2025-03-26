import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: 'cookingrecipie',
  plugins: [
    tailwindcss(),
    // react(),
  ],
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   base: '/<repo-name>/', // <-- Add this line (replace <repo-name> with your actual repository name)
//   plugins: [react()],
// });
