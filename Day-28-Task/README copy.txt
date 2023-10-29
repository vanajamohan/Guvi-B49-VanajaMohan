Step 1: Download cart-task folder from github
Step 2: Open in visual Studio Code
Step 3: run 'npm install' command in terminal
Step 4: run 'npm install -D tailwindcss postcss autoprefixer'
        
Step 5: run npx tailwindcss init -p
Step 6: run 'npm run dev' command to see the output screen
Step 7: This will create a tailwind.config.js file in the root of your project. 
        Open the tailwind.config.js file and add this code to it: 
            module.exports = {
            content: [
                "./src/**/*.{js,jsx,ts,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
            }
Step 8: Finally npm run dev