// vite.config.js
import tailwindcss from "file:///C:/Users/ASUS/Documents/Development/labs/team-project/fe-furniture-v2/node_modules/@tailwindcss/vite/dist/index.mjs";
import react from "file:///C:/Users/ASUS/Documents/Development/labs/team-project/fe-furniture-v2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///C:/Users/ASUS/Documents/Development/labs/team-project/fe-furniture-v2/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\ASUS\\Documents\\Development\\labs\\team-project\\fe-furniture-v2";
var vite_config_default = defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020"
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    // needed for the docker container port mapping to work
    strictPort: true,
    port: 5173,
    // default
    origin: "http://0.0.0.0:5173"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBU1VTXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxsYWJzXFxcXHRlYW0tcHJvamVjdFxcXFxmZS1mdXJuaXR1cmUtdjJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFTVVNcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXGxhYnNcXFxcdGVhbS1wcm9qZWN0XFxcXGZlLWZ1cm5pdHVyZS12MlxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQVNVUy9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvbGFicy90ZWFtLXByb2plY3QvZmUtZnVybml0dXJlLXYyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHRhaWx3aW5kY3NzKCldLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgfSxcbiAgICBob3N0OiB0cnVlLCAvLyBuZWVkZWQgZm9yIHRoZSBkb2NrZXIgY29udGFpbmVyIHBvcnQgbWFwcGluZyB0byB3b3JrXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBwb3J0OiA1MTczLCAvLyBkZWZhdWx0XG4gICAgb3JpZ2luOiAnaHR0cDovLzAuMC4wLjA6NTE3MycsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVosT0FBTyxpQkFBaUI7QUFDemEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUg3QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztBQUFBLEVBQ2hDLGNBQWM7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsTUFBTTtBQUFBO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUE7QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
