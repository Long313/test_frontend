# 1.Name Project: Test Frontend Project

# 2.Setup Project
   `2.1.You can clone project by run:`
    git clone https://github.com/Long313/test_frontend.git

   `2.2. Install node_modules folder by run:`
    npm install


   `2.3.In the project directory, you can run project:`
    npm start
    
# 3.Features
  `In this project, it has three pages with features:`
   *First, the homepage:
    - Show all list product.
    - Search product by product name.
    - When you scroll down auto loadmore new 20 products .
    - Auto scroll top when click button scroll top.
    - Redirect to category product page when click item at sidebar.
    - When you click product redirect detail product page.

   *Second, the product detail page:
    - Display information of product.

   *Third, the category product page:
     - Show all products of the same type

# 4. Project folder structure
    /src
        /common
            - index.ts
            - type.ts
        /components
            /Content
                - index.tsx
                - contentStyle.css
            /Header
                - index.tsx
                - headerStyle.css
            /Rating
                - index.tsx
                - starStyle.css
            /ScrollToTopButton
                - index.tsx
                - scrollToTopButtonStyle.css
        /config
            - index.ts
        /constants
            - index.ts
        /hooks
            - useDebounce.ts
        /images
            - arrowRight.svg
            - home.svg
        /pages
            /CategoryProduct
                - index.tsx
                - categoryProductStyle.css
            /Home
                - index.tsx
                - homeStyle.css
            /ProductDetail
                - index.tsx
                - productDetailStyle.css
        /services
            - api.ts
        /utils
            -api.ts
        App.css
        App.tsx
        index.css
        index.tsx
    - .env
    - package.json
    - tsconfig.json
# 5. Library and technology used

    - ReactJS
    - React router dom
    - Axios
    - TypeScript
    - React infinite scroll component
    - React toastify
    - React icons

# 6. Author
    Fullname: Xuan Long Tran

